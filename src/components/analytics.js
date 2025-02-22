import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt="no image" />

        <div className='flex flex-col justify-center items-left'>
            <p className='text-green-400 font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ea neque quis. Dignissimos, reiciendis blanditiis? Earum nemo recusandae, labore repudiandae quae facere. Suscipit consequuntur, corrupti illum nostrum nihil accusamus nulla.
            </p>
            <button className='bg-black w-[200px] rounded-md my-6 mx-auto py-3 md:mx-0 text-green-400'>Get Started</button>
        </div>
        
    </div>
   
    </div>
  )
}

export default Analytics;