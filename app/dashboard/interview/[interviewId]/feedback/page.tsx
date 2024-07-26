'use client'
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
interface FeedbackResp {
    Rating: string,
    feedback: string,
    userAnswer: string,
    question: string,
    correctAnswer:string
}

const Feedback = ({ params }: { params: { interviewId: string } }) => {
   const [feedbackList, setFeedbackList] = useState<FeedbackResp[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<string|null>(null);
   const [overallRating, setOverallRating] = useState(0);
   const router = useRouter();

   useEffect(() => {
     const fetchFeedback = async () => {
       try {
         setIsLoading(true);
         const response = await fetch(`/api/feedback?interviewId=${params.interviewId}`);
         if (!response.ok) {
           throw new Error('Failed to fetch feedback');
         }
         const data: FeedbackResp[] = await response.json();
         setFeedbackList(data);
         
         // Calculate overall rating
         const totalRating = data.reduce((sum, item) => sum + parseInt(item.Rating), 0);
         setOverallRating(Math.round(totalRating / data.length));
         
       } catch (err) {
         setError('Failed to fetch feedback. Please try again later.');
         console.error(err);
       } finally {
         setIsLoading(false);
       }
     };

     fetchFeedback();
   }, [params.interviewId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
    <div className='p-10'>
      <h2 className='text-2xl font-bold text-green-400'>Congratulations!</h2>
      <h2 className='text-2xl font-bold'>Here is your Interview Result</h2>
      <h2 className='text-xl font-bold my-3 text-violet-500'>
        Your Overall Interview Rating is : <strong>{overallRating}/100</strong>
      </h2>
      <h2 className='text-sm text-gray-600 mb-4'>Find below interview questions with Answers and improvement tips</h2>

      <Accordion type="single" collapsible className="w-full">
        {feedbackList.map((feedback, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <div className='border p-5  w-full rounded-lg bg-gray-300' >
                <h3 className="font-bold">Question {index + 1}: {feedback.question}</h3>
                <p className='text-violet-500 text-sm'>Rating: {feedback.Rating}/100</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col gap-3 mt-2'>
                <div className='border p-5 rounded-lg bg-red-200'>
                  <h4 className="font-semibold">Your Answer:</h4>
                  <p className="ml-4">{feedback.userAnswer}</p>
                </div>
                <div className='border p-2 rounded-lg bg-green-200'>
                  <h4 className="font-semibold">Correct Answer:</h4>
                  <p className="ml-4">{feedback.correctAnswer}</p>
                </div>
                <div className='border p-2 rounded-lg  bg-purple-200'>
                  <h4 className="font-semibold">Feedback:</h4>
                  <p className="ml-4">{feedback.feedback}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
     
    </div>
     <div className='flex mb-10 pl-6'>
     <Button className='bg-blue-500 hover:bg-blue-700' onClick={()=>router.replace('/dashboard')} >Go Home</Button>
   </div>
   </>
  )
}

export default Feedback