import React from 'react'
import Line_content from '@/components/Line_content'
import Link from 'next/link'
import Image from 'next/image'

export default function Personalinfo() {
    return (
        <>
            <div className="max-w-full w-screen h-screen bg-[#4a4a4f] mx-auto flex flex-col lg:flex-row ">

                <div className="box_left lg:block w-[30%] hidden pt-[6rem]">

                    <div className="content_box justify-center items-center inline-flex sm:pl-3 pl-3 lg:pl-12 pt-[2rem]">

                        <div className="grid grid-cols-1 gap-7 w-[30%] pb-6">
                            <Line_content />
                            {/* <Image href="images/"> */}
                        </div>
                        <div className="w-[80%] grid grid-cols-1 gap-7 ">
                            <span className="text-white border-l-lg border-white">
                                <p className="text-md">Personal information</p>
                                <p className="text-xs">Fill your profile and be one of our top candidates</p>
                            </span>
                            <span className="text-gray-200 ">
                                <p className="text-md ">Work experience</p>
                                <p className="text-xs">Add your latest work experience</p>
                            </span>
                            <span className="text-gray-200"><p className="text-md">Personal information</p>
                                <p className="text-xs">Fill your profile and be one of our top candidates</p>
                            </span>
                            <span className="text-gray-200"><p className="text-md">Personal information</p>
                                <p className="text-xs">Fill your profile and be one of our top candidates</p>
                            </span>
                            <span className="text-gray-200"><p className="text-md">Personal information</p>
                                <p className="text-xs">Fill your profile and be one of our top candidates</p>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Right_box */}
                <div className="box_right h-screen bg-white w-full lg:w-[70%] lg:rounded-l-3xl p-6">
                    <div className="header  justify-center">
                        <span className="justify-center flex">
                            <Image 
                            src="/images/crowdwrk_logo.png" 
                            className=" rounded-tl-lg lg:my-1" 
                            width={120} height={120} alt="" />
                        </span>
                    </div>
                    <div className=" justify-center text-center w-full xl:pt-3">
                        <h1 className="font-semibold text-size  lg:text-2xl pt-1 text-3xl md:pt-4 ">What&apos;s the best way to contact to you?</h1>
                    </div>
                    <div className=" justify-center items-center flex md:pt-8 lg:pt-3">
                        <div className="form_div xl:pt-8 lg:w-[55%] w-full ">
                            <form className="">
                                <div className="grid gap-5 md:gap-3 xl:mb-4 md:grid-cols-2">
                                    <div>
                                        <label htmlfor="first_name" className="block mb-2 text-sm  text-gray-600 dark:text-white">First name</label>
                                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amanda" required />
                                    </div>
                                    <div>
                                        <label htmlfor="last_name" className="block mb-2 text-sm  text-gray-600 dark:text-white">Last name</label>
                                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smith" required />
                                    </div>
                                </div>
                                <div className="mb-4 mt-1">
                                    <label htmlfor="email" className="block mb-1 text-sm text-gray-600 dark:text-white">Email</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="amanda.smith@email.com" required />
                                </div>
                                <label htmlfor="email-address-icon" className="block mb-2 text-sm text-gray-500 dark:text-white">Phone number</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+1(555) 000-000" />
                                </div>
                                <div className="btn_portion justify-between lg:pt-5 sm:pt-2 md:pt-5 lg:pb-5 flex gap-x-2">
                                    <button className="btn w-full rounded-md  bg-white  pt-1 pb-1 border-2 border-slate-200 hover:bg-gray-200 text-slate-500">Back</button>
                                    <button className="btn w-full rounded-md bg-blue-600  pt-1 pb-1 hover:bg-blue-800   text-white hover:text-white">Continue</button>
                                </div>
                                {/* <div className="Listed_icons flex space-x-4 text-center w-full justify-center pt-5">
                                    <Image src="/imagesbox/li dark.svg" alt="" className="w-3 h-3" width={12} height={12} />
                                    <Image src="/imagesbox/li.svg" alt="" className="w-3 h-3" width={12} height={12} />
                                    <Image src="/imagesbox/li.svg" alt="" className="w-3 h-3" width={12} height={12} />
                                    <Image src="/imagesbox/li.svg" alt="" className="w-3 h-3" width={12} height={12} />
                                    <Image src="/imagesbox/li.svg" alt="" className="w-3 h-3" width={12} height={12} />
                                    <Image src="/imagesbox/li.svg" alt="" className="w-3 h-3" width={12} height={12} />
                                </div> */}
                            </form>
                        </div>
                    </div>
                    
                    <footer className="md:w-full px-5 xl:pt-6 lg:pt-0 md:pb-2 sm:flex-wrap sm:items-center sm:justify-center sm:text-center  md:flex md:items-center md:justify-between">
                        <span className="flex text-sm text-gray-500 sm:text-center justify-center ">© Crowded Events Ltd. 2023</span>
                        <span className='flex text-sm text-gray-500 ml-auto sm:text-center justify-center'>support@crowdwrk.com</span>        
                        </footer>
                </div>
            </div>
        </>
    )
}