"use client"
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

const QuestionsPage = () => {
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL as string; 

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({ question }),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
      });

      if (response.ok) {
        setQuestion('');
        toast({
          title: "Success",
          description: "Your question has been submitted successfully!",
        });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your question. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Questions</h1>
      <div className="max-w-2xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
          </CardHeader>
          <CardContent>
            <Input 
              placeholder="Type your question here..." 
              className="mb-4" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Question'}
            </Button>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>How do I reset my password?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email to create a new password.</p>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>
  )
}

export default QuestionsPage