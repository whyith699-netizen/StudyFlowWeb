import { useEffect, useRef } from 'react'

export default function Sparkles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sparkleCount = 100
    const colors = [
      'rgba(59, 130, 246, 1)',
      'rgba(96, 165, 250, 1)',
      'rgba(147, 197, 253, 1)',
    ]

    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = Math.random() * 100 + '%'
      sparkle.style.top = (50 + Math.random() * 50) + '%'
      sparkle.style.animationDelay = Math.random() * 6 + 's'

      const size = 2 + Math.random() * 4
      sparkle.style.width = size + 'px'
      sparkle.style.height = size + 'px'

      const color = colors[Math.floor(Math.random() * colors.length)]
      sparkle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`

      container.appendChild(sparkle)
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return <div className="sparkles-container" ref={containerRef} />
}
