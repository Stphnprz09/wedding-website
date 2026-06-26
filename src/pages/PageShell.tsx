import { useScrollReveal } from '../hooks/useScrollReveal'

type PageShellProps = {
  eyebrow: string
  title: string
  children: string
}

export function PageShell({ eyebrow, title, children }: PageShellProps) {
  useScrollReveal()

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black px-4 py-24 text-center text-white sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,22,35,0.32),transparent_32%),linear-gradient(135deg,#080607,#161111,#030303)]" />
      <section
        className="relative z-10 w-full max-w-3xl border border-[#EBCACA]/20 bg-black/60 px-5 py-12 shadow-[0_24px_90px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:px-12"
        data-reveal
      >
        <p className="font-display text-xs font-bold uppercase tracking-[0.34em] text-[#c9a159]">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-gothic text-[clamp(3.2rem,12vw,5.5rem)] leading-none text-[#EBCACA]">
          {title}
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-display text-sm leading-7 text-stone-200 sm:text-base sm:leading-8">
          {children}
        </p>
        <a
          href="/invitation"
          className="mt-10 inline-flex min-h-11 items-center justify-center border border-[#c9a159]/60 px-6 font-display text-xs font-bold uppercase tracking-[0.22em] text-[#f3dfb0] transition hover:bg-[#c9a159] hover:text-black"
        >
          Back to Invitation
        </a>
      </section>
    </main>
  )
}
