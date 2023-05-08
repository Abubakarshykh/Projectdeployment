import React from 'react'
import Header_venue from './Header_venue'
import Button from './Button'
import Image from 'next/image'

export default function Contentvenue(props) {
  return (
    <>
    {/* <Header_venue/> */}
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal md:text-lg pt-3 sm:pt-1 text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2'/>
            {props.venuenames[0]}
        </td>
        <td className="px-8 py-4 flex-wrap">
            {props.lorem}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.codesvenue[0]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Address[0]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
    {/* Row_2 */}
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal md:text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className='my-1 mx-2'/>
            {props.venuenames[1]}
        </td>
        <td className="px-8 py-4 flex-wrap">
            {props.lorem}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.codesvenue[1]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Address[1]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
    {/* rox_3 */}

    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className='my-1 mx-2'/>
            {props.venuenames[2]}
        </td>
        <td className="px-8 py-4 flex-wrap">
            {props.lorem}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.codesvenue[2]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Address[2]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>

    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className='my-1 mx-2'/>
            {props.venuenames[3]}
        </td>
        <td className="px-8 py-4 flex-wrap">
            {props.lorem}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.codesvenue[3]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Address[3]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>

    </>
  )
}
