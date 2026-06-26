import cathedralBg from '../../assets/gothic-cathedral.png'
import { EnvelopeButton } from '../ui/EnvelopeButton'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pb-8 pt-16 text-center sm:px-6 sm:pb-10 sm:pt-20 lg:px-8"
    >
      <div className="absolute inset-0">
        <img
          src={cathedralBg}
          className="gothic-bg-drift h-full w-full object-cover opacity-70"
          alt=""
        />
        <div className="gothic-vignette absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,45,50,0.18),rgba(0,0,0,0.78)_72%)]" />
        <div className="absolute inset-0 bg-[#3a1720]/25 mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
        <svg
          className="-mt-3 mb-5 h-auto w-[min(78vw,420px)] text-[#EBCACA] drop-shadow-[0_4px_14px_rgba(0,0,0,0.7)] sm:-mt-2 sm:mb-8"
          viewBox="0 0 420 92"
          fill="none"
          aria-hidden="true"
          data-reveal
        >
          <path
            d="M13 30c39 0 65 10 89 28 20 15 42 21 69 7 15-8 24-22 20-35-3-10-16-13-24-6-8 8-4 23 8 21 8-2 12-9 9-16"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M407 30c-39 0-65 10-89 28-20 15-42 21-69 7-15-8-24-22-20-35 3-10 16-13 24-6 8 8 4 23-8 21-8-2-12-9-9-16"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M144 36c-20-18-45-9-46 9-1 17 24 19 28 4M276 36c20-18 45-9 46 9 1 17-24 19-28 4"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M210 24c10 14 25 22 42 24-17 4-30 13-42 27-12-14-25-23-42-27 17-2 32-10 42-24Z"
            fill="currentColor"
            opacity="0.75"
          />
          <path
            d="M210 13c6 9 12 15 21 20-10-1-17-5-21-12-4 7-11 11-21 12 9-5 15-11 21-20ZM210 79c-6-9-12-15-21-20 10 1 17 5 21 12 4-7 11-11 21-12-9 5-15 11-21 20Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="210" cy="46" r="5" fill="currentColor" />
          <path
            d="M118 15c11-12 30-8 34 7M302 15c-11-12-30-8-34 7M103 67c-14 2-26-4-33-15M317 67c14 2 26-4 33-15"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <p
          className="font-display text-[clamp(0.68rem,2.5vw,1rem)] font-bold uppercase tracking-[0.28em] text-stone-100 sm:tracking-[0.38em]"
          data-reveal
          data-reveal-delay="1"
        >
          Forever starts here
        </p>
        <h1
          className="mt-4 max-w-[11ch] font-gothic text-[clamp(3.4rem,13vw,6rem)] leading-[0.92] text-[#EBCACA] drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)] sm:mt-6 sm:max-w-none lg:text-8xl"
          data-reveal
          data-reveal-delay="2"
        >
          Gabriel and Lorraine
        </h1>

        <div data-reveal data-reveal-delay="3" className="w-full">
          <EnvelopeButton href="/invitation" />
        </div>

        <p
          className="mt-7 max-w-[22rem] font-display text-[clamp(0.78rem,3.2vw,1.125rem)] font-bold uppercase leading-7 tracking-[0.16em] text-white sm:mt-10 sm:max-w-md sm:tracking-[0.24em]"
          data-reveal
          data-reveal-delay="4"
        >
          Click to open your invitation... if you dare
        </p>
      </div>
    </section>
  )
}
