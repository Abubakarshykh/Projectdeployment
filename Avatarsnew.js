import Image from 'next/image'

export default function Avatarsnew() {
  return (
    <>
    <div className='flex space-x-2 mx-1 mb-1'>
      <Image src="/Settingsimg/star.png" alt="" width={20} height={20} className="w-5 h-5"/>
      <Image src="/Settingsimg/star.png" alt="" width={20} height={20} className="w-5 h-5"/>
      <Image src="/Settingsimg/star.png" alt="" width={20} height={20} className="w-5 h-5"/>
      <Image src="/Settingsimg/star.png" alt="" width={20} height={20} className="w-5 h-5"/>
      <Image src="/Settingsimg/star.png" alt="" width={20} height={20} className="w-5 h-5"/>
    </div>
    </>
  )
}
