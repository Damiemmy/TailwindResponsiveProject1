import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-20'>
      <div className='grid lg:grid-cols-3 max-w-[1240px] py-15 justify-center items-center'>
        <div className='text-white lg:col-span-2'>
          <h1 className='font-bold py-3 md:text-3xl sm:text-2xl text-xl'>Want tips & tricks to optimize your flow?</h1>
          <p className=''>Sign up to our newsletter and stay up to date.</p>

        </div>
        <div className='text-white '>
          <div className='md:flex  text-left flex-col md:flex-row gap-3 '>
          <input placeholder='Enter your Email' className='text-gray-400 my-2 py-3 pl-3 font-medium w-full rounded-md bg-white'/>
          <button className='px-auto py-3 text-black bg-green-400 my-2 rounded-md font-bold w-[150px] sm:font-small text-center'>Notify me</button>
          </div>
          <p>We care bout the protection of your data.Read our</p>
          <span className='text-green-400 decoration-lime-400'>Privacy Policy.</span>
        </div>

      </div>
      </div>
  )
}

export default Newsletter