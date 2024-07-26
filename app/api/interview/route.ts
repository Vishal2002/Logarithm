import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const { jobRole, jobDescription, experience, questions, createdBy } = await request.json();
    const interview = await prisma.interview.create({
      data: {
        mockId: uuidv4(),
        jsonMockResp: JSON.stringify(questions),
        jobPosition: jobRole,
        jobDescription,
        createdBy,
        experience: experience.toString(),
      },
    });
    return NextResponse.json(interview);
  } catch (error) {
    console.error('Error creating interview:', error);
    return NextResponse.json({ error: 'Failed to create interview' }, { status: 500 });
  }
}
