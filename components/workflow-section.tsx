"use client"

import { useEffect, useRef, useState } from "react"
import { FadeIn } from "@/components/scroll-animations"
import { Database, Cpu, Server, Network, Gauge, Bot } from "lucide-react"

const nodes = [
  { id: 1, icon: Database, label: "Data Input", x: 15, y: 30 },
  { id: 2, icon: Server, label: "Processing", x: 15, y: 70 },
  { id: 3, icon: Cpu, label: "X-Core AI", x: 50, y: 50, isCenter: true },
  { id: 4, icon: Bot, label: "Automation", x: 85, y: 30 },
  { id: 5, icon: Gauge, label: "Analytics", x: 85, y: 70 },
]

const connections = [
  { from: 1, to: 3 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 3, to: 5 },
]

export function WorkflowSection() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById("workflow")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const animate = () => {
      setAnimationProgress((prev) => (prev + 0.5) % 100)
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [isVisible])

  const getNodePosition = (nodeId: number) => {
    const node = nodes.find((n) => n.id === nodeId)
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 }
  }

  return (
    <section id="workflow" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #00D4FF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-[#00D4FF] text-sm font-semibold tracking-wider uppercase mb-4">
            Technology Architecture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Built for Industrial Scale.{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] bg-clip-text text-transparent">
              Designed for the Future.
            </span>
          </h2>
          <p className="text-[#7dd3fc]/70 text-lg max-w-2xl mx-auto">
            Our X-Core AI engine intelligently processes data across your entire operation, enabling seamless automation and decision intelligence.
          </p>
        </FadeIn>

        {/* Workflow Visualization */}
        <FadeIn delay={200}>
          <div className="relative max-w-4xl mx-auto aspect-[16/9] rounded-2xl border border-[#00D4FF]/10 bg-[#0a1628]/30 overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00D4FF]/10 blur-[80px]" />

            {/* SVG for connections */}
            <svg
              ref={svgRef}
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {connections.map((conn, index) => {
                const from = getNodePosition(conn.from)
                const to = getNodePosition(conn.to)
                const midX = (from.x + to.x) / 2
                const midY = (from.y + to.y) / 2 + (conn.from < 3 ? -10 : 10)

                return (
                  <g key={`${conn.from}-${conn.to}`}>
                    {/* Base path */}
                    <path
                      d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                      fill="none"
                      stroke="rgba(0, 212, 255, 0.1)"
                      strokeWidth="0.5"
                    />
                    {/* Animated path */}
                    <path
                      d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="0.3"
                      strokeDasharray="3 6"
                      strokeDashoffset={-animationProgress}
                      filter="url(#glow)"
                    />
                  </g>
                )
              })}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
              const Icon = node.icon
              return (
                <div
                  key={node.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transitionDelay: `${node.id * 100}ms`,
                  }}
                >
                  <div
                    className={`relative group ${node.isCenter ? "scale-125" : ""}`}
                  >
                    {/* Node glow */}
                    {node.isCenter && (
                      <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full bg-[#00D4FF]/20 blur-xl animate-pulse" />
                    )}
                    
                    {/* Node container */}
                    <div
                      className={`relative w-16 h-16 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                        node.isCenter
                          ? "bg-gradient-to-br from-[#00D4FF] to-[#00E5FF] shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                          : "bg-[#0a1628] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          node.isCenter ? "text-[#030712]" : "text-[#00D4FF]"
                        }`}
                      />
                    </div>
                    
                    {/* Label */}
                    <span
                      className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap ${
                        node.isCenter ? "text-[#00D4FF]" : "text-[#7dd3fc]/70"
                      }`}
                    >
                      {node.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={400}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "10x", label: "Processing Speed" },
              { value: "99.9%", label: "System Uptime" },
              { value: "1000+", label: "Integrations" },
              { value: "24/7", label: "AI Monitoring" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-[#0a1628]/30 border border-[#00D4FF]/10"
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-[#7dd3fc]/60 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
