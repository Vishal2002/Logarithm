import prisma from '@/utils/prisma';

export async function getInterview(mockId: string) {
  try {
    const interview = await prisma.interview.findUnique({
      where: {
        mockId: mockId,
      }
    });
    // console.log(interview,"Interciew");
    if (!interview) {
      throw new Error('Interview not found');
    }

    return interview;
  } catch (error) {
    console.error('Error fetching interview:', error);
    throw error;
  }
}