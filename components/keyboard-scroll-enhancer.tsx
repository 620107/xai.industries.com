"use client"

import { useEffect } from "react"

// ============================================
// KEYBOARD SCROLL SPEED ENHANCER
// ============================================
// Improves arrow key scroll speed for better UX
// Increase SCROLL_AMOUNT for faster scrolling
// ============================================

const SCROLL_AMOUNT = 150 // pixels per arrow key press (increased for faster scrolling)

export function KeyboardScrollEnhancer() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle arrow keys when not in an input field
      const target = e.target as HTMLElement
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return
      }

      // Handle arrow key scrolling with improved speed
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          window.scrollBy({ top: SCROLL_AMOUNT, behavior: "auto" })
          break
        case "ArrowUp":
          e.preventDefault()
          window.scrollBy({ top: -SCROLL_AMOUNT, behavior: "auto" })
          break
        case "PageDown":
          e.preventDefault()
          window.scrollBy({ top: window.innerHeight * 0.8, behavior: "auto" })
          break
        case "PageUp":
          e.preventDefault()
          window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "auto" })
          break
        case "Home":
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
          break
        case "End":
          e.preventDefault()
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return null // This component doesn't render anything
}
