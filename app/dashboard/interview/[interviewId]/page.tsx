import { getInterview } from '@/lib/getInterview';
import InterviewClient from './InterviewClient';

export default async function InterviewPage({ params }: { params: { interviewId: string } }) {
  let interviewData;

  try {
    // console.log(params.interviewId, "mockId");
    interviewData = await getInterview(params.interviewId);
    // console.log(interviewData, "data");
  } catch (error) {
    console.error("Failed to load interview data:", error);
    return <div>Error: Failed to load interview data</div>;
  }

  if (!interviewData) {
    return <div>No interview data found</div>;
  }

  return <InterviewClient interviewData={interviewData} />;
}