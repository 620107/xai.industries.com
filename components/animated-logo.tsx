"use client"

import Image from "next/image"

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
  showGlow?: boolean
}

export function AnimatedLogo({ size = "md", className = "", showGlow = true }: AnimatedLogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, container: "w-8 h-8" },
    md: { width: 40, height: 40, container: "w-10 h-10" },
    lg: { width: 56, height: 56, container: "w-14 h-14" },
  }

  const { width, height, container } = sizes[size]

  return (
    <div className={`relative ${container} ${className}`}>
      {/* Glow effect behind logo */}
      {showGlow && (
        <div className="absolute inset-0 rounded-xl bg-[#00D4FF]/30 blur-lg animate-logo-glow" />
      )}
      
      {/* Logo container with animations */}
      <div className="relative w-full h-full rounded-xl overflow-hidden animate-logo-shine">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-logo-shimmer z-10 pointer-events-none" />
        
        {/* Energy pulse ring */}
        {showGlow && (
          <div className="absolute inset-0 rounded-xl border border-[#00D4FF]/50 animate-logo-pulse" />
        )}
        
        {/* Logo image */}
        <Image
          src="/xai-logo.jpg"
          alt="XAI Industries"
          width={width}
          height={height}
          className="w-full h-full object-cover rounded-xl"
          priority
        />
      </div>
      
      {/* Sparkle effects */}
      {showGlow && (
        <>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00D4FF] rounded-full animate-logo-sparkle opacity-0" />
          <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-logo-sparkle-delayed opacity-0" />
        </>
      )}
    </div>
  )
}

// Inline brand text logo (for navigation)
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      <AnimatedLogo size="md" />
      <span className="text-xl font-bold text-white">
        X<span className="text-[#00D4FF]">AI</span>
        <span className="text-white/80 font-medium ml-1">Industries</span>
      </span>
    </a>
  )
}
