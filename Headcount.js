import React from 'react'
import Navbarhead from './Navbarhead'
import Image from 'next/image'

export default function Headcount() {
  return (
    <>
    <div className='container mx-auto px-4'>
        <span className='flex space-x-8'>
        <Image src="/images/darkhome_icon.png" alt='' width={20} height={20} className='w-4 h-5 my-2'/>
        <Image src="/images/arrow.png" alt='' width={20} height={20} className='w-3 h-4 my-[0.6rem]'/>
        <h3 className='text-[#084cd0] font-medium pt-1 text-lg'>Headcount</h3>
 </span>    
 
 <span className='flex'>
    <h1 className='md:text-3xl font-medium my-2 tracking-wide'>Headcount Management</h1>
    <button type="button" className="ml-auto border border-400 font-medium rounded-lg text-sm px-5  text-center inline-flex items-center text-gray-600 mr-2 mb-2  hover:bg-gray-100 hover:text-gray-700 ">
       <Image src="/images/upload.png" width={20} height={20} alt="" className="w-3 h-3 mr-2"/>
       Import
      </button>
      <button type="button" className="border border-400 font-medium rounded-lg text-sm px-5  text-center inline-flex items-center text-gray-600 mr-2 mb-2  hover:bg-gray-100 hover:text-gray-700 ">
        <Image src="/images/Icondown.png" width={20} height={20} alt="" className="w-3 h-3 mr-2"/>
        Export
       </button>
       <button className=" hover:bg-blue-800 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm md:px-5 sm:px-3 px-3  text-center inline-flex items-center bg-blue-600 text-white  md:mr-2  mb-2">+ Add Event</button>
    </span> 
    <p className="text-lg font-light text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
</div>
<Navbarhead/>
    </>
  )
}
