import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { downloadArtifacts, navItems } from '../constants/data'

function getLinkProps(item) {
  return item.action === 'download'
    ? { download: item.fileName }
    : { target: '_blank', rel: 'noreferrer' }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const reduceMotion = useReducedMotion()
  const extension = downloadArtifacts.extension
  const brandLogo = `${import.meta.env.BASE_URL}assets/studyflow-brand-logo.png`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 pt-4 md:px-6"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.nav
          className={`nav-shell ${isScrolled ? 'nav-shell-scrolled' : ''}`}
          animate={reduceMotion ? { opacity: 1 } : { scale: isScrolled ? 0.985 : 1, y: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#home" className="flex items-center gap-3 text-slate-950">
            <img src={brandLogo} alt="StudyFlow logo" className="nav-logo-mark" />
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
                <motion.a
                  href={item.href}
                  className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>

          <motion.a
            href={extension.href}
            {...getLinkProps(extension)}
            className="nav-cta"
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {extension.buttonLabel}
          </motion.a>
        </motion.nav>
      </div>
    </motion.header>
  )
}
