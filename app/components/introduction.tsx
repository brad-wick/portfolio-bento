import React from 'react'

export default function Introduction() {
  return (
    <section className='box-base-css select-none sm:col-start-4 sm:row-start-2 sm:col-span-4 sm:row-span-2'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl sm:text-xl font-normal text-center'>
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
