import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

export default function Header_venue() {
    return (
        <>

            <thead className="text-lg uppercase dark:bg-gray-700 dark:text-gray-400">
                {/* Header_table */}
                <tr>
                    <th scope="col" className="px-6 py-7 gap-2 text-gray-400 text-sm font-normal flex">
                        <input type='checkbox' className='rounded mx-2 border-gray-400 p-2' />
                        Venue Name
                        <Link href='/'>
                            <Image src='/images/downby.png' alt='' width={15} height={15} className='my-1 mx-2' />
                        </Link>
                    </th>
                    <th scope="col" className="px-6  py-3  text-gray-400 text-sm font-normal">
                        Venue description
                    </th>
                    <th scope="col" className="px-2  py-3  text-gray-400 text-sm font-normal">
                        Venue code
                    </th>
                    <th scope="col" className="px-6 py-3 text-gray-400 text-sm font-normal">
                        Address
                    </th>
                    <td className="px-6 py-4">
                        <Button />
                    </td>
                </tr>
            </thead>

        </>
    )
}
