export function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-[#e8b9b1]/30 blur-3xl" />
      <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-[#b8d2c3]/35 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 h-56 w-56 rounded-full bg-[#d8c0a5]/25 blur-3xl" />
    </div>
  )
}
