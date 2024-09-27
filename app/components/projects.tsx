import React from 'react'
import { projectData } from '../lib/data'
import ProjectCard from './project-card'

export default function Projects() {
  return (
    <section className='box-base-css col-start-8 row-start-4 col-span-4 row-span-3'>
      <div className='flex flex-col items-start justify-evenly h-full w-full p-5 gap-2'>
        <h1 className='box-title'>Projects</h1>

        <div className='flex flex-col gap-3 overflow-scroll snap-y'>
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tags={project.tags}
              img={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
