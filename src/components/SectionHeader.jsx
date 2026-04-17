import { motion, useReducedMotion } from 'framer-motion'
import { getRevealVariant } from '../motion/variants'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const reduceMotion = useReducedMotion()
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <motion.p className="section-eyebrow" variants={getRevealVariant('cta-pop', reduceMotion)}>
          <span className="section-eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2 className="section-title" variants={getRevealVariant('fade-up', reduceMotion)}>
        {title}
      </motion.h2>
      {description ? (
        <motion.p className="section-description" variants={getRevealVariant('fade-up', reduceMotion)}>
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}
