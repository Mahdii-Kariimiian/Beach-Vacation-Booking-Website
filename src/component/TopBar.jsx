import React from 'react'
import {AiFillPhone , AiOutlineClockCircle} from 'react-icons/ai'
import { BsChatSquareDots} from'react-icons/bs'

function TopBar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <BsChatSquareDots size={30} className='mr-2' />
        <h1 className='text-xl font-bold'>WEEKAWAY</h1>
      </div>
      <div className='flex'>
        <div className='hidden md:flex items-center px-6'>
            <AiOutlineClockCircle size={20} className=' text-[var(--primary-dark)] mr-2' />
            <p className='text-sm text-gray-700'>9 AM - 5 PM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
            <AiFillPhone size={20} className='text-[var(--primary-dark)] mr-2'/>
            <p className='text-sm text-gray-700'> 1-800-555-1212</p>
        </div>
      </div>
      <button>Get a free quote</button>
    </div>
  )
}

export default TopBar
