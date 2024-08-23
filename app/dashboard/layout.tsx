import React from 'react'
import Header from './_component/Header'
import Sidebar from './_component/Sidebar'

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen  bg-gray-100">
      {/* <Header /> */}
      <div className="flex ">
        <Sidebar />
        <main className="flex-1 p-4 lg:ml-80">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Dashboard