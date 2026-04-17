import { motion, useReducedMotion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import MotionGroup from '../motion/MotionGroup'
import MotionSection from '../motion/MotionSection'
import { siteCopy, workspaceHighlights } from '../../constants/data'
import { getRevealVariant } from '../../motion/variants'

export default function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <MotionSection id="about" className="px-4 py-16 md:px-6 md:py-24" variant="fade-up">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)] lg:items-center">
        <motion.div variants={getRevealVariant('slide-left', reduceMotion)}>
          <SectionHeader
            eyebrow="Integrated Workspace"
            title={siteCopy.sectionTitles.workspace}
            description="StudyFlow brings together the structure of a planner, the momentum of a focus timer, and the clarity of a central academic dashboard."
          />

          <MotionGroup className="mt-8 grid gap-4" stagger={0.14}>
            {workspaceHighlights.map((item) => (
              <motion.article
                key={item.title}
                className="feature-note motion-card"
                variants={getRevealVariant('scale-in', reduceMotion)}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="feature-note-icon" aria-hidden="true">
                  <span />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </MotionGroup>
        </motion.div>

        <motion.div className="workspace-preview" variants={getRevealVariant('slide-right', reduceMotion)}>
          <motion.div
            className="workspace-board"
            whileHover={reduceMotion ? undefined : { y: -8, rotate: -1.2, scale: 1.015 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="desk-laptop" />
            <div className="desk-phone" />
            <div className="desk-cup" />
            <div className="desk-notebook" />
            <div className="desk-pen" />
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
