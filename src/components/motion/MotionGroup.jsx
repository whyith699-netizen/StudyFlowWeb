import { motion, useReducedMotion } from 'framer-motion'
import { getStaggerContainer } from '../../motion/variants'

export default function MotionGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  once = true,
  amount = 0.2,
  as = 'div',
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getStaggerContainer(reduceMotion)}
      custom={{ stagger, delayChildren }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
