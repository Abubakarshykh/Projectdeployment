import Share_modal_table from '@/components/Share_modal_table'
import React from 'react'
import Image from 'next/image'

export default function Share_modal() {
    return (
        <>
            {/* <!-- Modal toggle --> */}
            <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                type="button">
                Toggle modal
            </button>

            {/* <!-- Main modal --> */}
            <div id="authentication-modal"
                tabindex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <Image src="/images/Featured icon.png" alt='' width={50} height={50} />
                            <h3 className="mb-2 px-2 text-xl font-medium text-gray-900 dark:text-white">Share with people</h3>
                            <p className=' mx-2  mb-3 text-gray-500 text-md'>The following users have access to this project:</p>
                            <form className="space-y-6" action="#">
                                <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-t-lg rounded">


                                    <tbody>
                                        <Share_modal_table
                                            Names={[
                                                'Candice Wu', 'Demi Wilkinson', 'Drew Cano'
                                            ]}
                                            Email={[
                                                'candice@email.com', 'demi@email.com', 'drew@email.com'
                                            ]}
                                            Remove='Remove' />
                                    </tbody>
                                </table>
                                <label
                                    htmlFor="countries"
                                    className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Team member
                                </label>
                                <div class="flex pl-2">
                                    <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm 
                        font-medium text-center text-gray-500 bg-gray-100  
                         rounded-l-md dark:text-white dark:border-gray-600"
                                        type="button">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </button>

                                    <select
                                        id="countries"
                                        className="bg-gray-100 text-sm
                         rounded-r-lg  border-none block w-full p-2.5 ">
                                        <option selected className='text-gray-400'>Select team member</option>
                                        <option value="US">Oriana</option>
                                        <option value="CA">Woody</option>
                                        <option value="FR">Hermionie</option>
                                        <option value="DE">Harry</option>
                                    </select>
                                </div>


                                <div className="space-x-2 flex p-2">
                                    <button type="submit" className="w-[50%] text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border">Cancel</button>
                                    <button type="submit" className="w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Done</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
