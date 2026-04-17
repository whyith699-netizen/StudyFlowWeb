import { motion, useReducedMotion } from 'framer-motion'
import { downloadArtifacts, siteCopy } from '../../constants/data'
import MotionSection from '../motion/MotionSection'
import { getRevealVariant } from '../../motion/variants'

function getLinkProps(item) {
  return item.action === 'download'
    ? { download: item.fileName }
    : { target: '_blank', rel: 'noreferrer' }
}

export default function DownloadSection() {
  const reduceMotion = useReducedMotion()
  const web = downloadArtifacts.web

  return (
    <MotionSection className="px-4 pb-10 pt-8 md:px-6 md:pb-14 md:pt-10" variant="scale-in">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="cta-banner cta-banner-animated"
          variants={getRevealVariant('scale-in', reduceMotion)}
          whileHover={reduceMotion ? undefined : { y: -6, scale: 1.008 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="cta-banner-sheen"
            aria-hidden="true"
            initial={{ x: '-120%', opacity: 0 }}
            whileInView={reduceMotion ? { opacity: 0.18, x: '0%' } : { x: ['-120%', '160%'], opacity: [0, 0.22, 0] }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: reduceMotion ? 0.5 : 2.8, ease: 'easeInOut', delay: 0.25 }}
          />
          <motion.p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70" variants={getRevealVariant('cta-pop', reduceMotion)}>
            StudyFlow
          </motion.p>
          <motion.h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl" variants={getRevealVariant('fade-up', reduceMotion)}>
            {siteCopy.sectionTitles.cta}
          </motion.h2>
          <motion.p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80 md:text-lg" variants={getRevealVariant('fade-up', reduceMotion)}>
            {siteCopy.bottomCtaDescription}
          </motion.p>

          <motion.a
            href={web.href}
            {...getLinkProps(web)}
            className="cta-button mt-8 inline-flex cta-banner-button"
            variants={getRevealVariant('cta-pop', reduceMotion)}
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {web.buttonLabel}
          </motion.a>
        </motion.div>
      </div>
    </MotionSection>
  )
}
