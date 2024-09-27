import Image from 'next/image'
import React from 'react'
import profilePicture from '@/public/brad-profile-bw.png'

export default function Profile() {
  return (
    <section className='box-base-css select-none p-5 mb-5 sm:col-start-1 sm:row-start-1 sm:col-span-3 sm:row-span-3'>
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
        <h1 className='text-3xl font-semibold'>
          Hi, I&apos;m
          <span className='font-bold text-violet-500'> Bradley</span>
        </h1>
      </div>
    </section>
  )
}
