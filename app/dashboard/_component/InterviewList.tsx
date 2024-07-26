'use client'
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface FeedbackItem {
  id: number;
  mockId: string;
  jsonMockResp: string;
  jobPosition: string;
  jobDescription: string;
  experience: string;
  createdAt: Date;
  createdBy: string;
}

export default function InterviewList() {
  const { user } = useUser();
  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        try {
          setIsLoading(true);
          const response = await fetch(`/api/userFeedback?email=${user.primaryEmailAddress.emailAddress}`);
          if (!response.ok) {
            throw new Error('Failed to fetch feedback');
          }
          const data: FeedbackItem[] = await response.json();
          setFeedbackList(data);
        } catch (err) {
          setError('Failed to fetch feedback. Please try again later.');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchFeedback();
  }, [user]);

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Previous Mock Interviews</h1>
      {feedbackList.length === 0 ? (
        <p className="text-center text-gray-500">No previous interviews found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbackList.map((item) => (
            <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-700">{item.jobPosition}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Date:</span> {moment(item.createdAt).format('DD/MM/YY')}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Experience:</span> {item.experience}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Job Requirement:</span> {item.jobDescription}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/dashboard/interview/${item.mockId}/feedback`} passHref>
                  <Button  variant="outline">Feedback</Button>
                </Link>
                <Link href={`/dashboard/interview/${item.mockId}/start`} passHref>
                  <Button variant="default" >Interview</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}