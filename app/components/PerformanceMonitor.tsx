"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log("LCP:", entry.startTime)
        }
      }).observe({ entryTypes: ["largest-contentful-paint"] })

      // First Input Delay
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log("FID:", entry.processingStart - entry.startTime)
        }
      }).observe({ entryTypes: ["first-input"] })

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let cumulativeScore = 0
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            cumulativeScore += entry.value
          }
        }
        console.log("CLS:", cumulativeScore)
      }).observe({ entryTypes: ["layout-shift"] })
    }
  }, [])

  return null
}
