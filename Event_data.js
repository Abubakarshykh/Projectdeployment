import React from 'react'
import Button from './Button'
import Image from 'next/image'

export default function Event_data(props) {
  return (
    <>
     {/* Row_1 */}
     <tr className="bg-gray-50 border-b ">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2'/>
            {props.firstnames[0]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Eventcode[0]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.startdates[0]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.enddates[0]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.venues[0]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
    {/* Row_2 */}
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2'/>
            {props.firstnames[1]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Eventcode[1]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.startdates[1]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.enddates[1]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.venues[1]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
    {/* Row_3 */}
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2'/>
            {props.firstnames[2]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Eventcode[2]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.startdates[2]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.enddates[2]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.venues[2]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
    {/* Row_4 */}
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2'/>
            {props.firstnames[3]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Eventcode[3]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.startdates[3]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.enddates[3]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.venues[3]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className='my-1 mx-2'/>
            {props.firstnames[4]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Eventcode[4]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.startdates[4]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.enddates[4]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.venues[4]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2'/>
            {props.firstnames[5]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Eventcode[5]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.startdates[5]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.enddates[5]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.venues[5]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
    <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
            <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2'/>
            {props.firstnames[6]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.Eventcode[6]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.startdates[6]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.enddates[6]}
        </td>
        <td className="px-6 py-4 flex-wrap">
            {props.venues[6]}
        </td>
        <td className="px-6 py-4">
            <Button/> 
        </td>
    </tr>
  
    </>
  )
}
