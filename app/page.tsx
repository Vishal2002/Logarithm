"use client";
import React from 'react';
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import Link from 'next/link';

const Home = () => {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-5 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Logarithm
        </h1>
        <p className="text-neutral-500  max-w-lg mx-auto my-5 text-sm text-center relative z-10">
          Elevate your learning experience with AI-powered interviews and personalized feedback.
        </p>
        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 backdrop-blur-sm border border-white/10 bg-white/20 text-white rounded-full relative z-10 mt-4"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
      <BackgroundBeams/>
    </div>
  );
};

export default Home;

