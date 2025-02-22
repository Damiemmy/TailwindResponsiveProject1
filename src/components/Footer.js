import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footers = () => {
  return (
    <div className='w-full bg-black text-white my-15 p-4'>
        <div className='grid lg:grid-cols-6 max-w-[1240px] mx-auto py-10'>
            <div className='w-full col-span-3 flex flex-col '>
                <h1 className='text-green-400 font-bold text-3xl my-6'>REACTBLOG.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis doloribus deleniti quas eligendi officia beatae, nesciunt similique asperiores qui eum? Ipsa officiis expedita voluptatibus cupiditate quasi in quam. Hic, ab?</p>
                <div className=' justify-between text-white flex md:w-[75%] my-3 '>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
        
                
            </div>
            <div className='w-full text-white my-6 p-3 text-left font-bold mx-auto'>
                    <h2 className='text-gray-400'>Solutions</h2>
                    <div className='my-4'>
                        <p className='my-4 '>Analytics</p>
                        <p className='my-4 '>Marketing</p>
                        <p className='my-4 '>Commerce</p>
                        <p className='my-4 '>insights</p>
                    </div>
                </div>
            <div className='w-full text-white my-6 p-3 text-left font-bold mx-auto'>
                    <h2 className='text-gray-400'>Support</h2>
                    <div className='my-4'>
                        <p className='my-4 '>Pricing</p>
                        <p className='my-4 '>Documentation</p>
                        <p className='my-4 '>Guides</p>
                        <p className='my-4 '>Api Status</p>
                    </div>
                </div>
            <div className='w-full text-white my-6 p-3 text-left font-bold mx-auto'>
                    <h2 className='text-gray-400'>Company</h2>
                    <div className='my-4'>
                        <p className='my-4 '>About</p>
                        <p className='my-4 '>Blog</p>
                        <p className='my-4 '>Jobs</p>
                        <p className='my-4 '> Prices</p>
                    </div>
                </div>



        </div>

    </div>
  )
}

export default Footers