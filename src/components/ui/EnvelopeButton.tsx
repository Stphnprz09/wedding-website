type EnvelopeButtonProps = {
  href: string
}

export function EnvelopeButton({ href }: EnvelopeButtonProps) {
  return (
    <a
      href={href}
      className="envelope-float group relative mx-auto mt-9 block h-[210px] w-full max-w-[440px] outline-none transition duration-500 hover:scale-[1.015] focus-visible:scale-[1.015] sm:h-[300px] sm:max-w-[560px]"
      aria-label="Open invitation"
    >
      <span className="absolute inset-0 bg-[#1c080d] shadow-[0_28px_70px_rgba(0,0,0,0.65)] transition duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_38px_90px_rgba(0,0,0,0.82)] group-focus-visible:-translate-y-2" />
      <span className="absolute inset-x-0 top-0 h-[56%] origin-top bg-[#2a0d14] shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)] transition duration-700 ease-out [clip-path:polygon(0_0,100%_0,79%_50%,50%_83%,21%_50%)] group-hover:-translate-y-1 group-hover:brightness-125 group-focus-visible:-translate-y-1" />
      <span className="absolute bottom-0 left-0 h-[64%] w-[55%] bg-[#210910] [clip-path:polygon(0_0,100%_100%,0_100%)]" />
      <span className="absolute bottom-0 right-0 h-[64%] w-[55%] bg-[#230a11] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      <span className="absolute left-1/2 top-[58%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a159]/70 bg-[radial-gradient(circle_at_35%_30%,#e0b86a,#7a4a22_44%,#25130d_72%)] shadow-[0_10px_28px_rgba(0,0,0,0.65)] transition duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_0_34px_rgba(201,161,89,0.42)] group-focus-visible:scale-110 sm:h-20 sm:w-20">
        <span className="absolute inset-3 rounded-full border border-[#f0d088]/60" />
        <span className="absolute inset-0 flex items-center justify-center font-gothic text-3xl text-[#1b0b08] sm:text-4xl">
          GL
        </span>
      </span>
    </a>
  )
}
