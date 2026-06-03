  import { NextResponse } from 'next/server';
  import { createHmac } from 'crypto';                                                                                                                        
  import { Connection, Keypair, Transaction, TransactionInstruction, PublicKey } from '@solana/web3.js';                                                    
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
      const sig = await connection.sendRawTransaction(tx.serialize());                                                                                      
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
             content: 'You are a gatekeeper for a public prayer transmission. Read the submission. If it is a genuine prayer — a   
  request, a hope, a grief, an intention, an intercession — return it exactly as written, trimmed to 200 characters if  
  needed. Do not change the words. Do not add anything. If it is profane, abusive, spam, nonsense, or not a prayer,
  return only the single word REJECT. Nothing else.' 
            },                                                                                                                                                
            {
              role: 'user',                                                                                                                                   
              content: prayer                                                                                                                               
            }
          ],
          temperature: 0.8,
          max_tokens: 100
        })
      });

      if (!grokRes.ok) {
        const errorText = await grokRes.text();
        console.error('Grok error:', grokRes.status, errorText);                                                                                              
        return NextResponse.json({ error: `xAI API error: ${errorText.slice(0, 300)}` }, { status: 502 });
      }                                                                                                                                                       
                                                                                                                                                            
      const grokData = await grokRes.json();                                                                                                                  
       if (transformed === 'REJECT') {                                                                                       
    return NextResponse.json({ error: 'Prayer not accepted' }, { status: 400 });                                        
  }

      const tweetText = handle ? `${transformed} — ${handle}` : transformed;                                                                                  
  
      const [twitterRes, txSignature] = await Promise.all([                                                                                                   
        postToTwitter(tweetText),                                                                                                                           
        recordOnChain(transformed),
      ]);

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
