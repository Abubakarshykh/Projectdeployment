import React from 'react'
import Image from 'next/image'

export default function Line_content() {
  return (
    <>
    <div className='space-y-4 mx-2 lg:my-0 '>
        <Image src='/images/Progress points.png' alt='' className='' width={22} height={22}/>
        <div className="border-l border-white border-solid h-6 ml-2"></div>
        <i className="far fa-dot-circle text-xl text-white"></i>
        <div className="border-l border-white border-solid h-6 ml-2"></div>
        <i className="far fa-dot-circle text-xl text-white"></i>
        <div className="border-l border-white border-solid h-6 ml-2"></div>
        <i className="far fa-dot-circle text-xl text-white"></i>
        <div className="border-l border-white border-solid h-6 ml-2"></div>
        <i className="far fa-dot-circle text-xl text-white"></i>
        {/* <Image src='images/Progress points.png' className='w-6 h-6'/> */}

    </div>
    </>
  )
}
