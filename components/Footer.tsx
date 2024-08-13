"use client";
import React from 'react';
import { Boxes } from '@/app/ui/background-boxes';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import Linkedin from '../public/linkedin.png'
import Image from 'next/image';
import xIcon from '../public/x.svg';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-slate-900 text-white">
        
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes/>
      
      <div className="relative z-30 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Logarithm</h2>
            <p className="text-sm text-gray-400">Interviews are Easy <br/>Just Start Mock Interview with Us.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/support">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><Link href="/download/intel">Github</Link></li>
              <li><Link href="/download/apple">Discord</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex  space-x-4 mb-4 md:mb-0">
            <Link href="https://x.com/sharma_188" className="text-blue-400 hover:text-blue-300">
              <Image src={xIcon} height={20} width={20} alt="X.com" />
            </Link>
            <Link href="https://linkedin.com/in/vishal-sharma-b330aa1ba/" className="text-blue-400 hover:text-blue-300">
            <Image src={Linkedin} height={25} width={25} alt="Linkedin" />
            </Link>
          </div>
          
          <div className="text-sm flex justify-between w-full text-gray-400">
            <p className='pl-10'>Backed by 100xDevs</p>
            <p>❤️ Made in India</p>
            <p>Copyright ©2024 Logarithm</p>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;