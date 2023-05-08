import React, { useState } from 'react'
import Image from 'next/image'

export default function Invitemodal() {

    const [text, setText] = useState('');

    const handlecopy = () => {
        var copyText = document.getElementById("copybutton")
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        alert("Copied to clipboard")
    }
    return (

        <>
            <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
   dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">Toggle modal</button>
            {/* <!-- Main modal --> */}
            <div
                id="authentication-modal"
                tabindex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden
        overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent
                     hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 
                     ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="authentication-modal">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        {/* Header_Avatars */}
                        <div className="px-6 py-6 lg:px-8">
                            <div className="flex -space-x-3 text-center justify-center">
                                <Image src="/Settingsimg/Avatar (7).png" width={35} height={35} alt="" className=" mt-2 z-20" />
                                <Image src="/Settingsimg/Avatar (8).png" width={40} height={40} alt="" className=" z-50" />
                                <Image src="/Settingsimg/Avatar (9).png" width={35} height={35} alt="" className=" mt-2  z-20" />
                            </div>
                            {/* Heading_top */}
                            <h1 className="text-md font-medium py-3 text-center">Invite your team</h1>
                            <p className="text-center text-gray-400 ">You&apos;ve created a new project! Invite colleagues to collaborate on this project.</p>
                            <div className="relative ">
                                <div className='py-2 pb-8'>
                                    {/* Copy_link */}
                                    <form>
                                        <div className=''>
                                            <label
                                                for="last_name"
                                                class="block mb-2 mx-3 text-md font-medium text-gray-900 dark:text-white">
                                                Share link
                                            </label>
                                            <div className='flex'><input
                                                id="copybutton"
                                                type="text"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                                         rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] 
                                                         p-2.5 ml-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={"join.crowd-wrk.com/event"}
                                                required />
                                                {/* click to copy text */}
                                                <Image  alt=''
                                                src='/Settingsimg/copyicon.png' 
                                                width={25} 
                                                height={25} 
                                                className=' my-4 mx-3 cursor-pointer' 
                                                onClick={handlecopy} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Footer_Buttons */}
                            <form className="space-y-6" action="#">
                                <div className="space-x-2 px-2 flex">
                                    <button data-modal-hide="authentication-modal" type="button" className="w-[50%] text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border">Cancel</button>
                                    <button data-modal-hide="authentication-modal" type="button" className="w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
