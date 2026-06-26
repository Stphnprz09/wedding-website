import { Header } from './components/layout/Header'
import { HeroSection } from './components/sections/HeroSection'
import { navItems } from './data/wedding'
import { useScrollReveal } from './hooks/useScrollReveal'

function Home() {
  useScrollReveal()

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Header navItems={navItems} />
      <HeroSection />
    </main>
  )
}

export default Home
