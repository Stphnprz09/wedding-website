import blackSilkBg from './assets/black-silk-bg.png'
import { locationPlaceholder, weddingDate } from './data/wedding'
import { useScrollReveal } from './hooks/useScrollReveal'

const invitationLinks = [
  {
    href: '/details',
    label: 'Details',
    description: 'Ceremony, reception, dress code, and guest notes.',
  },
  {
    href: '/our-story',
    label: 'Our Story',
    description: 'A quiet place for the story behind the vows.',
  },
  {
    href: '/rsvp',
    label: 'RSVP',
    description: 'Let us know if you will be joining the celebration.',
  },
]

function Invitation() {
  useScrollReveal()

  return (
    <main className="relative min-h-svh overflow-hidden bg-[#050405] px-4 py-24 text-white sm:px-6 lg:px-8">
      <img
        src={blackSilkBg}
        className="fixed inset-0 h-full w-full object-cover opacity-80"
        alt=""
      />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(235,202,202,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.38),rgba(0,0,0,0.86))]" />

      <section
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        data-reveal
      >
        <div className="border border-[#EBCACA]/18 bg-black/58 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.62)] backdrop-blur-md sm:p-8 lg:p-10">
          <p className="font-display text-xs font-bold uppercase tracking-[0.34em] text-[#c9a159]">
            The Wedding Invitation
          </p>
          <h1 className="mt-6 font-gothic text-[clamp(4rem,13vw,8rem)] leading-[0.9] text-[#EBCACA]">
            Gabriel
            <span className="block text-[0.55em] leading-none text-white/70">
              and
            </span>
            Lorraine
          </h1>
          <p className="mt-8 max-w-xl font-display text-sm leading-7 text-stone-200 sm:text-base sm:leading-8">
            With reverence and joy, we invite you to witness the beginning of
            our forever.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="border border-[#EBCACA]/15 bg-[#12080b]/78 p-5">
              <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#c9a159]">
                Date
              </p>
              <p className="mt-3 font-gothic text-4xl leading-none text-[#EBCACA] sm:text-5xl">
                {weddingDate}
              </p>
            </div>
            <div className="border border-[#EBCACA]/15 bg-[#12080b]/78 p-5">
              <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#c9a159]">
                Location
              </p>
              <p className="mt-4 font-display text-sm font-bold uppercase leading-6 tracking-[0.12em] text-stone-100">
                {locationPlaceholder}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-[#EBCACA]/18 bg-[#10090b] shadow-[0_28px_90px_rgba(0,0,0,0.58)]">
            <div className="absolute inset-4 border border-[#c9a159]/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(235,202,202,0.16),transparent_22%),linear-gradient(145deg,#191112,#050505_64%)]" />
            <div className="absolute inset-x-8 top-10 h-1/2 rounded-t-full border border-[#c9a159]/30 bg-black/25" />
            <div className="relative z-10 flex h-full items-center justify-center px-10 text-center">
              <p className="max-w-xs font-display text-xs font-bold uppercase leading-6 tracking-[0.22em] text-[#EBCACA]/80">
                Couple image placeholder
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {invitationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group border border-[#EBCACA]/16 bg-black/62 p-5 text-left shadow-[0_18px_48px_rgba(0,0,0,0.42)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#EBCACA]/45 hover:bg-[#16090d]/82"
              >
                <span className="font-gothic text-4xl leading-none text-[#EBCACA]">
                  {link.label}
                </span>
                <span className="mt-4 block font-display text-[0.68rem] font-bold uppercase leading-5 tracking-[0.14em] text-stone-300">
                  {link.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Invitation
