import React from 'react';
import { BackgroundBeams } from "./ui/background-beams";
import { NavbarDemo } from '../components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Video, BarChart2, BookOpen } from 'lucide-react';
import Image from 'next/image';
import showcase from '../public/nice_image.png'
import showlook from '../public/2.png'
import Footer from '@/components/Footer';

const FeatureCard = ({ Icon, title, description }:any) => (
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
    <CardFooter>
      <button className="rounded-full p-3 text-white flex items-center space-x-1 font-bold bg-blue-600 hover:bg-blue-700">
        <span className='text-center text-sm'>Learn More</span>
      </button>
    </CardFooter>
  </Card>
);

const BenefitsCard = ({ Showcase, title, description }: any) => (
  <Card className="w-full h-full bg-[#1a1a1a] text-white dark:bg-zinc-900 rounded-[21px] overflow-hidden flex flex-col">
    <CardHeader className="flex-grow">
      <CardTitle className="flex flex-col items-center">
        <div className="w-full">
          <Image src={Showcase} alt='Showcase' layout="responsive" />
        </div>
      </CardTitle> 
    </CardHeader>
    <CardContent className="mt-auto">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <CardDescription className="text-neutral-400 text-sm font-bold">
        {description}
      </CardDescription>
    </CardContent>
   
  </Card>
);
export default function Home() {
  const features = [
    {
      Icon: CheckCircle,
      title: "AI-Powered Feedback",
      description: "Get instant, personalized insights on your performance."
    },
    {
      Icon: Video,
      title: "Realistic Simulations",
      description: "Practice in lifelike video interview scenarios."
    },
    {
      Icon: BarChart2,
      title: "Performance Analytics",
      description: "Track your progress and identify areas for improvement."
    },
    {
      Icon: BookOpen,
      title: "Interview Coaching",
      description: "Access expert tips and strategies to boost your confidence."
    }
  ];

  const benefits = [
    {
      Showcase: showcase,
      title: "Transform Interviews into Your Triumph",
      description: "Harness the power of Logarithm to turn daunting interviews into your personal stage for success. Elevate your presence, amplify your potential."
    },
    {
      Showcase: showlook,
      title: "Simplicity Meets Sophistication",
      description: "Experience the elegance of Logarithm – where cutting-edge AI merges seamlessly with intuitive design. Unlock your full potential with effortless precision."
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col antialiased">
      <NavbarDemo />
      
      <main className="flex-grow flex flex-col">
        <div className="flex-grow w-full bg-grid-white/[0.09] relative flex items-center justify-center py-20">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="relative z-20 pt-4 text-center">
            <h1 className="text-5xl h-56 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 leading-tight mb-6">
              Your Next Interview<br />is Scheduled on<br />Logarithm.
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-semibold max-w-2xl mx-auto px-4 mb-12">
              AI-Powered Interview Prep: Practice, Analyze, Succeed
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
              {features.map((feature, index) => (
                <div key={index} className="w-full h-full">
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 mt-16">Why Choose Logarithm?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-6xl  mx-auto px-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="w-full h-full">
                  <BenefitsCard {...benefit} />
                </div>
              ))}
            </div>

            <div className="mt-16">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition-colors">
                Get Started Now
              </button>
            </div>
            
          

          </div>
          <BackgroundBeams />
        </div>
      </main>
      <div>

<Footer/>
</div>
    </div>
  );
}