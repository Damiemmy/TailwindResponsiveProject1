import React from 'react'
import single from '../assets/single.png';
import double from '../assets/double.png';
import tripple from '../assets/triple.png';
const Cards = () => {
  return (
    <div className='text-black bg-white py-[10rem] pb-20 w-full'>
        <div className='grid md:grid-cols-3  max-w-[1240px] mx-auto gap-8 p-4 '>
            <div className='my-4 shadow-2xl mx-auto w-full hover:scale-105 duration-500 rounded-lg'>
                <img src={single} alt="no picture" className='w-20 mt-[-5] mx-auto hover:scale-105 duration-500' />
                <h2 className='text-2xl text-center py-8 font-bold'>Single User</h2>
                <p className='text-4xl text-center font-bold py-5'>450$</p>
                <div className='text-center font-medium'>
                    <p className='py-3 border-b mx-8'>500GB space</p>
                    <p className='py-3 border-b mx-8'>1 Granted User</p>
                    <p className='py-3 border-b mx-8'>Send up to 2GB</p>
                    <button className='py-3 bg-green-400 w-[150px] mx-auto font-bold text-black my-2 rounded-md '>Start Trial</button>

                </div>
            </div>
            <div className='md:my-0 my-8 flex flex-col shadow-2xl mx-auto bg-gray-100 w-full hover:scale-105 duration-500 rounded-lg'>
                <img src={double} alt="no picture" className='w-20 mt-[-5] mx-auto hover:scale-105 duration-500' />
                <h2 className='text-2xl text-center py-8 font-bold'>Double User</h2>
                <p className='text-4xl text-center py-5 font-bold'>450$</p>
                <div className='text-center font-medium'>
                    <p className='py-3 border-b mx-8'>500GB space</p>
                    <p className='py-3 border-b mx-8'>1 Granted User</p>
                    <p className='py-3 border-b mx-8'>Send up to 2GB</p>
                    <button className='py-3 bg-black w-[150px] mx-auto font-bold text-green-400 my-2 rounded-md '>Start Trial</button>

                </div>
            </div>
            <div className='my-4 shadow-2xl mx-auto w-full hover:scale-105 duration-500 rounded-lg'>
                <img src={tripple} alt="no picture" className='w-20 mt-[-5] mx-auto hover:scale-105 duration-500' />
                <h2 className='text-2xl text-center py-8 font-bold'>Triple User</h2>
                <p className='text-4xl font-bold text-center py-5'>450$</p>
                <div className='text-center font-medium'>
                    <p className='py-3 border-b mx-auto'>500GB space</p>
                    <p className='py-3 border-b mx-auto'>1 Granted User</p>
                    <p className='py-3 border-b mx-auto'>Send up to 2GB</p>
                    <button className='py-3 bg-green-400 w-[150px] mx-auto font-bold text-black my-2 rounded-md '>Start Trial</button>

                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Cards