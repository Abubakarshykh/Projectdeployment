import Headcount from '@/components/Headcount'
import Searchbar from '@/components/Searchbar'
import Sidenav from '@/components/Sidenav'
import Image from 'next/image'
import Link from 'next/link'

export default function Add_event_plus() {
  return (
    <>
    
    <Sidenav/>
    <div class="bg-[#0d44b3] h-screen md:pl-6 md:pt-3  sm:ml-64">
      <div class="p-3 bg-white md:rounded-l-2xl h-full dark:border-gray-700">
        <div class="grid grid-cols-1 gap-1 mb-4 h-full">
          {/* <Main_navbar/> */}
        <Headcount />
        <Searchbar />
        <div className='flex text-center justify-center items-center '>
          <div className=' justify-center rounded-full'>
            <Link href={'/Main_event'}>
              <Image 
              src={'/images/Files (2).png'}
                    width={160}
                    height={160}
                    className='justify-center text-center items-center mx-[5rem] cursor-pointer '/>
                    </Link>
                    
                    <h3 className='text-xl font-medium'>Add Your First Event</h3>
                    <p>Looks like you haven't added any events yet.<br/> Click the "Add Event" button to get started!</p>
                    <span className='inline-flex space-x-2 my-3'>
                        <button className='text-black border border-1 rounded px-6 py-2 hover:bg-gray-200 hover:first-letter:'>Support article</button>      
                        <Link href={'/Main_event'}>
                        <button type="button" className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-700 border border-gray-200 rounded hover:bg-blue-800  focus:z-10 ">
                            <svg 
                             xmlns="http://www.w3.org/2000/svg" 
                             fill="none" 
                             viewBox="0 0 24 24" 
                             strokeWidth={1.5} 
                             stroke="currentColor" 
                             className="w-5 h-5 ">
                           <path 
                           strokeLinecap="round" 
                           strokeLinejoin="round" 
                           d="M12 4.5v15m7.5-7.5h-15" />
                           </svg>
                           Add Event
                           </button>
                           </Link>
                </span>
            </div>
        </div>
    </div>
    </div>
    </div>

    </>
  )
}
