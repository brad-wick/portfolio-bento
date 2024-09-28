import React from 'react'
import { experienceData } from '../lib/data'
import ExperienceCard from './experience-card'

export default function Experience() {
  return (
    <section className='box-base-css sm:col-start-8 sm:row-start-1 sm:col-span-4 sm:row-span-2'>
      <div className='flex flex-col items-start h-full w-full gap-2'>
        <h1 className='box-title'>Experience & Education</h1>
        <div className='flex flex-col gap-3 overflow-scroll'>
          {experienceData.map((item, index) => (
            <ExperienceCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              date={item.date}
              img={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
