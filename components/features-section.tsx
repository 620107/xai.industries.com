"use client"

import { useState } from "react"
import { Cpu, Shield, Zap, BarChart3 } from "lucide-react"
import { FadeIn, StaggerChildren, StaggerChild } from "@/components/scroll-animations"

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Automation",
    description: "Next-generation machine learning algorithms that optimize industrial processes in real-time, reducing downtime by up to 40%.",
    gradient: "from-[#00D4FF] to-[#00E5FF]",
  },
  {
    icon: BarChart3,
    title: "Smart Industrial Analytics",
    description: "Comprehensive data insights across your entire operation. Predict maintenance needs and optimize resource allocation.",
    gradient: "from-[#00E5FF] to-[#38bdf8]",
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Military-grade encryption and ISO 27001 certified security protocols protecting your critical industrial systems 24/7.",
    gradient: "from-[#38bdf8] to-[#00D4FF]",
  },
  {
    icon: Zap,
    title: "Future-Ready Engineering",
    description: "Modular, scalable architecture designed to grow with your operation. Seamless integration with existing industrial equipment.",
    gradient: "from-[#00D4FF] to-[#0ea5e9]",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = feature.icon

  return (
    <div
      className="group relative p-6 rounded-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? "linear-gradient(135deg, rgba(0, 15, 30, 0.8) 0%, rgba(10, 22, 40, 0.6) 100%)"
          : "rgba(0, 15, 30, 0.4)",
        border: isHovered ? "1px solid rgba(0, 212, 255, 0.3)" : "1px solid rgba(0, 212, 255, 0.1)",
        boxShadow: isHovered
          ? "0 20px 40px -15px rgba(0, 212, 255, 0.2), inset 0 0 30px rgba(0, 212, 255, 0.05)"
          : "none",
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
        style={{
          boxShadow: isHovered ? "0 10px 30px -5px rgba(0, 212, 255, 0.4)" : "none",
        }}
      >
        <Icon className="w-7 h-7 text-[#030712]" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
        {feature.title}
      </h3>
      <p className="text-[#7dd3fc]/70 leading-relaxed">
        {feature.description}
      </p>

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent)`,
          backgroundSize: "200% 100%",
          animation: isHovered ? "shimmer 2s linear infinite" : "none",
        }}
      />
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-[#00D4FF]/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-[#00D4FF] text-sm font-semibold tracking-wider uppercase mb-4">
            Industrial Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Technology Built for{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] bg-clip-text text-transparent">
              Industrial Scale
            </span>
          </h2>
          <p className="text-[#7dd3fc]/70 text-lg max-w-2xl mx-auto">
            Enterprise-grade solutions that transform manufacturing operations with intelligent automation and real-time analytics
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={100}>
          {features.map((feature, index) => (
            <StaggerChild key={feature.title}>
              <FeatureCard feature={feature} index={index} />
            </StaggerChild>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
