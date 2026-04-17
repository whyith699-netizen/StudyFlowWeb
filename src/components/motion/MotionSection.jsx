import { motion, useReducedMotion } from 'framer-motion'
import { getRevealVariant, motionTokens } from '../../motion/variants'

export default function MotionSection({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  once = true,
  as = 'section',
  amount = motionTokens.viewport.amount,
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.section

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getRevealVariant(variant, reduceMotion)}
      custom={{ delay }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
