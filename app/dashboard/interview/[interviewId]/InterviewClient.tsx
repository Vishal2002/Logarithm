"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Webcam from "react-webcam";

interface InterviewData {
  mockId: string;
  jsonMockResp: string;
  jobPosition: string;
  jobDescription: string;
  createdBy: string;
  experience: string;
}

export default function InterviewClient({ interviewData }: { interviewData: InterviewData }) {
  const router = useRouter();
  const [webcamEnable, setWebCam] = useState<boolean>(false);

  return (
    <div className='my-10 flex justify-center flex-col items-center'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col my-5 gap-5 '>
          <div className='p-5 rounded-lg border overflow-auto'>
            <h2 className='text-xl'><strong>Job Role/Position: </strong>{interviewData.jobPosition}</h2>
            <h2 className='text-xl'><strong>Job Description: </strong>{interviewData.jobDescription}</h2>
            <h2 className='text-xl'><strong>Experience: </strong>{interviewData.experience} Year</h2>
          </div>
          <div className='p-5 rounded-lg border border-yellow-300 bg-yellow-100'>
            <h2 className='flex gap-2 items-center mb-3'><Lightbulb /> <strong>Information</strong></h2>
            <h2>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
          </div>
        </div>
        <div>
          {webcamEnable ? (
            <Webcam
              onUserMedia={() => setWebCam(true)}
              onUserMediaError={() => setWebCam(false)}
              mirrored={true}
              style={{
                height: 300,
                width: 300
              }}
            />
          ) : (
            <WebcamIcon className='p-20 h-72 w-full my-7 bg-secondary border rounded-lg' />
          )}
          <Button variant={'ghost'} onClick={() => setWebCam(true)}>Enable Microphone and WebCam</Button>
          <div className='flex justify-end items-end mt-4'>
           
            <Button onClick={() => router.push(`/dashboard/interview/${interviewData?.mockId}`)}>
              Start Interview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}