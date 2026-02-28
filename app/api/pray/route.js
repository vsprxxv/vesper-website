import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request) {
  try {
    // Parse the incoming JSON body
    let prayer;
    try {
      ({ prayer } = await request.json());
    } catch (e) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    // Basic validation
    if (!prayer || typeof prayer !== 'string' || prayer.trim() === '') {
      return NextResponse.json({ error: 'Prayer text is required' }, { status: 400 });
    }

    // Get API key from environment variables
    const grokKey = process.env.GROK_API_KEY;

    if (!grokKey) {
      return NextResponse.json({ error: 'Server configuration error: API key missing' }, { status: 500 });
    }

    // Call xAI / Grok API
    const grokRes = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${grokKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'grok-4-1-fast-reasoning',  // Change to 'grok-beta' or 'grok-3' if this model isn't available
        messages: [
          {
            role: 'system',
            content: 'Transform prayers into spare, luminous Hemingway/Dillard style. Short sentences. Remove desperation. Add grace. Output only the transformed prayer.'
          },
          {
            role: 'user',
            content: prayer
          }
        ],
        temperature: 0.7,
        max_tokens: 180  // Prevent overly long responses
      })
    });

    // Handle non-200 responses safely
    if (!grokRes.ok) {
      const errorText = await grokRes.text();  // Use .text() to avoid JSON parse crash on error bodies
      console.error('xAI API failed:', grokRes.status, errorText);
      return NextResponse.json(
        { error: `xAI API error (${grokRes.status}): ${errorText.slice(0, 300)}` },
        { status: 502 }
      );
    }

    // Parse successful response
    const grokData = await grokRes.json();

    if (!grokData?.choices?.[0]?.message?.content) {
      return NextResponse.json({ error: 'Invalid response from AI' }, { status: 500 });
    }

    const transformed = grokData.choices[0].message.content.trim();

    return NextResponse.json({
      success: true,
      transformedPrayer: transformed
    });

  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}