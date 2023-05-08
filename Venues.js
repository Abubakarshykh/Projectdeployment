import React from 'react'
import Mapvenue from "@/components/Mapvenue";
import Contentvenue from "@/components/Contentvenue";
import Header_venue from "@/components/Header_venue";
import Headcount from '@/components/Headcount';
import Sidenav from '@/components/Sidenav';
import Searchbar from '@/components/Searchbar';
import Pagination from '@/components/Pagination';

export default function Venues() {
  return (
    <>
      <Sidenav />
      <div class="bg-[#0d44b3] h-full md:pl-6 md:pt-3  sm:ml-64">
        <div class="p-3 bg-white md:rounded-l-2xl h-full dark:border-gray-700">
          <div class="grid grid-cols-1 gap-1 mb-4">
            {/* <Main_navbar/> */}
            <Headcount />
            <span className='px-[1rem]'>

            <Searchbar />
            </span>
            <Mapvenue />
            <div className="relative overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <Header_venue />
                <tbody>
                  <Contentvenue
                    venuenames={[
                      'Central Park Amphitheater', 'Grand Plaza Hotel', 'Civic Center Exhibition Hall', 'Sunset Beach Resort'
                    ]}
                    lorem={[
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ]}
                    codesvenue={[
                      'VEN4581', 'VEN3059', 'VEN7123', 'VEN6410'
                    ]}
                    Address={[
                      '2468 Park Avenue, Central City, IL 60007', '9101 Grand Boulevard, Belleview, FL 34420',
                      '5678 Main Street, Civic Center, NY 10001', '1234 Oceanview Drive, Coral City, CA 90210'
                    ]} />
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
