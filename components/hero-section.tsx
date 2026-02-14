"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnergyStream } from "@/components/energy-stream"
import { HeroCard3D } from "@/components/hero-card-3d"
import { FadeIn, Parallax } from "@/components/scroll-animations"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#030712]">
        {/* Base gradient - industrial dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-transparent to-[#030712]" />
        
        {/* Radial glow - sky blue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00D4FF]/5 blur-[100px] animate-pulse-glow" />
        
        {/* Secondary glow */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[80px]" />
        
        {/* Industrial accent glow */}
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0ea5e9]/5 blur-[60px]" />
      </div>

      {/* Energy stream animation */}
      <EnergyStream />

      {/* X-Industries Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[300px] font-black text-[#00D4FF]/[0.02] whitespace-nowrap select-none"
          style={{ letterSpacing: '0.1em' }}
        >
          XAI-INDUSTRIES
        </div>
        <div 
          className="absolute top-1/4 left-0 text-[80px] font-black text-[#00D4FF]/[0.015] whitespace-nowrap select-none rotate-[-15deg]"
        >
          XAI-INDUSTRIES
        </div>
        <div 
          className="absolute bottom-1/4 right-0 text-[60px] font-black text-[#00D4FF]/[0.015] whitespace-nowrap select-none rotate-[15deg]"
        >
          XAI-INDUSTRIES
        </div>
      </div>

      {/* Grid pattern overlay - industrial style */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                <span className="text-[#00D4FF] text-sm font-medium">Future-Ready Systems</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
                <span className="text-white">Engineering the Future.</span>
                <br />
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#00E5FF] to-[#38bdf8] bg-clip-text text-transparent glow-text">
                  Scale your business with us. Let&#39;s talk about your goals.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mt-6 text-lg md:text-xl text-[#7dd3fc]/80 max-w-xl mx-auto lg:mx-0 text-pretty">
                Talk about your goals. We help businesses scale through AI automation, 
                intelligent agents, and managed services.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] text-[#030712] font-semibold text-lg px-8 py-6 hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] group"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00D4FF]/30 text-[#00D4FF] bg-transparent hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/50 font-semibold text-lg px-8 py-6 group"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Overview
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gradient-to-br from-[#00D4FF]/20 to-[#00E5FF]/20 flex items-center justify-center text-[#00D4FF] text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">500+ Industrial Partners</p>
                  <p className="text-[#7dd3fc]/60 text-sm">powering the future of industry</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: 3D Card */}
          <Parallax speed={0.2} className="flex justify-center lg:justify-end">
            <FadeIn delay={300} direction="left">
              <HeroCard3D />
            </FadeIn>
          </Parallax>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#7dd3fc]/60 text-sm">Discover More</span>
        <div className="w-6 h-10 rounded-full border-2 border-[#00D4FF]/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-[#00D4FF] animate-energy-flow" />
        </div>
      </div>
    </section>
  )
}
