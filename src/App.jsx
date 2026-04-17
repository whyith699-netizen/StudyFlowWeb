import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/portal/HeroSection'
import AboutSection from './components/portal/AboutSection'
import FeatureObservatory from './components/portal/FeatureObservatory'
import ProductMatrix from './components/portal/ProductMatrix'
import InstallHub from './components/portal/InstallHub'
import DownloadSection from './components/portal/DownloadSection'
import Footer from './components/Footer'

export default function App() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="page-motion-shell min-h-screen bg-page text-slate-950">
      <div className="page-ambient" aria-hidden="true">
        <motion.div
          className="page-ambient-orb page-ambient-orb-one"
          initial={{ opacity: 0, scale: 0.82 }}
          animate={
            reduceMotion
              ? { opacity: 0.78, scale: 1 }
              : {
                  opacity: [0.65, 0.9, 0.72],
                  scale: [1, 1.08, 0.98],
                  x: [0, 50, -18, 0],
                  y: [0, -42, 18, 0],
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
          className="page-ambient-orb page-ambient-orb-two"
          initial={{ opacity: 0, scale: 0.84 }}
          animate={
            reduceMotion
              ? { opacity: 0.66, scale: 1 }
              : {
                  opacity: [0.45, 0.72, 0.52],
                  scale: [1, 1.05, 1],
                  x: [0, -42, 10, 0],
                  y: [0, 32, -24, 0],
                }
          }
          transition={{
            duration: 21,
            ease: 'easeInOut',
            repeat: reduceMotion ? 0 : Infinity,
            repeatType: 'mirror',
          }}
        />
      </div>

      <div className="relative z-[1]">
        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroSection />
          <AboutSection />
          <FeatureObservatory />
          <ProductMatrix />
          <InstallHub />
          <DownloadSection />
        </motion.main>

        <Footer />
      </div>
    </div>
  )
}
