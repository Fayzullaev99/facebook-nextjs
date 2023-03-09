import Image from 'next/image'
import React from 'react'

function Contact({src,name}) {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
        <Image 
            className='rounded-full'
            src={src}
            alt="contact"
            width={50}
            height={50}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
        <p>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full'></div>
    </div>
  )
}

export default Contact