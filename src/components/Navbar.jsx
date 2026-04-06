import { downloadArtifacts, navItems } from '../constants/data'

function getLinkProps(item) {
  return item.action === 'download'
    ? { download: item.fileName }
    : { target: '_blank', rel: 'noreferrer' }
}

export default function Navbar() {
  const extension = downloadArtifacts.extension

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <nav className="nav-shell">
          <a href="#home" className="flex items-center gap-3 text-slate-950">
            <span className="nav-logo-mark">S</span>
            <span className="leading-none">
              <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-700">
                StudyFlow
              </span>
              <span className="mt-1 block text-sm text-slate-500">Academic workspace</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm font-medium text-slate-500 transition hover:text-slate-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href={extension.href} {...getLinkProps(extension)} className="nav-cta">
            {extension.buttonLabel}
          </a>
        </nav>
      </div>
    </header>
  )
}
