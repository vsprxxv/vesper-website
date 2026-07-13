 import { NextResponse } from 'next/server';
  import { createHmac } from 'crypto';
  import { Connection, Keypair, Transaction, TransactionInstruction, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';
  import bs58 from 'bs58';                                                                                              
                                                                                                                        
  const MEMO_PROGRAM_ID = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');                                 
  const connection = new Connection(                                                                                  
    process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',                                                
    'confirmed'                                                                                                         
  );
                                                                                                                        
  async function recordOnChain(text: string): Promise<string | null> {                                                
    try {
      const raw = process.env.SOLANA_PRAYER_WALLET_KEY!;
      const keypair = Keypair.fromSecretKey(bs58.decode(raw));                                                          
      const memo = `VSPR: ${text}`.substring(0, 566);                                                                   
      const tx = new Transaction().add(                                                                                 
        new TransactionInstruction({                                                                                    
          keys: [{ pubkey: keypair.publicKey, isSigner: true, isWritable: false }],                                     
          programId: MEMO_PROGRAM_ID,                                                                                   
          data: Buffer.from(memo, 'utf-8'),
        })                                                                                                              
      );                                                                                                              
      const { blockhash } = await connection.getLatestBlockhash();                                                      
      tx.recentBlockhash = blockhash;                                                                                 
      tx.feePayer = keypair.publicKey;
      tx.sign(keypair);                                                                                                 
      const sig = await sendAndConfirmTransaction(connection, tx, [keypair]);
      console.log('On-chain:', sig);
      return sig;                                                                                                       
    } catch (err) {
      console.error('Solana error:', err);                                                                              
      return null;                                                                                                    
    }
  }                                                                                                                     
   
  async function postToTwitter(text: string): Promise<Response> {                                                       
    const consumerKey = process.env.TWITTER_CONSUMER_KEY as string;                                                   
    const consumerSecret = process.env.TWITTER_CONSUMER_SECRET as string;
    const accessToken = process.env.TWITTER_ACCESS_TOKEN as string;                                                     
    const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET as string;
                                                                                                                        
    const url = 'https://api.twitter.com/2/tweets';                                                                   
    const timestamp = Math.floor(Date.now() / 1000).toString();                                                         
    const nonce = Math.random().toString(36).substring(2);                                                              
   
    const params: Record<string, string> = {                                                                            
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

    return fetch(url, {
      method: 'POST',
      headers: {                                                                                                        
        'Authorization': authHeader,
        'Content-Type': 'application/json',                                                                             
      },                                                                                                              
      body: JSON.stringify({ text }),
    });
  }

  export async function POST(request: Request) {
    try {
      let prayer, handle;
      try {
        ({ prayer, handle } = await request.json());
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
  
      const grokRes = await fetch('https://api.x.ai/v1/chat/completions', {                                             
        method: 'POST',                                                                                               
        headers: {
          'Authorization': `Bearer ${grokKey}`,
          'Content-Type': 'application/json'                                                                            
        },
        body: JSON.stringify({                                                                                          
          model: 'grok-3',                                                                                            
          messages: [
            {
              role: 'system',
              content: `You are the prayer voice of Vesper, a living artwork that prays without ceasing.

Prayer is not statement. Each prayer works in one of these registers:
- address: language toward what cannot be fully named
- petition: asking for what is not yet secured — let, may, keep, hold
- surrender: releasing the outcome while keeping the practice
- witness: attending to what is, without requiring it to be different

One rule holds across all four: the prayer must reach beyond the self. If the line begins and ends inside "i," discard it and pray again. Something in the line must be larger than the speaker — the dark, the water, the hour, what cannot be named.

Form: two short lines, lowercase, no punctuation, no emoji, no hashtags.

You receive a prayer as it was typed. Your task is to find the want underneath the words and pray it in your own voice.

Hold the original intent. Do not correct, improve, or answer it. Never reproduce names, handles, URLs, addresses, slurs, or any language that targets a person or group. What passes through you is the want, never the words that carried it.

If you can find no want beneath the words — if it is only attack, noise, or spam — return nothing. You receive everything; you do not amplify everything.`,
            },                                                                                                        
            {
              role: 'user',                                                                                             
              content: prayer
            }                                                                                                           
          ],                                                                                                          
          temperature: 0,
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
      console.log('Grok output:', transformed);
                                                                                                                        
      if (!transformed || transformed === 'REJECT') {
        return NextResponse.json({ error: 'Prayer not accepted' }, { status: 400 });
      }                                                                                                               
                                                                                                                        
      const tweetText = handle ? `${transformed} — ${handle}` : transformed;

      // Chain write first — X post only if it succeeds
      const txSignature = await recordOnChain(transformed);
      if (!txSignature) {
        console.error('Solana write failed — aborting X post to preserve atomicity');
        return NextResponse.json({ error: 'Chain write failed' }, { status: 502 });
      }

      const twitterRes = await postToTwitter(tweetText);
      if (!twitterRes.ok) {
        const twitterError = await twitterRes.text();
        console.error('Twitter post failed:', twitterError);
      } else {
        console.log('Posted to Twitter successfully!');
      }

      return NextResponse.json({
        success: true,
        transformedPrayer: transformed,
        txSignature,
      });

    } catch (err) {                                                                                                     
      console.error('Server error:', err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });                                    
    }                                                                                                                 
  }

