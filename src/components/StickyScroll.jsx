import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stickyScrollItems } from '../constants/data'

function ScrollText({ item, onVisible }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(item.image)
        }
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [item.image, onVisible])

  return (
    <div ref={ref} className="feature-text opacity-40 transition-opacity duration-500" data-active="false">
      <h3 className="text-5xl font-bold mb-6 text-slate-900">{item.title}</h3>
      <p className="text-2xl text-slate-500 leading-relaxed">{item.description}</p>
    </div>
  )
}

export default function StickyScroll() {
  const [currentImage, setCurrentImage] = useState(stickyScrollItems[0].image)
  const [fading, setFading] = useState(false)
  const imageRef = useScrollReveal()

  const handleVisible = (image) => {
    if (image === currentImage) return
    setFading(true)
    setTimeout(() => {
      setCurrentImage(image)
      setFading(false)
    }, 200)
  }

  return (
    <section className="min-h-screen bg-slate-100 w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Sticky Image */}
        <div
          ref={imageRef}
          className="hidden md:block h-[600px] sticky top-32 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl reveal bg-white"
        >
          <img
            src={currentImage}
            alt="Feature Preview"
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            style={{ opacity: fading ? 0 : 1 }}
          />
        </div>

        {/* Scrolling Text */}
        <div className="flex flex-col gap-[80vh] py-[20vh]">
          {stickyScrollItems.map((item) => (
            <ScrollText key={item.title} item={item} onVisible={handleVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
