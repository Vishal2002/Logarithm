import React from 'react'
import Header from './_component/Header'

const  Dashboard = ({children}:{ children: React.ReactNode }) => {
  return (
    <div>
        <Header/>
        <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
        </div>
     
    </div>
  )
}

export default  Dashboard
