import React from 'react'

export default function After_searchbar() {
  return (
    <>
    <div className='flex pt-3'>
        <div className=" w-full ">
        
        <h2 className=' text-lg font-medium'>Team management</h2>
      <p className='text-sm font-light text-slate-400 tracking-wide'>Manage your team members here.</p>
      </div>
      <button 
        type="button" 
        className="flex bg-white hover:bg-gray-100 border border-gray-200
         font-medium rounded-lg text-sm px-4 py-2.5
         inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-4 h-4">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>

        Add team member
      </button>
      </div>

    
    </>
  )
}
