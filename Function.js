import React from 'react'
import Function_header from "@/components/Function_header";
import Function_tabledata from "@/components/Function_tabledata";
import Headcount from '@/components/Headcount';
import Sidenav from '@/components/Sidenav';
import Searchbar from '@/components/Searchbar';
import Pagination from '@/components/Pagination';



export default function Function() {
  return (
    <>

      <Sidenav />

      <div class="bg-[#0d44b3] h-screen md:pl-6 md:pt-3  sm:ml-64">
        <div class="p-3 bg-white md:rounded-l-2xl h-full dark:border-gray-700">
          <div class="grid grid-cols-1 gap-1 mb-4 h-full">
            <Headcount />
            <span className='px-[1rem]'>
              <Searchbar />
              </span>
            <div className="relative overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <Function_header />
                {/* Header_table */}
                {/* <Tableheader2/> */}
                {/* Body_data */}
                <tbody>
                  <Function_tabledata functionnames={[
                    'Production Management', 'Logistics and Transportation',
                    'Technical Services', 'Set Design and Construction', 'Venue and Facility Management',
                    'Catering and Hospitality Services']}
                    values={['PDM', 'LOG', 'TES', 'SDC', 'VFM', 'CHS']} />
                </tbody>
              </table>
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}
