import cathedralBg from './assets/gothic-cathedral.png'
import { useScrollReveal } from './hooks/useScrollReveal'

function Invitation() {
  useScrollReveal()

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black px-4 py-10 text-center text-white sm:px-6 sm:py-16">
      <img
        src={cathedralBg}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        alt=""
      />
      <div className="absolute inset-0 bg-black/72" />

      <section
        className="relative z-10 w-full max-w-3xl border border-white/15 bg-black/55 px-5 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:px-12 sm:py-12"
        data-reveal
      >
        <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#c9a159] sm:text-xs sm:tracking-[0.34em]">
          The invitation
        </p>
        <h1 className="mt-6 font-gothic text-[clamp(3.2rem,13vw,4.5rem)] leading-[0.95] text-[#EBCACA]">
          Gabriel and Lorraine
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-display text-sm leading-7 text-stone-200 sm:text-base sm:leading-8">
          Request the honour of your presence as they begin their forever under
          candlelight, stone arches, and vows kept sacred.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex min-h-11 max-w-full items-center justify-center border border-[#c9a159]/60 px-5 text-center font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#f3dfb0] transition hover:bg-[#c9a159] hover:text-black sm:px-6 sm:text-xs sm:tracking-[0.22em]"
        >
          Return Home
        </a>
      </section>
    </main>
  )
}

export default Invitation
