import React from 'react'

export default function Introduction() {
  return (
    <section className='col-start-4 row-start-2 col-span-4 row-span-2 rounded-xl bg-white shadow-xl select-none'>
      <div className='flex flex-col items-center justify-center h-full gap-4 '>
        <h2 className='text-xl font-normal p-5 leading-[2rem] text-center'>
          I&apos;m a
          <span className='font-extrabold text-violet-500'>
            {' '}
            software engineer{' '}
          </span>
          based in{' '}
          <span className='font-extrabold text-violet-500'> Mexico</span>,
          specializing in <br />
          <span className='font-extrabold text-violet-500'>
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
