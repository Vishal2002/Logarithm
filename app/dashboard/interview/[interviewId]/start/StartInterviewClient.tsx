"use client"
import React, { useState, useEffect } from 'react'
import QuestionSection from './_component/QuestionSection';
import RecordSection from './_component/RecordSection';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
interface Question {
    question: string;
    answer: string;
}

interface InterviewData {
    mockId: string;
    jsonMockResp: string;
    createdBy: string;
}

const StartInterviewClient: React.FC<{ interviewData: InterviewData }> = ({ interviewData }) => {
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState<Question[] | null>(null);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router=useRouter();
    useEffect(() => {
        if (interviewData.jsonMockResp) {
            try {
                const questions = JSON.parse(interviewData.jsonMockResp);
                setMockInterviewQuestion(questions);
            } catch (err) {
                setError("Failed to parse interview questions");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }
    }, [interviewData.jsonMockResp]);

    const handlePreviousQuestion = () => {
        if (activeQuestionIndex > 0) {
            setActiveQuestionIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleNextQuestion = () => {
        if (mockInterviewQuestion && activeQuestionIndex < mockInterviewQuestion.length - 1) {
            setActiveQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleEndInterview = () => {
        router.push(`/dashboard/interview/${interviewData.mockId}/feedback`)
        console.log("Interview ended");
    };

    if (isLoading) return <div>Loading questions...</div>;
    if (error) return <div>Error: {error}</div>;

    const isFirstQuestion = activeQuestionIndex === 0;
    const isLastQuestion = mockInterviewQuestion && activeQuestionIndex === mockInterviewQuestion.length - 1;

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Question Section */}
                <QuestionSection
                    mockInterviewQuestion={mockInterviewQuestion} 
                    activeQuestionIndex={activeQuestionIndex}
                    onQuestionSelect={setActiveQuestionIndex}
                />
                {/* Video/Audio Section */}
                <div>
                   <RecordSection
                     mockInterviewQuestion={mockInterviewQuestion} 
                     activeQuestionIndex={activeQuestionIndex}
                     onQuestionSelect={setActiveQuestionIndex}
                     mockId={interviewData.mockId}
                     userEmail={interviewData.createdBy}
                   />
                </div>
            </div>
            <div className='flex justify-end gap-4 mt-4'>
                {!isFirstQuestion && (
                    <Button className='bg-blue-500 hover:bg-blue-700' onClick={handlePreviousQuestion}>Previous Question</Button>
                )}
                {!isLastQuestion && (
                    <Button className='bg-blue-500 hover:bg-blue-700' onClick={handleNextQuestion}>Next Question</Button>
                )}
                {isLastQuestion && (
                    <Button className='bg-blue-500 hover:bg-blue-700' onClick={handleEndInterview}>End Interview</Button>
                )}
            </div>
        </div>
    )
}

export default StartInterviewClient