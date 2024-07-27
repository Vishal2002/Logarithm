"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import { generateFeedback } from '@/utils/GeminiAPI'

interface SpeechResult {
  transcript?: string;
}
interface Question {
  question: string;
  answer: string;
}

interface QuestionSectionProps {
  mockInterviewQuestion: Question[] | null;
  activeQuestionIndex: number;
  onQuestionSelect: (index: number) => void;
  mockId: string;
  userEmail: string;
}

const RecordSection: React.FC<QuestionSectionProps> = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  onQuestionSelect,
  mockId,
  userEmail
}) => {
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ rating: string, feedback: string } | null>(null);
  const { toast } = useToast();
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

const SaveUserAnswer = async () => {
    if (isRecording) {
      stopSpeechToText()
      if (userAnswer.length < 10) {
        toast({
          title: "Error",
          description: "Error while recording. Answer is too short.",
          variant: "destructive",
        });
        return;
      }
      try {
        const result = await generateFeedback(mockInterviewQuestion?.[activeQuestionIndex]?.question!, userAnswer);
        setFeedback(result);

        // Save user answer to the database
        const response = await fetch('/api/userAnswer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mockId,
            question: mockInterviewQuestion?.[activeQuestionIndex]?.question,
            correctAnswer: mockInterviewQuestion?.[activeQuestionIndex]?.answer,
            userAnswer,
            feedback: result.feedback,
            rating: result.rating.toString(),
            userEmail
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to save user answer');
        }

        toast({
          title: "Answer Saved",
          description: "Your answer has been evaluated and saved.",
        });
        setUserAnswer('');
        setResults([]);
        setFeedback(null);
      } catch (error) {
        console.error('Error saving answer:', error);
        toast({
          title: "Error",
          description: "Failed to save answer. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      startSpeechToText()
      toast({
        title: "Recording Started",
        description: "Speak now to record your answer.",
      });
    }
  }

  useEffect(() => {
    const newTranscript = results.reduce((acc: string, result: string | SpeechResult) => {
      if (typeof result === 'string') {
        return acc + result;
      } else if (result.transcript) {
        return acc + result.transcript;
      }
      return acc;
    }, '');

    setUserAnswer(prevAns => (prevAns || '') + newTranscript);
  }, [results]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center my-5 bg-black border rounded-lg relative'>
        <Image src={'/webcam.png'} alt='WebCam' width={200} height={200} className='absolute z-0' />   
        <Webcam mirrored={true} style={{height: 300, width: '100%', zIndex: 10 }}/>
      </div>
      <Button 
        onClick={SaveUserAnswer} 
        className='my-10 bg-blue-500'
      >
        {isRecording 
          ? <span className='flex gap-2 justify-center items-center'><Mic />Stop Recording</span> 
          : 'Record Answer'
        }
      </Button>
    
    </div>
  )
}

export default RecordSection