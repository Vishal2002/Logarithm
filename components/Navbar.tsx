"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MenuItem = ({ children, href, isActive, onClick }: { children: React.ReactNode; href: string; isActive: boolean; onClick: () => void }) => {
  return (
    <Link href={href} onClick={onClick} className={cn(
      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
      isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
    )}>
      {children}
    </Link>
  );
};

export function NavbarDemo() {
  const [active, setActive] = useState("/");

  const handleMenuItemClick = (href: string) => {
    setActive(href);
  };

  return (
    <nav className="bg-gray-900 top-2 bg-opacity-80 backdrop-filter backdrop-blur-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Logarithm</span>
            </Link>
            <div className="hidden md:block ml-10 flex items-baseline space-x-4">
              <MenuItem href="/" isActive={active === "/"} onClick={() => handleMenuItemClick("/")}>Home</MenuItem>
              <MenuItem href="/features" isActive={active === "/features"} onClick={() => handleMenuItemClick("/features")}>Features</MenuItem>
              <MenuItem href="/upgrade" isActive={active === "/pricing"} onClick={() => handleMenuItemClick("/pricing")}>Pricing</MenuItem>
              <MenuItem href="/about" isActive={active === "/about"} onClick={() => handleMenuItemClick("/about")}>About</MenuItem>
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
