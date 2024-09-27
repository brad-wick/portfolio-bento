import React from 'react'

export default function Introduction() {
  return (
    <section className='rounded-xl bg-white shadow-xl p-5 mb-5 select-none sm:col-start-4 sm:row-start-2 sm:col-span-4 sm:row-span-2'>
      <h1 className='box-title'>About me</h1>
      <div className='flex flex-col items-center justify-center h-full gap-4 '>
        <h2 className='text-xl font-normal leading-[2rem]'>
          I&apos;m a
          <span className='font-bold text-violet-500'> software engineer </span>
          based in <span className='font-bold text-violet-500'> Mexico</span>,
          specializing in <br />
          <span className='font-bold text-violet-500'>
            {' '}
            full-stack development{' '}
          </span>
          with {''}
          <span className='font-semibold'>React (Next.js)</span>,{' '}
          <span className='font-semibold'>TypeScript</span>,{' '}
          <span className='font-semibold'>Node.js</span> and{' '}
          <span className='font-semibold'>PostgreSQL</span>.
        </h2>
      </div>
    </section>
  )
}
