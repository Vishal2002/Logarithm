"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MenuItem = ({ children, href, isActive }: { children: React.ReactNode; href: string; isActive: boolean }) => {
  return (
    <Link href={href} className={cn(
      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
      isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
    )}>
      {children}
    </Link>
  );
};

export function NavbarDemo() {
  const [active, setActive] = useState("/");

  return (
    <nav className="bg-gray-900 top-2 bg-opacity-80 backdrop-filter backdrop-blur-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Logarithm</span>
            </Link>
            <div className="hidden md:block ml-10 flex items-baseline space-x-4">
              <MenuItem href="/" isActive={active === "/"}>Home</MenuItem>
              <MenuItem href="/features" isActive={active === "/features"}>Features</MenuItem>
              <MenuItem href="/pricing" isActive={active === "/pricing"}>Pricing</MenuItem>
              <MenuItem href="/about" isActive={active === "/about"}>About</MenuItem>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href={'/dashboard'}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get Started
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
}