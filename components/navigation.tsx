"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/animated-logo"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: "Solutions" },
    { href: "#workflow", label: "Technology" },
    { href: "#testimonials", label: "Partners" },
    { href: "#certificates", label: "Certifications" },
    { href: "#faq", label: "Support" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-[#00D4FF]/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <AnimatedLogo size="md" />
            <span className="text-xl font-bold text-white transition-all group-hover:text-[#00D4FF]/90">
              X<span className="text-[#00D4FF]">AI</span>
              <span className="text-white/80 font-medium ml-1">Industries</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#7dd3fc] hover:text-[#00D4FF] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-[#7dd3fc] hover:text-[#00D4FF] hover:bg-[#00D4FF]/10"
              asChild
            >
              <a href="https://wa.me/919335624540" target="_blank" rel="noopener noreferrer">
                Contact Sales
              </a>
            </Button>
            <Button className="bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] text-[#030712] font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,212,255,0.3)]" asChild>
              <a href="mailto:mrasr620107@gmail.com">
                Request Demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#00D4FF]/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#7dd3fc] hover:text-[#00D4FF] transition-colors text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  variant="ghost"
                  className="text-[#7dd3fc] hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 w-full"
                  asChild
                >
                  <a href="https://wa.me/919335624540" target="_blank" rel="noopener noreferrer">
                    Contact Sales
                  </a>
                </Button>
                <Button className="bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] text-[#030712] font-semibold w-full" asChild>
                  <a href="mailto:mrasr620107@gmail.com">
                    Request Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
