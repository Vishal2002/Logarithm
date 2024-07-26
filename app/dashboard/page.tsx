import React from 'react'
import AddInterview from './_component/AddInterview'
import InterviewList from './_component/InterviewList'

const DashboardPage = () => {
  return (
    <div className='p-10'>
   <h2 className='font-bold text-2xl'>Dashboard</h2>
    <h2 className='text-gray-500'>Create your New AI Mockup Interview</h2>
    
    <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
      <AddInterview/>
    </div>
    {/* Previous Interview List  */}
    <InterviewList/>
    </div>
  )
}

export default DashboardPage