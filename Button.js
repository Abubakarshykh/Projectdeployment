import React from 'react'
import Image from 'next/image'

export default function Button() {
  return (
    
               <button type="button" className="ml-auto text-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            <Image src="/images/menuitems.png" width={5} height={5} alt=""/>
        </button>
    
  )
}
