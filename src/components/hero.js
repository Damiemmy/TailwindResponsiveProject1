import React from 'react'
import {FaHamburger} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react'
const Hero = () => {
    const[menu,setMenu]= useState(false)

    const Handleclick=()=>{
        setMenu(!menu);
    
    }
        
  return (
    <div className='max-w-[1240px] mx-auto justify-between flex items-center h-24 text-white p-4'>
        <div className='items-center justify-center'>
        <h1 className='w-full text-3xl font-bold text-green-400 uppercase'>ReactBlog.</h1>
        </div>
        <ul className='uppercase text-white justify-center items-center hidden md:flex'>
            <li className='p-4'>home</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>contact</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Help</li>
        </ul>
        <div onClick={Handleclick} className='items-center justify-center block md:hidden'>
            <FaHamburger size={25}/>
        </div>
        <div className={menu ? 'fixed p-4 top-0 bg-black left-0 w-[60%] border-r h-full border-r-gray-600 ease-in-out duration-500':'fixed left-[-100%] ease-in-out duration-500'}>
        <div onClick={Handleclick} className='flex justify-end items-center p-4'>
            <AiOutlineClose size={25}/>
        </div>
        <h1 className='w-full text-3xl font-bold text-green-400 pb-10 uppercase  '>ReactBlog.</h1>
        <ul className='uppercase text-white justify-center items-center'>
            <li className='p-4 border-b border-b-gray-600'>home</li>
            <li className='p-4 border-b border-b-gray-600'>Resources</li>
            <li className='p-4 border-b border-b-gray-600'>contact</li>
            <li className='p-4 border-b border-b-gray-600'>About</li>
            <li className='p-4 '>help</li>
        </ul>
        
        </div>


    </div>
  )
}

export default Hero