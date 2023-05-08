import React from 'react'
import Image from 'next/image'

export default function Share_modal_table(props) {
    return (
        <>
            <tr className="  dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className=" flex text-md font-medium text-gray-600 whitespace-nowrap dark:text-white ">

                    <Image src='/images/modalimg1.png' alt='' width={40} height={40} className=' my-2 mx-2' />
                    <div className='text-medium py-2 tracking-wide'>{`${props.Names[0]}`}<br /> {`${props.Email[0]}`}</div>
                </td>
                <td className="px-6 py-4  text-red-500 font-medium">
                    {props.Remove}
                </td>
            </tr>
            <tr className=" dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="  flex  text-md text-gray-600 whitespace-nowrap dark:text-white ">

                    <Image src='/Settingsimg/nameDW.png' alt='' width={40} height={40} className='my-2 mx-2' />
                    <div className='font-medium py-2  text-md tracking-wide'>{`${props.Names[1]}`}<br /> {`${props.Email[1]}`}</div>
                </td>
                <td className="px-6 py-4  text-red-500 font-medium">
                    {props.Remove}
                </td>
            </tr>
            <tr className="  dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className=" flex  text-gray-600 whitespace-nowrap dark:text-white ">

                    <Image src='/images/modalimg3.png' alt='' width={40} height={40} className='my-2 mx-2' />
                    <div className='font-medium py-2  text-md tracking-wide'>{`${props.Names[2]}`}<br /> {`${props.Email[2]}`}</div>
                </td>
                <td className="px-6 py-4  text-red-500 font-medium">
                    {props.Remove}
                </td>
            </tr>
        </>
    )
}
