import { motion, useReducedMotion } from 'framer-motion'
import MotionSection from './motion/MotionSection'

export default function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <MotionSection as="footer" className="px-4 pb-10 md:px-6" variant="fade-up" amount={0.1}>
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"
        whileHover={reduceMotion ? undefined : { opacity: 1 }}
      >
        <p>&copy; 2026 StudyFlow. Built for focused academic workflows.</p>
        <p>Extension, live web, and Android access in one place.</p>
      </motion.div>
    </MotionSection>
  )
}
