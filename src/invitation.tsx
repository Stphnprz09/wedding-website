import cathedralBg from './assets/gothic-cathedral.png'
import { useScrollReveal } from './hooks/useScrollReveal'

function Invitation() {
  useScrollReveal()

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 py-16 text-center text-white">
      <img
        src={cathedralBg}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        alt=""
      />
      <div className="absolute inset-0 bg-black/72" />

      <section className="relative z-10 max-w-3xl border border-white/15 bg-black/55 px-6 py-12 shadow-[0_24px_90px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:px-12" data-reveal>
        <p className="font-display text-xs font-bold uppercase tracking-[0.34em] text-[#c9a159]">
          The invitation
        </p>
        <h1 className="mt-6 font-gothic text-6xl leading-none sm:text-7xl">
          Gabriele and Lorraine
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-display text-base leading-8 text-stone-200">
          Request the honour of your presence as they begin their forever under
          candlelight, stone arches, and vows kept sacred.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex min-h-11 items-center justify-center border border-[#c9a159]/60 px-6 font-display text-xs font-bold uppercase tracking-[0.22em] text-[#f3dfb0] transition hover:bg-[#c9a159] hover:text-black"
        >
          Return Home
        </a>
      </section>
    </main>
  )
}

export default Invitation
