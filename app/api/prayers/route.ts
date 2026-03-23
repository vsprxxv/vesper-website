import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    if (!bearerToken) {
      return NextResponse.json({ error: 'Bearer token not configured' }, { status: 500 });
    }
    const userRes = await fetch(
      'https://api.twitter.com/2/users/by/username/VSPRXXV',
      { headers: { 'Authorization': `Bearer ${bearerToken}` } }
    );
    const userData = await userRes.json();
    const userId = userData.data?.id;
    if (!userId) {
      return NextResponse.json({ error: 'Could not find user' }, { status: 500 });
    }
    const tweetsRes = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?max_results=50&tweet.fields=created_at`,
      { headers: { 'Authorization': `Bearer ${bearerToken}` } }
    );
    const tweetsData = await tweetsRes.json();
    const prayers = tweetsData.data?.map((tweet: any, index: number) => ({
      id: index + 1,
      text: tweet.text,
      created_at: tweet.created_at,
      tweet_id: tweet.id
    })) || [];
    return NextResponse.json({ prayers });
  } catch (err) {
    console.error('Error fetching prayers:', err);
    return NextResponse.json({ error: 'Failed to fetch prayers' }, { status: 500 });
  }
}
