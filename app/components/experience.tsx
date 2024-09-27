import React from 'react'
import ExperienceCard from './experience-card'
import { experienceData } from '../lib/data'

export default function Experience() {
  return (
    <section className='box-base-css mb-5 col-start-8 row-start-1 col-span-4 row-span-3'>
      <div className='flex flex-col items-start justify-evenly h-full w-full p-5 gap-2'>
        <h1 className='box-title'>Experience & Education</h1>

        <div className='flex flex-col gap-3 overflow-scroll snap-y'>
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
              date={experience.date}
              img={experience.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
