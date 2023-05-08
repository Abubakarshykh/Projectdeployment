import React from 'react'
import Tableheader from '@/components/Tableheader'
import Tabledata from '@/components/Tabledata'
import Headcount from '@/components/Headcount'
import Sidenav from '@/components/Sidenav'
import Searchbar from '@/components/Searchbar'
import Pagination from '@/components/Pagination'


export default function Deaprtments(props) {

  // const emailInfo = `${props.emailsnames[0]} ${props.email[0]}`;
  // const [firstName, lastName] = emailInfo.split(" ");
  return (
    <>

      <Sidenav />


      <div class="bg-[#0d44b3] h-screen md:pl-6 md:pt-3  sm:ml-64">
        <div class="p-3 bg-white md:rounded-l-2xl h-full  dark:border-gray-700">
          <div class="grid grid-cols-1 gap-1 mb-4 h-full">
            {/* <Main_navbar/> */}
            <Headcount />
            <span className='px-[1rem]'>
            <Searchbar />
            </span>
            <div className="relative overflow-x-auto ">
              <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
                {/* Header_table */}
                <Tableheader />
                {/* Body_data */}
                <tbody>
                  <Tabledata
                    departmentsname={['Event Operations', 'Marketing & Promotions', 'Event Production', 'Guest Services', 'Logistics & Transportation', 'Venue Management']}
                    codenames={['DPT7431', 'DPT1287', 'DPT9065', 'DPT5824', 'DPT3976', 'DPT6490']}
                    emailsnames={['Olivia Rhye', 'Phoenix Baker', 'Lana Steiner', 'Demi Wilkinson', 'Candice Wu', 'Natali Craig']}
                    contact={['(555) 987-6543', '(555) 555-1212', '(555) 678-9012', '(555) 234-5678', '(555) 789-0123', '(555) 456-7890']}
                    email={['olivia@email.com', 'phoenix@email.com', 'lana@email.com', 'demi@email.com', 'candice@email.com', 'natali@email.com']}
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
