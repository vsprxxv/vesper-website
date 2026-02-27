import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { prayer } = body
    
    if (!prayer || prayer.trim().length === 0) {
      return NextResponse.json({ error: 'Prayer text is required' }, { status: 400 })
    }

    const grokApiKey = process.env.GROK_API_KEY
    
    if (!grokApiKey) {
      console.error('GROK_API_KEY not found in environment')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    console.log('Calling Grok API...')
    
    const grokResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${grokApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-4-1-fast-reasoning',
        messages: [
          {
            role: 'system',
            content: 'Transform prayers into the spare, luminous style of Ernest Hemingway and Annie Dillard. Use short declarative sentences. Remove desperation. Add quiet observation and grace. Make each word essential. Output only the transformed prayer, nothing else.'
          },
          {
            role: 'user',
            content: prayer
          }
        ],
        temperature: 0.7
      })
    })

    if (!grokResponse.ok) {
      const errorText = await grokResponse.text()
      console.error('Grok API error:', grokResponse.status, errorText)
      return NextResponse.json({ error: 'AI transformation failed' }, { status: 500 })
    }

    const grokData = await grokResponse.json()
    const transformedPrayer = grokData.choices[0].message.content

    console.log('Creating table if not exists...')
    
    await sql`
      CREATE TABLE IF NOT EXISTS prayers (
        id SERIAL PRIMARY KEY,
        original_text TEXT NOT NULL,
        transformed_text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    console.log('Inserting prayer...')
    
    await sql`
      INSERT INTO prayers (original_text, transformed_text)
      VALUES (${prayer}, ${transformedPrayer})
    `

    console.log('Prayer submitted successfully')

    return NextResponse.json({
      success: true,
      transformedPrayer
    }, { status: 200 })

  } catch (error: any) {
    console.error('Prayer submission error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process prayer' },
      { status: 500 }
    )
  }
}

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
