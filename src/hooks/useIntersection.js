import { useEffect, useRef, useState } from 'react'

export function useIntersection(options = {}) {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
        ...options,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isIntersecting]
}
