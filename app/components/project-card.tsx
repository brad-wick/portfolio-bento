'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

type Props = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  img: StaticImageData
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  img,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className='p-3 cursor-pointer border-2 border-black rounded-xl border-solid transition hover:bg-violet-200 snap-start'>
      <div
        className='flex items-start gap-2 overflow-y-auto max-h-80'
        onClick={toggleAccordion}
      >
        <Image
          className='overflow-hidden rounded-full border border-gray-400 border-solid'
          src={img}
          alt='Experience image'
          width={60}
          height={60}
        />

        <div className='flex flex-col w-full h-full select-none'>
          <div className='flex justify-between items-center'>
            <span className='font-bold text-sm transition select-none flex flex-row items-center gap-1'>
              {title}
              <MdArrowForwardIos
                className={`text-xs transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
              />
            </span>
          </div>
          <span className='text-xs text-gray-600'>{subtitle}</span>
          {/* Accordion content */}
          <div
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-screen opacity-100' : 'opacity-0'
            }`}
          >
            <p
              className={`text-xs text-gray-600 mt-1 transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {description}
            </p>
            <div className='flex flex-wrap mt-2'>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs mr-3 text-violet-500 transition-opacity duration-300'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
