import Image from 'next/image'
import React from 'react'
import profilePicture from '@/app/public/brad-profile-bw.png'

export default function Profile() {
  return (
    <section className='col-start-1 row-start-1 col-span-3 row-span-3 rounded-xl bg-white shadow-xl select-none'>
      <div className='flex flex-col items-center justify-center h-full gap-4 text-center'>
        <div className='relative'>
          <Image
            src={profilePicture}
            alt="Bradley's profile picture"
            width={200}
            height={200}
            priority
            placeholder='blur'
            quality={95}
            className='overflow-hidden rounded-full border-black border-2 relative'
          />
          <div className='absolute bottom-0 right-1 text-5xl'>👋</div>
        </div>
        <h1 className='text-3xl font-bold'>
          Hi, I&apos;m
          <span className='text-violet-500'> Bradley</span>
        </h1>
      </div>
    </section>
  )
}
