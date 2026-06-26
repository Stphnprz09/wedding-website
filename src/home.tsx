import { BackgroundEffects } from './components/layout/BackgroundEffects'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { HeroSection } from './components/sections/HeroSection'
import { RsvpSection } from './components/sections/RsvpSection'
import { ScheduleSection } from './components/sections/ScheduleSection'
import { StorySection } from './components/sections/StorySection'
import { details, navItems, schedule } from './data/wedding'
import { useActiveSection } from './hooks/useActiveSection'

function Home() {
  const activeSection = useActiveSection(navItems)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f9f7f2_0%,#f7e8e7_45%,#d7e4dd_100%)]">
      <BackgroundEffects />
      <Header activeSection={activeSection} navItems={navItems} />
      <HeroSection />
      <StorySection />
      <ScheduleSection details={details} schedule={schedule} />
      <RsvpSection />
      <Footer />
    </main>
  )
}

export default Home
