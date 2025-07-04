
import { NextResponse } from 'next/server';
import { getSponsors } from '@/lib/sponsors';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const sponsors = await getSponsors();
    return NextResponse.json({ sponsors });
  } catch (error) {
    console.error('Error fetching sponsors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sponsors' },
      { status: 500 }
    );
  }
}
