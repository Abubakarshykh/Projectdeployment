import React from 'react'
// import Event_data from '.@/components/Event_data'
// import Event_Header from '.@/components/Event_Header'
// import Pagination from './Pagination'
// import Sidenav from './Sidenav'
import Headcount from '@/components/Headcount'
// import Searchbar from './Searchbar'
import Event_data from '@/components/Event_data'
import Event_Header from '@/components/Event_Header'
import Sidenav from '@/components/Sidenav'
import Searchbar from '@/components/Searchbar'
import Pagination from '@/components/Pagination'

export default function Main_event(props) {
  return (
    <>
      <Sidenav />
      <div class="bg-[#0d44b3] h-screen md:pl-6 md:pt-3 sm:ml-64">
        <div class="p-3 bg-white md:rounded-l-3xl h-full dark:border-gray-700">
          <div class="grid grid-cols-1 gap-1 h-full">
            {/* <Main_navbar/> */}
            <Headcount />
            <span className='px-[1rem]'>

            <Searchbar />
            </span>
            <div className="relative overflow-x-auto">
              <table className=" text-sm text-left text-gray-500 ">
                <Event_Header />
                <tbody>
                  <Event_data
                    firstnames={['Summer Music Festival', 'International Trade Expo', 'Neighborhood Block Party', 'Charity Walkathon', 'College Career Fair', 'Art Exhibition', 'Tech Conference']}
                    Eventcode={['EVT9A7G', 'EVT2C4H', 'EVT5D1J', 'EVT8B2K', 'EVT6F3L', 'EVT4G9M', 'EVT1H8N']}
                    startdates={['10 Apr 2023', '20 Jun 2023', '15 Aug 2023', '05 Sep 2023', '01 Nov 2023', '15 Jan 2024', '12 Mar 2024']}
                    enddates={['15 Apr 2023', '25 Jun 2023', '18 Aug 2023', '10 Sep 2023', '03 Nov 2023', '20 Jan 2024', '17 Mar 2024']}
                    venues={['Central Park Amphitheater', 'Grand Plaza Hotel', 'Civic Center Exhibition Hall', 'Sunset Beach Resort', 'The Glass House', 'The Palace Ballroom', 'Meadowbrook Country Club']} />
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
