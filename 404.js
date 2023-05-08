import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function error() {


  return (
    <>
      {/* Container */}
      <div className='container mx-auto flex items-center justify-center h-screen w-full'>
        <div className='relative w-screen'>
          {/* Error_img */}
          <Image
            src='/errorpics/error.svg'
            width={100}
            height={100}
            alt=''
            className=' relative lg:top-[10rem] lg:left-[11rem] w-full max-w-[10rem] md:left-[20rem] left-[10rem]  ' />
          {/* Center_heading */}
          <h1 className='lg:text-[12rem] lg:block hidden text-[5rem] opacity-20 font-bold text-gray-800 text-center relative bottom-14 -z-10 '>404</h1>
          {/* Lower_heading */}
          <h2 className='uppercase lg:text-3xl font-extrabold  absolute lg:top-[13rem] lg:left-[20rem] left-[6rem] xl:left-[22rem] tracking-wider z-10 md:left-[16rem] '>We are sorry,Page not found!</h2>
          <br />
          <p className='uppercase lg:text-md sm:text-sm font-normal lg:absolute my-4 bottom-[13rem] left-[22rem] xl:left-[25rem] z-20 text-center text-gray-500'>The page you&apos;re looking for might have been removed had its name<br /> changed or is temporarily unavailable</p>
          {/* Button_return_home */}
          <Link href={'/'}>
            <button className=' px-5 py-2 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-600 relative md:left-[20rem] lg:left-[30rem] xl:left-[34rem] lg:bottom-[8rem] left-[10rem]'>Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}
