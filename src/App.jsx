import Navbar from './components/Navbar'
import HeroSection from './components/Hero/HeroSection'
import BentoGrid from './components/Features/BentoGrid'
import StickyScroll from './components/StickyScroll'
import InstallSection from './components/Installation/InstallSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-mesh text-slate-900 min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <StickyScroll />
      <InstallSection />
      <Footer />
    </div>
  )
}
