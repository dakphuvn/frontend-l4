"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-30 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center text-white hover:bg-primary-600 transition-all duration-300 animate-fade-in"
          aria-label="Trở về đầu trang"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
}
