import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY is not configured' },
        { status: 500 }
      );
    }

    // Use direct REST API call since chatkit.sessions is not yet in Node.js SDK
    const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'chatkit_beta=v1',
      },
      body: JSON.stringify({
        workflow: {
          id: 'wf_68ec8e70297c8190a0e5b745cc618aea0a1f6c4ce74ed415',
        },
        user: 'user_' + Date.now(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('ChatKit API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create ChatKit session', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ client_secret: data.client_secret });
  } catch (error) {
    console.error('Error creating ChatKit session:', error);
    return NextResponse.json(
      { error: 'Failed to create ChatKit session' },
      { status: 500 }
    );
  }
}
