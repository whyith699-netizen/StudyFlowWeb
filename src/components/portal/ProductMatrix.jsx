import { motion, useReducedMotion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import MotionGroup from '../motion/MotionGroup'
import MotionSection from '../motion/MotionSection'
import { clarityFields, siteCopy } from '../../constants/data'
import { getRevealVariant } from '../../motion/variants'

export default function ProductMatrix() {
  const reduceMotion = useReducedMotion()

  return (
    <MotionSection id="clarity" className="px-4 py-16 md:px-6 md:py-24" variant="fade-up">
      <div className="mx-auto max-w-6xl">
        <motion.div variants={getRevealVariant('fade-up', reduceMotion)}>
          <SectionHeader
            eyebrow="Study System"
            title={siteCopy.sectionTitles.clarity}
            description="Every surface is designed to reduce friction: quick status checks, clear tasks, and an always-visible focus prompt."
            align="center"
          />
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
          <motion.article className="landing-card p-6 md:p-7" variants={getRevealVariant('slide-left', reduceMotion)}>
            <div className="rounded-[24px] border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Study agenda</p>
              <MotionGroup className="mt-5 grid gap-3" stagger={0.1}>
                {clarityFields.map((field) => (
                  <motion.div
                    key={field.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                    variants={getRevealVariant('scale-in', reduceMotion)}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{field.label}</p>
                    <p className="mt-2 text-sm font-medium text-slate-700">{field.value}</p>
                  </motion.div>
                ))}
              </MotionGroup>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(220px,1.1fr)]">
              <motion.div className="rounded-[26px] bg-slate-50 p-5" variants={getRevealVariant('scale-in', reduceMotion)}>
                <p className="text-sm font-semibold text-slate-500">Weekly completion</p>
                <p className="mt-3 font-['Sora'] text-5xl font-semibold tracking-[-0.05em] text-sky-700">84%</p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    className="h-full rounded-full bg-sky-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: '84%' }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: reduceMotion ? 0.4 : 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">Your plan is on track, with two focus sessions left for today.</p>
              </motion.div>

              <motion.div className="rounded-[26px] border border-slate-200 bg-white p-5" variants={getRevealVariant('scale-in', reduceMotion)}>
                <p className="text-sm font-semibold text-slate-500">Upcoming queue</p>
                <MotionGroup className="mt-4 grid gap-3" stagger={0.08}>
                  {['Review lecture slides', 'Submit chemistry quiz', 'Outline essay conclusion'].map((item) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                      variants={getRevealVariant('fade-up', reduceMotion)}
                    >
                      <span className="h-3 w-3 rounded-full bg-sky-500" aria-hidden="true" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </motion.div>
                  ))}
                </MotionGroup>
              </motion.div>
            </div>
          </motion.article>

          <motion.div className="grid gap-5" variants={getRevealVariant('slide-right', reduceMotion)}>
            <motion.article
              className="timer-panel"
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.012 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72">Focus timer</p>
              <p className="mt-5 font-['Sora'] text-6xl font-semibold tracking-[-0.06em]">25:00</p>
              <p className="mt-3 text-sm text-white/82">Stay centered on one meaningful session at a time.</p>
              <div className="mt-6 rounded-full bg-white/18 px-4 py-3 text-sm font-medium text-white/88">
                Next session: Statistics exercises
              </div>
            </motion.article>

            <motion.article className="landing-card glasses-card p-6 motion-card" variants={getRevealVariant('scale-in', reduceMotion)}>
              <p className="text-sm font-semibold text-slate-500">A cleaner desktop rhythm</p>
              <div className="glasses-illustration" aria-hidden="true">
                <span className="glasses-frame glasses-left" />
                <span className="glasses-bridge" />
                <span className="glasses-frame glasses-right" />
              </div>
              <p className="text-sm leading-7 text-slate-600">
                StudyFlow keeps your planner, timer, and reminders visible without turning the interface into visual noise.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  )
}
