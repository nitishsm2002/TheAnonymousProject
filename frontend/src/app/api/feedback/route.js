import { NextResponse } from 'next/server';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_CAP_URL ||
  'http://localhost:4004/odata/v4/AnonymousService';

export async function GET() {
  try {
    const response = await fetch(`${BACKEND_URL}/Feedback`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    return NextResponse.json({ error: 'Failed to fetch feedback' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(`${BACKEND_URL}/Feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        toName: body.toName || null,
        message: body.message,
        category: body.category,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating feedback:', error);
    return NextResponse.json({ error: 'Failed to create feedback' }, { status: 500 });
  }
}
