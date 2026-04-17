import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { downloadArtifacts, siteCopy } from '../../constants/data'
import { getRevealVariant, getStaggerContainer } from '../../motion/variants'

function getLinkProps(item) {
  return item.action === 'download'
    ? { download: item.fileName }
    : { target: '_blank', rel: 'noreferrer' }
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M7.5 5.833 14.167 10 7.5 14.167V5.833Z" fill="currentColor" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M10 4.167v7.5m0 0 3.333-3.333M10 11.667 6.667 8.334M4.167 15.833h11.666"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HeroAction({ item, className, icon, reduceMotion }) {
  return (
    <motion.a
      href={item.href}
      {...getLinkProps(item)}
      className={`${className} cta-button`}
      variants={getRevealVariant('cta-pop', reduceMotion)}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985, y: -1 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="cta-icon inline-flex items-center justify-center">
        {icon}
      </span>
      <span>{item.buttonLabel}</span>
    </motion.a>
  )
}

export default function HeroSection() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const primary = downloadArtifacts.extension
  const secondary = downloadArtifacts.web
  const android = downloadArtifacts.android
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -110])
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120])
  const meshY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80])
  const meshRotate = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 10])

  return (
    <section ref={sectionRef} id="home" className="hero-shell px-4 pb-18 pt-18 md:px-6 md:pb-24 md:pt-24">
      <div className="hero-backdrop" aria-hidden="true">
        <motion.div
          className="hero-orb hero-orb-one"
          style={{ y: orbOneY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            reduceMotion
              ? { opacity: 0.9, scale: 1 }
              : {
                  opacity: [0.66, 0.92, 0.74],
                  scale: [1, 1.08, 0.98],
                  x: [0, 32, -12, 0],
                  y: [0, -24, 16, 0],
                }
          }
          transition={{
            duration: 16,
            ease: 'easeInOut',
            repeat: reduceMotion ? 0 : Infinity,
            repeatType: 'mirror',
          }}
        />
        <motion.div
          className="hero-orb hero-orb-two"
          style={{ y: orbTwoY }}
          initial={{ opacity: 0, scale: 0.84 }}
          animate={
            reduceMotion
              ? { opacity: 0.74, scale: 1 }
              : {
                  opacity: [0.48, 0.76, 0.56],
                  scale: [1, 1.04, 1],
                  x: [0, -44, 18, 0],
                  y: [0, 24, -16, 0],
                }
          }
          transition={{
            duration: 18,
            ease: 'easeInOut',
            repeat: reduceMotion ? 0 : Infinity,
            repeatType: 'mirror',
          }}
        />
        <motion.div
          className="hero-mesh"
          style={{ y: meshY, rotate: meshRotate }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <motion.div
        className="hero-content mx-auto max-w-5xl text-center"
        variants={getStaggerContainer(reduceMotion)}
        initial="hidden"
        animate="visible"
        custom={{ stagger: 0.12, delayChildren: 0.08 }}
      >
        <motion.p className="hero-badge" variants={getRevealVariant('cta-pop', reduceMotion)}>
          {siteCopy.badge}
        </motion.p>
        <motion.h1 className="hero-title" variants={getRevealVariant('fade-up', reduceMotion)}>
          {siteCopy.heroTitle}
        </motion.h1>
        <motion.p className="hero-subtitle" variants={getRevealVariant('fade-up', reduceMotion)}>
          {siteCopy.heroSubtitle}
        </motion.p>
        <motion.p className="hero-support" variants={getRevealVariant('fade-up', reduceMotion)}>
          {siteCopy.heroSupport}
        </motion.p>

        <motion.div className="hero-actions" variants={getRevealVariant('fade-up', reduceMotion)}>
          <HeroAction item={primary} className="button-primary" icon={<DownloadIcon />} reduceMotion={reduceMotion} />
          <HeroAction item={secondary} className="button-secondary" icon={<PlayIcon />} reduceMotion={reduceMotion} />
          <HeroAction item={android} className="button-android" icon={<DownloadIcon />} reduceMotion={reduceMotion} />
        </motion.div>
      </motion.div>
    </section>
  )
}
