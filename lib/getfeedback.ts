import prisma from '@/utils/prisma';

export async function getFeedback(paramId: string) {
  try {
    const feedback = await prisma.userAnswer.findMany({
      where: {
        mockId: paramId,
      },
      orderBy: {
        id: 'asc',
      },
    });

    // console.log(feedback, "feedback");
    
    if (!feedback || feedback.length === 0) {
      throw new Error('UserAnswer not found');
    }
    
    return feedback;
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
}