// app/dashboard/interview/[interviewId]/start/page.tsx
import { getInterview } from '@/lib/getInterview';
import StartInterviewClient from './StartInterviewClient';

export default async function StartInterviewPage({ params }: { params: { interviewId: string } }) {
  try {
    const interviewData = await getInterview(params.interviewId);
    return <StartInterviewClient interviewData={interviewData} />;
  } catch (error) {
    console.error('Error fetching interview data:', error);
    return <div>Error loading interview data</div>;
  }
}