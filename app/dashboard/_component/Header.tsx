"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const pathName = usePathname();

  return (
    <div className='flex p-4 justify-between bg-secondary shadow-ms items-center'>
      <Image width={40} height={25} src={'/math.png'} alt="Logo"/>
      <ul className='hidden md:flex gap-6'>
        <li>
          <Link href="/dashboard" className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${
            pathName === '/dashboard' ? 'text-blue-500 font-bold' : ''
          }`}>Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/upgrade" className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${
            pathName === '/dashboard/upgrade' ? 'text-blue-500 font-bold' : ''
          }`}>Upgrade</Link>
        </li>
        <li>
          <Link href="/dashboard/questions" className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${
            pathName === '/dashboard/questions' ? 'text-blue-500 font-bold' : ''
          }`}>Questions</Link>
        </li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header