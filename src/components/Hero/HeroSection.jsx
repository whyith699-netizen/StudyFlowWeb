import { useRef, useCallback } from 'react'
import Globe from './Globe'
import Sparkles from './Sparkles'
import DraggableOrb from './DraggableOrb'
import DownloadBox from './DownloadBox'

export default function HeroSection() {
  const studyRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = studyRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.background = `radial-gradient(circle at ${x}px ${y}px, #1d4ed8 0%, #3b82f6 50%, #93c5fd 100%)`
    el.style.webkitBackgroundClip = 'text'
    el.style.backgroundClip = 'text'
    el.style.webkitTextFillColor = 'transparent'
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = studyRef.current
    if (!el) return
    el.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)'
    el.style.webkitBackgroundClip = 'text'
    el.style.backgroundClip = 'text'
    el.style.webkitTextFillColor = 'transparent'
  }, [])

  return (
    <section className="relative flex-grow flex flex-col items-center justify-center pt-24 pb-12 perspective-1000 overflow-hidden text-center min-h-screen">
      <Globe />
      <Sparkles />

      {/* Decorative Ambient Light */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] -z-10" />

      <DraggableOrb />

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center w-full">
        {/* Title */}
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-6 uppercase leading-[0.9]">
          <span className="block text-slate-500 opacity-90 text-[0.8em] font-normal tracking-normal lowercase font-syne mb-[-0.2em]">
            The New
          </span>
          <span
            ref={studyRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="text-gradient strong-drop-shadow inline-block cursor-default transition-transform duration-200 ease-out"
          >
            Study
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-400 inline-block random-rotate font-normal italic">
            Flow
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-light text-slate-500 mb-12 max-w-2xl mx-auto font-sans tracking-wide">
          <span className="text-slate-900 font-medium">Focus Like Never Before.</span>{' '}
          The ultimate distraction-free study companion.
        </h2>

        <DownloadBox />
      </div>
    </section>
  )
}
