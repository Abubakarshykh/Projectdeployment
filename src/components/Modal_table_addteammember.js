import React from 'react'
import Image from 'next/image'

export default function Modal_table_addteammember(props) {
  return (
  <>
  <tr className="  dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="  flex  text-md font-medium text-gray-600 whitespace-nowrap dark:text-white ">
            {/* <Image src='images/_Checkbox_tick.png' className='w-4 h-4 my-1 mx-2'/> */}
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 my-4 ml-[1.8rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <Image src='/images/modalimg1.png' alt='' width={40} height={40} className='my-2 mx-5'/>
            <div className='text-medium py-2 tracking-wide'>{`${props.names[0]}`}<br/> {`${props.Email[0]}`}</div>
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Roles[0]}
        </td>
    </tr>
    <tr className=" dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6  flex  text-md text-gray-600 whitespace-nowrap dark:text-white ">
            {/* <Image src='images/_Checkbox_tick.png' className='w-4 h-4 my-1 mx-2'/> */}
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 my-5 mx-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <Image src='/images/modalimg2.png' alt='' width={40} height={40} className='w-10 h-10 my-2 mx-2'/>
            <div className='font-medium py-2  text-md tracking-wide'>{`${props.names[1]}`}<br/> {`${props.Email[1]}`}</div>
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Roles[0]}
        </td>
    </tr>
    <tr className="  dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 flex  text-gray-600 whitespace-nowrap dark:text-white ">
            {/* <Image src='images/_Checkbox_tick.png' className='w-4 h-4 my-1 mx-2'/> */}
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 my-5 mx-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <Image src='/images/modalimg3.png' alt='' width={40} height={40} className='my-2 mx-2'/>
            <div className='font-medium py-2  text-md tracking-wide'>{`${props.names[2]}`}<br/> {`${props.Email[2]}`}</div>
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Roles[1]}
        </td>
    </tr>
    <tr className="  dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 flex  text-gray-600 whitespace-nowrap dark:text-white ">
            {/* <Image src='images/_Checkbox_tick.png' className='w-4 h-4 my-1 mx-2'/> */}
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 my-5 mx-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <Image src='/images/modalimg4.png' alt='' width={40} height={40} className=' my-2 mx-2'/>
            <div className='font-medium py-2  text-md tracking-wide'>{`${props.names[3]}`}<br/> {`${props.Email[3]}`}</div>
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Roles[1]}
        </td>
    </tr>
  </>
  )
}
