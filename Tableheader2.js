import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'


export default function Tableheader2() {
  return (
    <thead className="text-lg uppercase dark:bg-gray-700 dark:text-gray-400">
      {/* Header_table */}
      <tr>
        <th scope="col" className="px-6 py-7 gap-2 text-gray-400 text-sm font-normal flex">
          <Image src='/images/_Checkbox base.png' alt='' width={20} height={20} className='mx-2' />
          Role name
          <Link href='/'>
            <Image src='/images/downby.png' alt='' width={15} height={15} className=' my-1 mx-2' />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3  text-gray-400 text-sm font-normal">
          Role description
        </th>
        <th scope="col" className="px-6 py-3  text-gray-400 text-sm font-normal">
          Role code
        </th>
        <th scope="col" className="px-6 py-3 text-gray-400 text-sm font-normal">
          Workforce type
        </th>
        <td className="px-6 py-4">
          <Button />
        </td>
      </tr>
    </thead>

  )
}
