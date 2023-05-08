import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Pagination() {
  return (
    <>
    
<nav aria-label="Page navigation example" className='w-full justify-center text-center  rounded-b-lg'>
    <div className='flex justify-center'>
    <span className='flex mr-auto px-5 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
    <Image src='/images/previous.png' alt='' width={20} height={20} className='w-3 h-3 mt-1 ml-2'/>

      <Link href="/" className="pl-2">Previous</Link>
    </span>
    <ul className='inline-flex -space-x-px mt-2'>
    <li>
      <Link href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
    </li>
    <li>
      <Link href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</Link>
    </li>
    <li>
      <Link href="/" aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</Link>
    </li>
    <li>
     <Link href='/'><Image src='/images/Number.png' alt='' width={40} height={30} className='px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'/></Link>
    </li>
    <li>
      <Link href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">8</Link>
    </li>
    <li>
      <Link href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">9</Link>
    </li>
    <li>
      <Link href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">10</Link>
    </li>
    
    </ul>
    <span className='flex ml-auto px-5 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
      <Link href="/" className="">Next</Link>
      <Image src='/images/next.png' alt='' width={10} height={10} className='w-3 h-3 mt-1 ml-2'/>
    </span>
    </div>
</nav>
</>
  )
}
