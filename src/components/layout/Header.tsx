import type { NavItem } from '../../data/wedding'

type HeaderProps = {
  navItems: NavItem[]
}

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <nav className="mx-auto flex min-h-12 w-full items-center justify-between gap-4 px-4 py-3 text-[0.64rem] font-bold uppercase tracking-[0.08em] text-stone-400 sm:px-8 sm:text-[0.68rem]">
        <a
          href="/"
          className="shrink-0 font-gothic text-xl normal-case text-[#EBCACA] sm:text-2xl"
        >
          <span className="sm:hidden">G & L</span>
          <span className="hidden sm:inline">Gabriel & Lorraine</span>
        </a>

        <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-8">
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
