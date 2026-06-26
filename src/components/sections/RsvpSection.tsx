import { rsvpEmail, rsvpSubject } from '../../config/contact'
import { SectionKicker } from '../ui/SectionKicker'

export function RsvpSection() {
  const rsvpHref = `mailto:${rsvpEmail}?subject=${encodeURIComponent(rsvpSubject)}`

  return (
    <section id="rsvp" className="relative z-10 px-5 pb-20 sm:px-8">
      <div className="glass-panel mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:p-10 lg:flex-row lg:items-center">
        <div>
          <SectionKicker>RSVP</SectionKicker>
          <h2 className="mt-4 font-serif text-4xl text-[#25211f]">
            We cannot wait to celebrate with you.
          </h2>
        </div>
        <a
          href={rsvpHref}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#9a6f4d] px-7 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#9a6f4d]/20 transition hover:-translate-y-0.5 hover:bg-[#7f593e]"
        >
          Send RSVP
        </a>
      </div>
    </section>
  )
}
