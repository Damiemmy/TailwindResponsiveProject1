import React from 'react';
import {FaHamburger} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react'

const Nav = () => {
    const[hambuger,sethambuger]= useState(false);
    const Handleclick=()=>{
        sethambuger(!hambuger);
    };
  return (
    <div className='flex justify-between items-center h-24 mx-auto max-w-[1240px] text-white'>
        <div>
            <h1 className='text-2xl w-full font-bold text-green-600'>BlogApp.</h1>
        </div>
            <ul className='flex text-white uppercase items-center justify-center'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                
            </ul>
       
        <div onClick={Handleclick} className='text-white p-4' >
       {hambuger ? <AiOutlineClose/>:<FaHamburger size={20}/>} 
        </div>
        <div className={hambuger? ' text-white uppercase items-center justify-center bg-[#000300] pt-10 h-full border-r border-r-gray-600 fixed top-0 left-0 w-[60%] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='p-4 text-2xl w-full font-bold text-green-600 pb-10'>BlogApp.</h1>
      <ul className='p-4 uppercase'>
               
                <li className='p-4 border-b border-b-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-600'>Company</li>
                <li className='p-4 border-b border-b-gray-600'>Resources</li>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4 '>Contact</li>
                
            </ul>
            </div>

    
         
    </div>
  )
}

export default Nav