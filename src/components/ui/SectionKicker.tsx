type SectionKickerProps = {
  children: string
  className?: string
}

export function SectionKicker({ children, className = '' }: SectionKickerProps) {
  return <p className={`section-kicker ${className}`}>{children}</p>
}
