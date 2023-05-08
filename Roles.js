import React from 'react'
import Tableheader2 from "@/components/Tableheader2";
import Tabledata2 from "@/components/Tabledata2";
import Headcount from '@/components/Headcount';
import Sidenav from '@/components/Sidenav';
import Searchbar from '@/components/Searchbar';
import Pagination from '@/components/Pagination';


export default function Roles() {
  return (
    <>
      <Sidenav />


      <div class="bg-[#0d44b3] h-screen md:pl-6 md:pt-3  sm:ml-64">
        <div class="p-3 bg-white md:rounded-l-2xl h-full dark:border-gray-700">
          <div class="grid grid-cols-1 gap-1 mb-4 h-full">
            {/* <Main_navbar/> */}
            <Headcount />
            <span className='px-[1rem]'>

            <Searchbar />
            </span>
            <div className="relative overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* Header_table */}
                <Tableheader2 />
                {/* Body_data */}
                <tbody>
                  <Tabledata2
                    Rolename={['Production Coordinator', 'Set Designer', 'Stage Manager', 'Set Designer', 'Lighting Designer', 'Sound Designer']}
                    Roledescription={['Lorem ipsum dolor sit amet, consectetur']}
                    Roledescription2={[' adipiscing elit.']}
                    Rolecode={['Role code', 'PDMP402', 'PDMC615', 'PDMV173', 'PDMC956', 'PDMV321']}
                    Workforcetype={['Paid staff', 'Contractor', 'Volunteer']}
                  />
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
