import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const { prayer } = await request.json()
    
    if (!prayer) {
      return NextResponse.json({ error: 'Prayer required' }, { status: 400 })
    }

    const grokKey = process.env.GROK_API_KEY
    
    if (!grokKey) {
      return NextResponse.json({ error: 'Config error' }, { status: 500 })
    }

    const grokRes = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${grokKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'grok-4-1-fast-reasoning',
        messages: [
          {
            role: 'system',
            content: 'Transform prayers into spare, luminous Hemingway/Dillard style. Short sentences. Remove desperation. Add grace. Output only transformed prayer.'
          },
          {
            role: 'user',
            content: prayer
          }
        ],
        temperature: 0.7
      })
    })

    const grokData = await grokRes.json()
    const transformed = grokData.choices[0].message.content

    return NextResponse.json({ 
      success: true, 
      transformedPrayer: transformed 
    })

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
