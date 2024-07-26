"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { generateResponse } from '@/utils/GeminiAPI'
import { LoaderCircle } from 'lucide-react'
import axios from 'axios';
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
interface Questions{
    question:string,
    answer:string
}

const AddInterview = () => {
  const [dialog, setDialog] = useState<boolean|undefined>(false);
  const [experience, setExperience] = useState<number>();
  const [jobDescription, setJobDescription] = useState<string>('');
  const [jobRole, setJobRole] = useState<string>('');
  const [loading, setLoading] = useState<boolean|undefined>(false);
  const [questions,setQuestions] = useState<Questions[]>([]);
  const router=useRouter();
  const {user}=useUser();
const saveInterview = async (data: {
  jobRole: string,
  jobDescription: string,
  experience: number,
  createdBy: string,
  questions: Questions[]
}) => {
  try {
    const response = await axios.post('/api/interview', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error saving interview:', error);
    throw error;
  }
};
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      // console.log(experience, jobDescription, jobRole,user?.primaryEmailAddress?.emailAddress!);
      const prompt = `Job Role: ${jobRole}, Job Description: ${jobDescription}, Experience: ${experience} Years. As an Interviewer, provide ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Technical Questions with Answers based on these requirements in JSON format.`;
      const response = await generateResponse(prompt);
      setQuestions(response);
      if(response) {
      const interview= await saveInterview({
        jobRole,
        jobDescription,
        experience: experience!,
        questions: response,
        createdBy:user?.primaryEmailAddress?.emailAddress!
      });
      // console.log(interview);
      if(interview){
        setDialog(false);
        router.push(`/dashboard/interview/${interview?.mockId}`)
      }
    }
    
    

    } catch (error) {
      console.error('Error generating or saving questions:', error);
     
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div 
        onClick={() => setDialog(true)} 
        className='border rounded-lg p-10 bg-secondary hover:scale-105 cursor-pointer hover:shadow-md transition-all'>
          <h2 className='font-bold text-lg text-center'>+ Add New</h2>
      </div>
      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent className='max-w-2xl'>
          <DialogHeader>
            <DialogTitle className='text-2xl'>Tell us more about Your Job Interviewing</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                <h2 className='font-bold'>Tell us more about your Job role, Job Description, and Experience</h2>
                
                <div className='mt-5 my-2'>
                  <label>Job Role</label>
                  <Input placeholder='Ex. React Developer' onChange={(event) => setJobRole(event.target.value)} required />
                </div>
                <div className='my-2'>
                  <label>Job Description</label>
                  <Textarea placeholder='Ex. React, Postgres, MongoDB' onChange={(event) => setJobDescription(event.target.value)} required />
                </div>
                <div className='my-2'>
                  <label>Year of Experience</label>
                  <Input required placeholder='5' onChange={(event) => setExperience(parseInt(event.target.value))} min={1} max={60} type='number' />
                </div>
                <div className='flex justify-end gap-5'>
                  <Button type="button" onClick={() => setDialog(false)} variant={'ghost'}>Cancel</Button>
                  <Button type='submit' disabled={loading} >
                  {loading? <><LoaderCircle className='animate-spin' /> Generating...</> : `Start Interview`}
             
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddInterview
