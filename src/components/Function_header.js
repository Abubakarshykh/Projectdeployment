import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
// import Button from './Button'

export default function Function_header() {
  return (
    <thead className="text-lg uppercase dark:bg-gray-700 dark:text-gray-400">
      {/* Header_table */}
      <tr>
        <th scope="col" className="px-6 py-7 gap-2 text-gray-400 text-sm font-normal flex">
          <Image src='/images/_Checkbox base.png' alt='' width={15} height={50} className='w-5 h-5 mx-2' />
          Function name
          <Link href='/'>
            <Image src='/images/downby.png' alt='' width={15} height={15} className='w-4 h-4 my-1 mx-2' />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3 font-normal text-gray-400 text-sm font-normal">
          Function Code
        </th>
        <td className="px-6 py-4">
          <Button />
        </td>
      </tr>
    </thead>
  )
}
