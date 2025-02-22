import React from 'react'

const Content = () => {
  return (
    <div className='text-white max-w-[800px] flex flex-col mx-auto w-full text-center h-screen'>
        <p className='md:2xl sm:2xl font-bold text-green-400 text-xl pt-20'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-2'>Grow with data</h1>
        <div>
            <p className='md:text-4xl sm:text-3xl text-2xl '>Fast,flexible financing for SaaS</p>
        </div>
        <p className='p-4 md:text-2xl text-xl md:py-4 py-2 text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS</p>
        <button className='bg-green-400 w-[200px] rounded-md my-6 mx-auto py-3 text-black'>Get Started</button>
    </div>
  )
}

export default Content;