import { motion, useReducedMotion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import MotionGroup from '../motion/MotionGroup'
import MotionSection from '../motion/MotionSection'
import {
  androidInstallNotes,
  downloadArtifacts,
  extensionInstallSteps,
  platformCards,
  siteCopy,
} from '../../constants/data'
import { getRevealVariant } from '../../motion/variants'

function getLinkProps(item) {
  return item.action === 'download'
    ? { download: item.fileName }
    : { target: '_blank', rel: 'noreferrer' }
}

function PlatformIcon({ id }) {
  if (id === 'extension') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M7 5.5h10a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 17 18.5H7A1.5 1.5 0 0 1 5.5 17V7A1.5 1.5 0 0 1 7 5.5Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 9.5h6M9 12h6M9 14.5h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  if (id === 'android') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="7" y="4.5" width="10" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 7.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="1" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16h-9A2.5 2.5 0 0 1 5 13.5v-6Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 19h6M10 16v3M14 16v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function getButtonClass(id) {
  if (id === 'extension') {
    return 'inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700'
  }

  if (id === 'android') {
    return 'inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700'
  }

  return 'inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
}

export default function InstallHub() {
  const reduceMotion = useReducedMotion()
  const android = downloadArtifacts.android

  return (
    <MotionSection id="start" className="px-4 py-16 md:px-6 md:py-24" variant="fade-up">
      <div className="mx-auto max-w-6xl">
        <motion.div variants={getRevealVariant('fade-up', reduceMotion)}>
          <SectionHeader
            eyebrow="Platforms"
            title={siteCopy.sectionTitles.start}
            description="Choose the StudyFlow entry point that fits your workflow today. Extension, live web, and Android are all available from one place."
            align="center"
          />
        </motion.div>

        <MotionGroup className="mt-10 grid gap-5 lg:grid-cols-3" stagger={0.13}>
          {platformCards.map((card) => {
            const item = downloadArtifacts[card.id]
            const isPrimary = card.id === 'extension'

            return (
              <motion.article
                key={card.id}
                className="landing-card motion-card flex h-full flex-col p-6 text-center"
                variants={getRevealVariant('scale-in', reduceMotion)}
                whileHover={reduceMotion ? undefined : { y: -9, scale: 1.013 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${isPrimary ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-700'}`}>
                  <PlatformIcon id={card.id} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                <p className="mt-4 text-sm leading-6 text-slate-500">{item.helper}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {item.platform} | {item.version}
                </p>

                <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
                  <motion.a
                    href={item.href}
                    {...getLinkProps(item)}
                    className={`${getButtonClass(card.id)} cta-button`}
                    whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.buttonLabel}
                  </motion.a>
                </div>
              </motion.article>
            )
          })}
        </MotionGroup>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <motion.article className="landing-card p-6 md:p-7" variants={getRevealVariant('slide-left', reduceMotion)}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Extension Guide</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              How to install the extension
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              StudyFlow extension is distributed as a ZIP package. Extract it first, then load it as an unpacked extension in Chrome or Edge.
            </p>

            <MotionGroup as="ol" className="mt-6 grid gap-4" stagger={0.1}>
              {extensionInstallSteps.map((step, index) => (
                <motion.li
                  key={step.title}
                  className="flex gap-4 rounded-[24px] border border-slate-200 bg-slate-50 p-4"
                  variants={getRevealVariant('fade-up', reduceMotion)}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{step.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </MotionGroup>
          </motion.article>

          <motion.article className="landing-card p-6 md:p-7" variants={getRevealVariant('slide-right', reduceMotion)}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Mobile App</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              Android only for now
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The current mobile release is distributed only as an Android APK. This landing page no longer presents iOS as an available mobile download.
            </p>

            <MotionGroup className="mt-6 grid gap-3" stagger={0.1}>
              {androidInstallNotes.map((note) => (
                <motion.div
                  key={note}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600"
                  variants={getRevealVariant('fade-up', reduceMotion)}
                >
                  {note}
                </motion.div>
              ))}
            </MotionGroup>

            <motion.a
              href={android.href}
              {...getLinkProps(android)}
              className="cta-button mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {android.buttonLabel}
            </motion.a>
          </motion.article>
        </div>
      </div>
    </MotionSection>
  )
}
