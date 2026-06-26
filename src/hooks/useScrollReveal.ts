import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!revealItems.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.2,
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])
}
