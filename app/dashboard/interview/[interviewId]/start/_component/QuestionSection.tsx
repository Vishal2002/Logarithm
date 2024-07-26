// app/dashboard/interview/[interviewId]/start/_components/QuestionSection.tsx
import { LightbulbIcon, Volume2 } from 'lucide-react';
import React from 'react'

interface Question {
    question: string;
    answer: string;
}

interface QuestionSectionProps {
    mockInterviewQuestion: Question[] | null;
    activeQuestionIndex: number;
    onQuestionSelect: (index: number) => void;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
    mockInterviewQuestion,
    activeQuestionIndex,
    onQuestionSelect
}) => {

    const textToSpeech = (text: string) => {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          window.speechSynthesis.speak(utterance);
        } else {
          console.error('Text-to-speech not supported in this browser.');
        }
      };

    return (
        <div className='p-5 border mt-3 rounded-lg'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4'>
                {mockInterviewQuestion?.map((question: Question, index: number) => (
                    <h2 
                        key={index}
                        className={`p-2 rounded-full text-xs text-center md:text-sm cursor-pointer ${
                            index === activeQuestionIndex ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                        onClick={() => onQuestionSelect(index)}
                    >
                        Question # {index + 1}
                    </h2>
                ))}


            </div>
            <div className=" mt-4">
                
                <p className='text-sm font-semibold '>{mockInterviewQuestion?.[activeQuestionIndex]?.question}
                    
                </p>
                <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion?.[activeQuestionIndex]?.question!)} />
            </div>
            
            <div className='p-3 mt-10  rounded-lg border border-blue-400 bg-blue-300'>
            <h2 className='flex gap-2 items-center mb-3'><LightbulbIcon/> <strong>Note:</strong></h2>
            <h2>{process.env.NEXT_PUBLIC_HINTS}</h2>
          </div>

        </div>
    )
}

export default QuestionSection