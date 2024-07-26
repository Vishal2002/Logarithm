import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const email = url.searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const mockInterview = await prisma.interview.findMany({
      where: {
        createdBy: email,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  
    return NextResponse.json(mockInterview);
  } catch (error) {
    console.error('Error fetching user feedback:', error);
    return NextResponse.json({ error: 'Failed to fetch feedback' }, { status: 500 });
  }
}