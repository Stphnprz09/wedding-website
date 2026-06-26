import { SectionKicker } from '../ui/SectionKicker'

export function StorySection() {
  return (
    <section
      id="story"
      className="relative z-10 border-y border-[#2f2c2a]/10 bg-white/55 px-5 py-16 sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionKicker>Our Story</SectionKicker>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#25211f] sm:text-5xl">
            A day designed to feel warm, present, and close.
          </h2>
        </div>
        <p className="text-lg leading-8 text-[#5d5650]">
          From the first hello to this next chapter, every step has been shaped
          by faith, family, laughter, and steady love. This site will keep
          guests close to the moments that matter most.
        </p>
      </div>
    </section>
  )
}
