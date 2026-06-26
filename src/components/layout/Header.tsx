import type { NavItem } from '../../data/wedding'

type HeaderProps = {
  navItems: NavItem[]
}

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-12 w-full items-center justify-between px-5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-stone-400 sm:px-8 lg:justify-end lg:gap-9">
        <a href="/" className="font-gothic text-xl normal-case text-white lg:hidden">
          G & L
        </a>

        <div className="flex items-center gap-6 sm:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
