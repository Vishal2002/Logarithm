import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'

async function Sidebar() {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      <div className="p-5">
        <div className="flex items-center space-x-4 mb-6">
          <UserButton />
          <div>
            <p className="font-semibold">{user?.fullName}</p>
            <p className="text-sm text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>
        {/* Rest of your sidebar content */}
      </div>
    </div>
  )
}

export default Sidebar