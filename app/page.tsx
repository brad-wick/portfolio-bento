import Awards from './components/awards'
import Contact from './components/contact'
import Experience from './components/experience'
import Introduction from './components/introduction'
import ProfileBox from './components/profile'
import Projects from './components/projects'
import Skills from './components/skills'

export default function Home() {
  return (
    <main className='h-full w-full max-w-5xl p-10 xl:m-32 lg:m-16 md:m-8'>
      {/* <ProfileBox /> */}
      <div className='flex flex-col gap-5 sm:hidden'>
        <Contact />
        <ProfileBox />
        <Introduction />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
      </div>
      <div className='hidden sm:visible sm:grid sm:gap-4 sm:grid-cols-11 sm:grid-rows-6'>
        <ProfileBox />
        <Contact />
        <Introduction />
        <Experience />
        {/* <Skills />
        <Awards />
        <Projects /> */}
      </div>
    </main>
  )
}
