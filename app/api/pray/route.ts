import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';

async function postToTwitter(text) {
  const consumerKey = process.env.TWITTER_CONSUMER_KEY;
  const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
  const accessToken = process.env.TWITTER_ACCESS_TOKEN;
  const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

  const url = 'https://api.twitter.com/2/tweets';
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = Math.random().toString(36).substring(2);

  const params = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: nonce,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_token: accessToken,
    oauth_version: '1.0',
  };

  const paramString = Object.keys(params).sort()
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  const baseString = `POST&${encodeURIComponent(url)}&${encodeURIComponent(paramString)}`;
  const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(accessTokenSecret)}`;
  const signature = createHmac('sha1', signingKey).update(baseString).digest('base64');

  const authHeader = 'OAuth ' + 
    Object.keys(params).sort()
      .map(k => `${encodeURIComponent(k)}="${encodeURIComponent(params[k])}"`)
      .join(', ') + 
    `, oauth_signature="${encodeURIComponent(signature)}"`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  return res;
}

export async function POST(request) {
  try {
    let prayer;
    try {
      ({ prayer } = await request.json());
    } catch (e) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    if (!prayer || typeof prayer !== 'string' || prayer.trim() === '') {
      return NextResponse.json({ error: 'Prayer text is required' }, { status: 400 });
    }

    const grokKey = process.env.XAI_API_KEY;
    if (!grokKey) {
      return NextResponse.json({ error: 'API key missing' }, { status: 500 });
    }

    // Transform with Grok
    const grokRes = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${grokKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'grok-3-mini',
        messages: [
          {
            role: 'system',
            content: 'Transform this prayer into spare, luminous prose in the style of Hemingway and Annie Dillard combined. Short sentences. Remove desperation. Add grace and wonder. Keep it under 200 characters. Output only the transformed prayer, nothing else.'
          },
          {
            role: 'user',
            content: prayer
          }
        ],
        temperature: 0.7,
        max_tokens: 100
      })
    });

    if (!grokRes.ok) {
      const errorText = await grokRes.text();
      console.error('Grok error:', grokRes.status, errorText);
      return NextResponse.json({ error: `xAI API error: ${errorText.slice(0, 300)}` }, { status: 502 });
    }

    const grokData = await grokRes.json();
    const transformed = grokData.choices[0].message.content.trim();
    console.log('Transformed prayer:', transformed);

    // Post to Twitter
    const twitterRes = await postToTwitter(transformed);
    if (!twitterRes.ok) {
      const twitterError = await twitterRes.text();
      console.error('Twitter post failed:', twitterError);
    } else {
      console.log('Posted to Twitter successfully!');
    }

    return NextResponse.json({
      success: true,
      transformedPrayer: transformed
    });

  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}