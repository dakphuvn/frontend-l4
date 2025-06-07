"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  fallback?: React.ReactNode
}

export default function LazySection({
  children,
  threshold = 0.1,
  rootMargin = "50px",
  fallback = <div className="h-64 bg-gray-100 animate-pulse" />,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return <div ref={ref}>{isVisible ? children : fallback}</div>
}
