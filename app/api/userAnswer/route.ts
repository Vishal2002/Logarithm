import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { mockId, question, correctAnswer, userAnswer, feedback, rating, userEmail } = await req.json();

    const savedAnswer = await prisma.userAnswer.create({
      data: {
        mockId,
        question,
        correctAnswer,
        userAnswer,
        feedback,
        Rating: rating,
        userEmail,
      },
    });

    return NextResponse.json(savedAnswer, { status: 200 });
  } catch (error) {
    console.error('Error saving user answer:', error);
    return NextResponse.json({ error: 'Failed to save user answer' }, { status: 500 });
  }
}