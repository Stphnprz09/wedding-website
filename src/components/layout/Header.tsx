import type { NavItem } from '../../data/wedding'

type HeaderProps = {
  activeSection: string
  navItems: NavItem[]
}

export function Header({ activeSection, navItems }: HeaderProps) {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 text-sm font-semibold text-[#4d4641] sm:px-8">
        <a href="#home" className="font-serif text-2xl text-[#2f2c2a]">
          S & H
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems
            .filter((item) => item.id !== 'home')
            .map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition hover:text-[#9a6f4d] ${
                  activeSection === item.id ? 'text-[#9a6f4d]' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
        </div>
      </nav>
    </header>
  )
}
