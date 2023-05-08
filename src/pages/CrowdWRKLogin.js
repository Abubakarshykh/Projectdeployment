import React from 'react'
import Avatarsnew from '@/components/Avatarsnew'
import Link from 'next/link'
import Image from 'next/image'

export default function CrowdWRKLogin() {
    return (
        <>
            <div className="flex flex-col lg:flex-row mx-auto flex flex-row lg:-space-x-7">
                {/* <!-- left_Section --> */}
                <div className="w-full lg:w-[52%] pt-[12rem]  pt-6 lg:pb-6"
                    style={{
                        backgroundImage: `url(../Settingsimg/Blur.png)`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div className="content_box justify-center items-center inline-flex pl-20 pr-20 pt-10 word-break">

                        <div className="justify-center p-4 pl-10">
                            <h3 className="text-3xl font-semibold text-white  lg:text-5xl">Streamline Your Event Planning with CROWDWRK</h3>

                            <p className="text-white font-light text-xl tracking-tighter py-5">Say goodbye to inefficient planning and execution - CROWDWRK is designed to simplify every step of your event planning process.</p>

                            <div className="flex flex-col  sm:flex-row gap-3 mt-3">
                                {/* <!-- Avatars --> */}

                                <div className="flex -space-x-3">
                                    <Image src="/Settingsimg/Avatar (6).png" alt="" className="w-15 h-15 z-50" />
                                    <Image src="/Settingsimg/Avatar (7).png" alt="" className="w-15 z-40" />
                                    <Image src="/Settingsimg/Avatar (8).png" alt="" className="w-15  z-30" />
                                    <Image src="/Settingsimg/Avatar (9).png" alt="" className="w-15  z-20" />
                                    <Image src="/Settingsimg/Avatar (10).png" alt="" className="w-15 z-10" />
                                </div>
                                {/* <!-- Stars --> */}
                                <div className="pt-1 flex gap-x-1">
                                    <Avatarsnew />
                                    <Link href="/" className="text-white  text-lg my-[-.2rem]">5.0</Link>
                                </div>
                            </div>
                            <p className="text-white text-lg lg:ml-[11.6rem] lg:mt-[-1rem]">From  200+ reviews</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Right_section --> */}
                <div className="justify-center items-center  lg:w-[54%] z-50 bg-white lg:rounded-l-[2rem] ">
                    <div className="justify-center  text-center flex ">
                        <Image src="/images/a2.svg" width={20} height={20} className="text-center justify-center w-[12rem] " alt="" />
                    </div>

                    <div className=" lg:pl-[11rem] md:pl-[12rem] sm:pl-[8rem] pl-[3rem] lg:pt-6 ">
                        <h1 className="font-bold text-size indent-2.5 text-3xl">Log in</h1>
                        <p className="font-normal  text-sm pl-3 pt-3 text-gray-500 ">Welcome back! Please enter your details.</p>
                    </div>
                    {/* <!-- Form --> */}
                    <div className=" justify-center items-center flex">
                        <div className="form_div pt-8 lg:w-[55%] w-full p-10 lg:p-3">
                            <form>
                                <div className="grid gap-4 mb-6 md:grid-cols-1 pl-[1rem]">
                                    <div className="mb-1">
                                        <label htmlfor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlfor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full pl-4 pr-2 pb-4">
                                    <div className="flex">
                                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlfor="link-checkbox" className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Remember for 30 days</label>
                                    </div>
                                    <Link href="/" className=" ml-5 text-sm font-semibold text-[#2f68d6]">Forgot Password</Link>
                                </div>
                                <div className="btn_portion pb-3 pl-3 pr-3">
                                    <button className=" w-full sm:mt-2 mt-2 sm:ml-1 ml-1 pl-[5rem] pr-[5rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
                                    <button type="button" className="sm:mt-2 mt-1 sm:ml-1 ml-1 w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4" /><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853" /><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04" /><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335" /></svg>
                                        Sign in with Google
                                    </button>
                                    <span className="flex text-cente justify-center pt-3">
                                        <Link href="/" className="font-normal">Don’t have an account?</Link><Link href="/" className="font-semiboldtext-blue-600">Sign up</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <footer className=" dark:bg-gray-800">
                        <div className="w-full md:p-6 sm:items-center sm:justify-center text-center  md:flex md:items-center md:justify-between">
                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© Crowded Events Ltd. 2023</span>
                            <ul className="flex flex-wrap justify-center items-center sm:text-center lg:mt-3 text-sm  text-gray-500 dark:text-gray-400 sm:mt-1">
                                <li className="flex text-center justify-center items-center hover:underline">
                                    <Image src="/imagesbox/email.png" width={20} height={20} alt="" className=" mt-[5px] " />
                                    <Link href="/" className="">support@crowdwrk.com</Link>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
