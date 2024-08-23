import React from 'react'
import Link from 'next/link'
import {  UserButton  } from '@clerk/nextjs'
import { auth, currentUser} from '@clerk/nextjs/server'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Home, Calendar, User, Settings, LogOut, Menu } from 'lucide-react'
import { SignOutButton } from './SignOutbutton'

async function Sidebar() {
  const { userId } = auth();
 
  const user = await currentUser();

  const navItems = [
    { name: 'Home', icon: Home, href: '/dashboard' },
    { name: 'Plans', icon: Calendar, href: '/plans' },
    { name: 'Profile', icon: User, href: '/profile' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <>
      <Sheet key={'left'}>
        <SheetTrigger asChild>
          <button className="lg:hidden  fixed top-4 left-4 z-50">
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <SheetClose className="absolute top-4 right-4">
          
          </SheetClose>
          <SidebarContent user={user} navItems={navItems} />
        </SheetContent>
      </Sheet>

      <div className="hidden lg:block fixed top-0 left-0 h-full">
        <SidebarContent user={user} navItems={navItems} />
      </div>
    </>
  )
}

function SidebarContent({ user, navItems }:{user:any, navItems:any}) {

  return (
    <div className="w-80 bg-white h-screen shadow-lg flex flex-col z-30">
      <div className="p-5">
        <div className="flex items-center space-x-4 mb-6">
          <UserButton />
          <div className="overflow-hidden">
            <p className="font-semibold truncate">{user?.fullName}</p>
            <p className="text-sm text-gray-500 truncate">{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item:any) => (
            <Link key={item.name} href={item.href} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-5">
        <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
        <LogOut className="w-5 h-5" /> 
         <SignOutButton/>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar