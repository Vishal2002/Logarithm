import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import teamImage from '../../public/hsingh.jpg'; // Replace with your actual team image

const TeamMemberCard = ({ name, role, image }: any) => (
  <Card className="w-full h-full bg-white dark:bg-zinc-900 rounded-[21px] overflow-hidden">
    <CardHeader>
      <CardTitle className="flex items-center text-xl font-bold">
        <Image src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        {name}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-neutral-600 text-sm dark:text-neutral-400">
        {role}
      </CardDescription>
    </CardContent>
  </Card>
);

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: teamImage, // Replace with actual image paths
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: teamImage, // Replace with actual image paths
    },
    {
      name: "Alice Johnson",
      role: "Lead Developer",
      image: teamImage, // Replace with actual image paths
    },
    {
      name: "Bob Brown",
      role: "Marketing Manager",
      image: teamImage, // Replace with actual image paths
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white relative flex flex-col antialiased">
      <main className="flex-grow flex flex-col">
        <div className="flex-grow w-full bg-grid-white/[0.09] relative flex items-center justify-center py-20">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="relative z-20 pt-4 text-center">
            <h1 className="text-5xl h-56 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 leading-tight mb-6">
              About Logarithm
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-semibold max-w-2xl mx-auto px-4 mb-12">
              Empowering individuals to succeed in their interviews through AI-powered insights and realistic simulations.
            </p>

            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-gray-400 text-xl md:text-2xl font-semibold max-w-2xl mx-auto px-4">
                At Logarithm, our mission is to transform the way people prepare for interviews. We believe that everyone deserves the chance to showcase their best selves, and our AI-powered tools are designed to help you do just that.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-full h-full">
                    <TeamMemberCard {...member} />
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
                <Card className="w-full h-full bg-white dark:bg-zinc-900 rounded-[21px] overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-600 text-sm dark:text-neutral-400">
                      We strive to push the boundaries of what's possible with technology.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="w-full h-full bg-white dark:bg-zinc-900 rounded-[21px] overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Integrity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-600 text-sm dark:text-neutral-400">
                      We uphold the highest standards of honesty and transparency.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="w-full h-full bg-white dark:bg-zinc-900 rounded-[21px] overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Empowerment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-600 text-sm dark:text-neutral-400">
                      We empower our users to achieve their goals and reach their full potential.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="w-full h-full bg-white dark:bg-zinc-900 rounded-[21px] overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-600 text-sm dark:text-neutral-400">
                      We believe in the power of teamwork and collaboration to drive success.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="mt-16">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition-colors">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
