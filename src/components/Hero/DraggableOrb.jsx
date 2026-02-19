import { useRef, useCallback, useEffect } from 'react'

export default function DraggableOrb() {
  const orbRef = useRef(null)
  const stateRef = useRef({ isDragging: false, initialX: 0, initialY: 0, xOffset: 0, yOffset: 0 })

  const handleMouseDown = useCallback((e) => {
    const s = stateRef.current
    s.initialX = e.clientX - s.xOffset
    s.initialY = e.clientY - s.yOffset
    s.isDragging = true
    orbRef.current.style.cursor = 'grabbing'
    orbRef.current.style.transform = `translate(${s.xOffset}px, ${s.yOffset}px) scale(1.1)`
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const s = stateRef.current
      if (!s.isDragging) return
      e.preventDefault()
      const currentX = e.clientX - s.initialX
      const currentY = e.clientY - s.initialY
      s.xOffset = currentX
      s.yOffset = currentY
      orbRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.1)`
    }

    const handleMouseUp = () => {
      const s = stateRef.current
      if (!s.isDragging) return
      s.isDragging = false
      if (orbRef.current) {
        orbRef.current.style.cursor = 'grab'
        orbRef.current.style.transform = `translate(${s.xOffset}px, ${s.yOffset}px) scale(1)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div
      ref={orbRef}
      onMouseDown={handleMouseDown}
      className="absolute top-[15%] right-[15%] w-20 h-20 rounded-full cursor-grab z-50 touch-none"
      style={{
        background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
        boxShadow:
          'inset -10px -10px 20px rgba(0,0,0,0.1), inset 10px 10px 20px rgba(255,255,255,0.4), 0 20px 40px rgba(59,130,246,0.4)',
        transition: 'transform 0.1s',
      }}
    />
  )
}
