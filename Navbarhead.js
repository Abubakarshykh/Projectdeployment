import React from 'react'
import Link from 'next/link';
// import { useNavigate, Link } from 'react-router-dom';

export default function Navbarhead(props) {
  return (
    <>
    <nav className="bg-white border-b border-gray-200 pt-2 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-4">
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div className="hidden w-full md:block md:w-auto pb-3" id="navbar-default">
        <ul className="font-medium flex flex-col  md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
          <Link href={'/Overview'}>
              <span 
              className=" text-gray-500 font-normal text-lg ml-auto cursor-pointer hover:border-b border-blue-500 md:hover:pb-[0.9rem]" 
              aria-current="page">Overview</span>
              </Link>
          </li>
          <li>
            <Link href={'/Main_event'}>
              <span  
              className=" text-gray-500 font-normal text-lg ml-auto cursor-pointer hover:border-b border-blue-500 md:hover:pb-[0.9rem]" 
               aria-current="page">Events</span>
              </Link>
              </li>
              <li>
              <Link href={'/Deaprtments'} >
              <span  
              className=" text-gray-500 font-normal text-lg ml-auto cursor-pointer hover:border-b border-blue-500 md:hover:pb-[0.9rem]" 
               aria-current="page">Departments</span>
              </Link>
              </li>
              <li>
              <Link href={'/Function'} >
              <span  
              className=" text-gray-500 font-normal text-lg ml-auto cursor-pointer hover:border-b border-blue-500 md:hover:pb-[0.9rem]" 
               aria-current="page">Function</span>
              </Link>
              </li>
              <li>
              <Link href={'/Roles'} >
              <span  
              className=" text-gray-500 font-normal text-lg ml-auto cursor-pointer hover:border-b border-blue-500 md:hover:pb-[0.9rem]" 
               aria-current="page">Roles</span>
              </Link>
              </li>
              <li>
              <Link href={'/Venues'} >
              <span  
              className=" text-gray-500 font-normal text-lg ml-auto cursor-pointer hover:border-b border-blue-500 md:hover:pb-[0.9rem]" 
               aria-current="page">Venues</span>
              </Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}
