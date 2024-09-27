import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { LuDownload } from 'react-icons/lu'

export default function Contact() {
  const style =
    'p-3 rounded-xl border-2 border-black border-solid transition hover:bg-violet-200 hover:scale-110'

  return (
    <section className='box-base-css p-5 mb-5 sm:col-start-4 sm:row-start-1 sm:col-span-4 sm:row-span-1'>
      <div className='flex flex-row items-center justify-center h-full gap-5 text-center'>
        <a
          className={style}
          href='https://www.linkedin.com/in/bradley-flores/'
          download
          target='_blank'
        >
          <FaLinkedin className='text-3xl' />
        </a>
        <a
          className={style}
          href='https://github.com/brad-wick'
          download
          target='_blank'
        >
          <FaSquareGithub className='text-3xl' />
        </a>
        <Link className={style} href='mailto:bradflores.dev@gmail.com'>
          <HiOutlineMail className='text-3xl' />
        </Link>
        <a className={style} href='/cv.pdf' download>
          <LuDownload className='text-3xl' />
        </a>
      </div>
    </section>
  )
}
