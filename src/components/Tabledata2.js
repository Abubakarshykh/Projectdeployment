import React from 'react'
import Tabledata2 from './Tabledata2'
import Button from './Button'
import Image from 'next/image'


export default function Tabledata(props) {

    const emailInfo = `${props.Roledescription} ${props.Roledescription2}`;
    const [firstName, lastName] = emailInfo.split(" ");

    //  const Roledescription = props.Roledescription.join("<br>");

    return (
        <>
            {/* Row_1 */}
            <tr className="bg-blue-50 border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white ">
                    <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className='my-1 mx-2' />
                    {props.Rolename[0]}
                </td>
                <td className="px-6 py-4 text-normal">
                    {`${props.Roledescription}`}<br /> {`${props.Roledescription2}`}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        {props.Rolecode[0]}
                    </div>
                </td>
                <td className="px-6 py-4 flex-wrap">
                    {props.Workforcetype[0]}
                </td>
                <td className="px-6 py-4">
                    <Button />
                </td>
            </tr>
            {/* Row_2 */}
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/checkbox_em.png' alt='' width={20} height={20} className='my-1 mx-2' />
                    {props.Rolename[1]}
                </td>
                <td className="px-6 py-4">
                    {`${props.Roledescription}`}<br /> {`${props.Roledescription2}`}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        {props.Rolecode[1]}
                    </div>
                </td>
                <td className="px-6 py-4">
                    {props.Workforcetype[0]}
                </td>
                <td className="px-6 py-4">
                    <Button />
                </td>
            </tr>
            {/* Row_3 */}
            <tr className="bg-blue-50 border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className='my-1 mx-2' />
                    {props.Rolename[2]}
                </td>
                <td className="px-6 py-4">
                    {`${props.Roledescription}`}<br /> {`${props.Roledescription2}`}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        {props.Rolecode[2]}
                    </div>
                </td>
                <td className="px-6 py-4">{props.Workforcetype[1]}
                </td>
                <td className="px-6 py-4">
                    <Button />
                </td>
            </tr>
            <tr className="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/checkbox_em.png' alt='' width={20} height={20} className='w-5 h-5 my-1 mx-1' />
                    {props.Rolename[3]}
                </td>
                <td className="px-6 py-4">
                    {`${props.Roledescription}`}<br /> {`${props.Roledescription2}`}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>

                        {props.Rolecode[3]}
                    </div>
                </td>
                <td className="px-6 py-4">
                    {props.Workforcetype[2]}
                </td>
                <td className="px-6 py-4">
                    <Button />
                </td>
            </tr>
            <tr>
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/checkbox_em.png' alt='' height={20} width={20} className=' my-1 mx-1' />
                    {props.Rolename[4]}
                </td>
                <td className="px-6 py-4">
                    {`${props.Roledescription}`}<br /> {`${props.Roledescription2}`}
                </td>
                <td className="px-6 py-4">
                    <div className='flex'>
                        <div className='flex'>
                            {props.Rolecode[4]}
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    {props.Workforcetype[1]}
                </td>
                <td className="px-6 py-4">
                    <Button />
                </td>
            </tr>
            <tr className='bg-blue-50'>
                <td scope="row" className="px-6 py-4 flex font-normal text-lg text-gray-600 whitespace-nowrap dark:text-white">
                    <Image src='/images/_Checkbox_tick.png' alt='' width={20} height={20} className='my-1 mx-2' />
                    {props.Rolename[5]}
                    <button className='border px-2 bg-gray-50 ml-4 rounded'>open</button>

                </td>
                <td className="px-6 py-4">
                    {`${props.Roledescription}`}<br /> {`${props.Roledescription2}`}
                </td>
                <td className="px-6 py-4 ">
                    <div className='flex'>
                        {props.Rolecode[0]}
                    </div>
                </td>
                <td className="px-6 py-4 flex">
                    {props.Workforcetype[1]}
                </td>
                <td className="px-6 py-4">
                    <Button />
                </td>
            </tr>
        </>
    )
}
