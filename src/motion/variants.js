const easeOutExpo = [0.16, 1, 0.3, 1]

export const motionTokens = {
  ease: easeOutExpo,
  duration: {
    hero: 0.95,
    section: 0.82,
    card: 0.64,
    quick: 0.34,
  },
  viewport: {
    once: true,
    amount: 0.24,
  },
}

function reducedVariant() {
  return {
    hidden: { opacity: 0 },
    visible: (custom = {}) => ({
      opacity: 1,
      transition: {
        duration: motionTokens.duration.quick,
        ease: motionTokens.ease,
        delay: custom.delay ?? 0,
      },
    }),
  }
}

export function getRevealVariant(name = 'fade-up', reduced = false) {
  if (reduced) {
    return reducedVariant()
  }

  const map = {
    'fade-up': {
      hidden: { opacity: 0, y: 52 },
      visible: (custom = {}) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: motionTokens.duration.section,
          ease: motionTokens.ease,
          delay: custom.delay ?? 0,
        },
      }),
    },
    'scale-in': {
      hidden: { opacity: 0, scale: 0.92, y: 30 },
      visible: (custom = {}) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: motionTokens.duration.card,
          ease: motionTokens.ease,
          delay: custom.delay ?? 0,
        },
      }),
    },
    'slide-left': {
      hidden: { opacity: 0, x: -70, y: 16 },
      visible: (custom = {}) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: motionTokens.duration.section,
          ease: motionTokens.ease,
          delay: custom.delay ?? 0,
        },
      }),
    },
    'slide-right': {
      hidden: { opacity: 0, x: 70, y: 16 },
      visible: (custom = {}) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: motionTokens.duration.section,
          ease: motionTokens.ease,
          delay: custom.delay ?? 0,
        },
      }),
    },
    'cta-pop': {
      hidden: { opacity: 0, scale: 0.88, y: 26 },
      visible: (custom = {}) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: motionTokens.duration.card,
          ease: motionTokens.ease,
          delay: custom.delay ?? 0,
        },
      }),
    },
    'orb-float': {
      hidden: { opacity: 0, scale: 0.9 },
      visible: (custom = {}) => ({
        opacity: custom.opacity ?? 1,
        scale: 1,
        transition: {
          duration: motionTokens.duration.hero,
          ease: motionTokens.ease,
          delay: custom.delay ?? 0,
        },
      }),
    },
  }

  return map[name] ?? map['fade-up']
}

export function getStaggerContainer(reduced = false) {
  return {
    hidden: {},
    visible: (custom = {}) => ({
      transition: reduced
        ? {}
        : {
            staggerChildren: custom.stagger ?? 0.12,
            delayChildren: custom.delayChildren ?? 0,
          },
    }),
  }
}

