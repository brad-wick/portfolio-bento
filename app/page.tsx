import Awards from './components/awards'
import Contact from './components/contact'
import Experience from './components/experience'
import IntroBox from './components/introduction'
import ProfileBox from './components/profile'
import Projects from './components/projects'
import Skills from './components/skills'

export default function Home() {
  return (
    <main className='h-full w-full grid grid-cols-11 grid-rows-6 gap-5 p-10 xl:m-32 lg:m-16 md:m-8'>
      <ProfileBox />
      <Contact />
      <IntroBox />
      <Experience />
      <Skills />
      <Awards />
      <Projects />
    </main>
  )
}
