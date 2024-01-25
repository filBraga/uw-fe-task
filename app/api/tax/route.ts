import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'Success!' });
}

export async function POST(request: Request) {
    const { name, country, taxId } = await request.json();

    if (!name || !country || !taxId) return NextResponse.json({ message: 'Missing required data' });

    return NextResponse.json({ message: 'Success!' });
}
