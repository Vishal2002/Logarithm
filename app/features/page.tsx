"use client"
import React, { useEffect, useState } from 'react';
import { BackgroundBeams } from "../ui/background-beams";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Video, BarChart2, BookOpen, Zap, Target, Users, Lock } from 'lucide-react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import animationData from '../../public/exponent.json';


const FeatureCard = ({ Icon, title, description }: { Icon: React.ElementType, title: string, description: string }) => (
  <Card className="w-full h-full bg-white dark:bg-zinc-900 rounded-[21px] overflow-hidden">
    <CardHeader>
      <CardTitle className="flex items-center text-xl font-bold">
        <Icon className="w-6 h-6 text-blue-500 mr-2" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-neutral-600 text-sm dark:text-neutral-400">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);
export default function Features() {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const features = [
      {
        Icon: CheckCircle,
        title: "AI-Powered Feedback",
        description: "Receive instant, personalized insights on your interview performance, helping you identify areas for improvement and highlighting your strengths."
      },
      {
        Icon: Video,
        title: "Realistic Simulations",
        description: "Practice in lifelike video interview scenarios that mirror real-world situations, preparing you for various interview formats and questions."
      },
      {
        Icon: BarChart2,
        title: "Performance Analytics",
        description: "Track your progress over time with detailed analytics, allowing you to see your improvement and focus on key areas that need attention."
      },
      {
        Icon: BookOpen,
        title: "Interview Coaching",
        description: "Access expert tips and strategies tailored to your industry and role, boosting your confidence and interview skills."
      },
      {
        Icon: Zap,
        title: "Quick Practice Sessions",
        description: "Engage in brief, focused practice rounds to sharpen specific skills or prepare for last-minute interviews on the go."
      },
      {
        Icon: Target,
        title: "Customized Interview Prep",
        description: "Tailor your practice sessions to specific industries, roles, or companies, ensuring you're prepared for your unique interview situations."
      },
      {
        Icon: Users,
        title: "Peer Review Network",
        description: "Connect with peers to exchange feedback and insights, broadening your perspective and learning from others' experiences."
      },
      {
        Icon: Lock,
        title: "Secure and Private",
        description: "Rest assured that your practice sessions and personal data are protected with state-of-the-art security measures."
      }
    ];
  
    return (
      <div className="flex-grow w-full bg-grid-white/[0.09] relative flex items-center justify-center py-20">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 pt-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 leading-tight mb-6">
            Powerful Features for<br />Interview Success
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl font-semibold max-w-2xl mx-auto px-4 mb-12">
            Discover how Logarithm empowers you to excel in any interview
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="w-full h-full">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
  
          <div className="max-w-4xl mx-auto px-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ">Experience the Logarithm Difference</h2>
            <div className='flex justify-center w-full'>
            {isClient && <Lottie  animationData={animationData} loop={false} autoplay={true} style={{ width: 450, height: 450,}} />}
            </div>
            
          </div>
  
          <div className="mt-16">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    );
  }
  
  