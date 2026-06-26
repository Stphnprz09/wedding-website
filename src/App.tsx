import heroImg from './assets/hero.png'

const schedule = [
  ['3:00 PM', 'Garden ceremony'],
  ['4:30 PM', 'Cocktails and portraits'],
  ['6:00 PM', 'Dinner reception'],
]

const details = [
  ['Venue', 'Rosewood Garden Estate'],
  ['Date', 'Saturday, June 14'],
  ['Dress', 'Formal garden attire'],
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f9f7f2_0%,#f7e8e7_45%,#d7e4dd_100%)]">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 text-sm font-semibold text-[#4d4641] sm:px-8">
        <a href="#home" className="font-serif text-2xl text-[#2f2c2a]">
          S & H
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#story" className="transition hover:text-[#9a6f4d]">
            Story
          </a>
          <a href="#schedule" className="transition hover:text-[#9a6f4d]">
            Schedule
          </a>
          <a href="#rsvp" className="transition hover:text-[#9a6f4d]">
            RSVP
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="max-w-2xl">
          <p className="section-kicker">Together with their families</p>
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
              Ceremony at three in the afternoon, reception immediately
              following.
            </p>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="border-y border-[#2f2c2a]/10 bg-white/55 px-5 py-16 sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#25211f] sm:text-5xl">
              A day designed to feel warm, present, and close.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#5d5650]">
            From the first hello to this next chapter, every step has been
            shaped by faith, family, laughter, and steady love. This site will
            keep guests close to the moments that matter most.
          </p>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {details.map(([label, value]) => (
            <article key={label} className="glass-panel rounded-2xl p-6">
              <p className="section-kicker">{label}</p>
              <h3 className="mt-4 font-serif text-3xl text-[#25211f]">
                {value}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-[#2f4f46] p-6 text-white shadow-2xl shadow-[#2f4f46]/20 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d7e4dd]">
            Wedding Day
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {schedule.map(([time, event]) => (
              <div key={time} className="rounded-2xl bg-white/10 p-5">
                <p className="font-serif text-3xl">{time}</p>
                <p className="mt-3 text-sm text-white/75">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="px-5 pb-20 sm:px-8">
        <div className="glass-panel mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="section-kicker">RSVP</p>
            <h2 className="mt-4 font-serif text-4xl text-[#25211f]">
              We cannot wait to celebrate with you.
            </h2>
          </div>
          <a
            href="mailto:hello@example.com?subject=Wedding RSVP"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#9a6f4d] px-7 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#9a6f4d]/20 transition hover:-translate-y-0.5 hover:bg-[#7f593e]"
          >
            Send RSVP
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
