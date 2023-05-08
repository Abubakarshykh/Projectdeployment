import React from 'react'
// import Pagination from './Pagination'
// import Sidenav from './Sidenav'
import Headcount from '@/components/Headcount'
// import Searchbar from './Searchbar'
import Pagination from '@/components/Pagination'
import Sidenav from '@/components/Sidenav'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'

export default function Overview() {
  return (
    <>
      <Sidenav />


      <div class="bg-[#0d44b3] h-screen md:pl-6 md:pt-2  sm:ml-64">
        <div class="p-3 bg-white md:rounded-l-3xl h-full dark:border-gray-700">
          <div class="grid grid-cols-1 gap-1">
            {/* <Main_navbar/> */}
            <Headcount />
            {/* <Searchbar /> */}
            <div className="flex w-full gap-2 h-full ">
              {/* left_box */}
              <div className=" w-full max-w-[20rem] p-6">
                <div className='flex'>
                  <div className='border-b-2 w-full '>
                    <h2 className='text-2xl font-normal pb-6'>Active now</h2>
                  </div>
                  <button type="button" className="ml-auto text-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 mr-2 mb-4">
                    <Image src="/images/menuitems.png" width={5} height={10} alt="" className='' />
                  </button>
                </div>
                <Image 
                src='/images/Activity circle.png' 
                alt='' 
                className='sm:w-full my-6' 
                width={200} 
                height={200}/>
              </div>
              {/* Right_box */}
              <div className=" w-screen pl-6">
                <div className='border-b-2 pb-3 flex py-5'>
                  <h2 className='text-2xl font-normal '>Total roles</h2>
                  <button type="button" className="ml-auto text-white 
                   focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg 
                   text-sm px-6 mb-2">
                    <Image 
                    src="/images/menuitems.png" 
                    width={4.5} 
                    height={4.5} 
                    alt="Chart" 
                    className='my-3' />
                  </button>
                </div>
                {/* Chart_img */}
                <Image src='/images/chart.png' alt=''
                  width={690}
                  height={690}
                  className=' flex-wrap' />


              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
