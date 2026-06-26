import { HeroSection } from './components/sections/HeroSection'
import { useScrollReveal } from './hooks/useScrollReveal'

function Home() {
  useScrollReveal()

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <HeroSection />
    </main>
  )
}

export default Home
