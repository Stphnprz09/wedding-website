import heroImg from '../../assets/hero.png'
import { SectionKicker } from '../ui/SectionKicker'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="max-w-2xl">
        <SectionKicker>Together with their families</SectionKicker>
        <h1 className="mt-5 font-serif text-6xl leading-[0.95] text-[#25211f] sm:text-7xl lg:text-8xl">
          Stephen & Happy
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-[#5d5650]">
          We are celebrating a lifetime promise with the people who made the
          journey beautiful. Join us for an intimate garden ceremony, dinner,
          music, and a night worth remembering.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#rsvp"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2f4f46] px-7 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#2f4f46]/20 transition hover:-translate-y-0.5 hover:bg-[#263f38]"
          >
            RSVP Now
          </a>
          <a
            href="#schedule"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#9a6f4d]/40 bg-white/55 px-7 text-sm font-bold uppercase tracking-[0.18em] text-[#5a4332] transition hover:-translate-y-0.5 hover:border-[#9a6f4d]"
          >
            View Details
          </a>
        </div>
      </div>

      <div
        className="glass-panel relative min-h-[520px] overflow-hidden rounded-[2rem] p-6"
        aria-label="Wedding invitation feature"
      >
        <div className="absolute inset-x-6 top-6 flex justify-between text-xs font-bold uppercase tracking-[0.22em] text-[#9a6f4d]">
          <span>June 14</span>
          <span>Garden Estate</span>
        </div>
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8b9b1]/45 blur-3xl" />
        <img
          src={heroImg}
          className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_32px_50px_rgba(47,44,42,0.18)] sm:w-80"
          alt=""
        />
        <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-[#25211f]/90 p-6 text-white">
          <p className="font-serif text-4xl">Save the date</p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Ceremony at three in the afternoon, reception immediately following.
          </p>
        </div>
      </div>
    </section>
  )
}
