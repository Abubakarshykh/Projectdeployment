import React from 'react'
import Button from './Button'
import Image from 'next/image'

export default function Tabledata(props) {

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
                    <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className='my-1 mx-2' />
                    {props.departmentsname[0]}
                </td>
                <td className="px-6 py-4 text-normal">
                    {props.codenames[0]}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        <Image src='/images/departmenticon1.png' alt='' width={30} height={30} className='my-1 mx-2' />
                        {`${props.emailsnames[0]}`}<br /> {`${props.email[0]}`}
                    </div>
                </td>
                <td className="px-6 py-4 flex-wrap">
                    {props.contact[0]}
                </td>
                <td className="px-6 py-4">
                    <Button />
                </td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2' />
                    {props.departmentsname[1]}
                </td>
                <td className="px-6 py-4">
                    {props.codenames[1]}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        <Image src='/images/departmenticon2.png' alt='' width={30} height={30} className=' my-1 mx-2' />

                        {`${props.emailsnames[1]}`}<br /> {`${props.email[1]}`}
                    </div>
                </td>
                <td className="px-6 py-4">
                    {props.contact[1]}
                </td>
                <td className="px-6 py-4">
                    <Button />

                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2' />
                    {props.departmentsname[2]}
                </td>
                <td className="px-6 py-4">
                    {props.codenames[2]}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        <Image src='/images/departmenticon3.png' alt='' width={30} height={30} className=' my-1 mx-2' />

                        {`${props.emailsnames[2]}`}<br /> {`${props.email[2]}`}
                    </div>
                </td>
                <td className="px-6 py-4">
                    {props.contact[2]}
                </td>
                <td className="px-6 py-4">
                    <Button />

                </td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/checkbox_em.png' alt='' width={20} height={20} className=' my-1 mx-1' />
                    {props.departmentsname[3]}
                </td>
                <td className="px-6 py-4">
                    {props.codenames[3]}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        <Image src='/images/departmenticon4.png' alt='' width={30} height={30} className='my-1 mx-2' />

                        {`${props.emailsnames[3]}`}<br /> {`${props.email[3]}`}
                    </div>

                </td>
                <td className="px-6 py-4">
                    {props.contact[3]}
                </td>
                <td className="px-6 py-4">
                    <Button />

                </td>
            </tr>
            <tr>
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/checkbox_em.png' alt='' width={20} height={20} className='w-5 h-5 my-1 mx-1' />
                    {props.departmentsname[4]}
                </td>
                <td className="px-6 py-4">
                    {props.codenames[4]}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        <div className='flex'>
                            <Image src='/images/departmenticon5.png' alt='' width={30} height={30} className='my-1 mx-2' />

                            {`${props.emailsnames[4]}`}<br /> {`${props.email[4]}`}
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    {props.contact[4]}

                </td>
                <td className="px-6 py-4">
                    <Button />

                </td>
            </tr>
            <tr>
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className=' my-1 mx-2' />
                    {props.departmentsname[5]}
                </td>
                <td className="px-6 py-4">
                    {props.codenames[5]}
                </td>
                <td className="px-6 py-4 ">
                    <div className='flex'>
                        <Image src='/images/departmenticon6.png' alt='' width={30} height={30} className=' my-1 mx-2' />

                        {`${props.emailsnames[5]}`} <br /> {`${props.email[5]}`}
                    </div>

                </td>
                <td className="px-6 py-4 flex">
                    {props.contact[5]}
                </td>
                <td className="px-6 py-4">
                    <Button />
                </td>
            </tr>
        </>
    )
}
