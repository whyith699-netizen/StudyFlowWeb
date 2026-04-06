import Navbar from './components/Navbar'
import HeroSection from './components/portal/HeroSection'
import AboutSection from './components/portal/AboutSection'
import FeatureObservatory from './components/portal/FeatureObservatory'
import ProductMatrix from './components/portal/ProductMatrix'
import InstallHub from './components/portal/InstallHub'
import DownloadSection from './components/portal/DownloadSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-page text-slate-950">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <FeatureObservatory />
        <ProductMatrix />
        <InstallHub />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  )
}
