"use client"

import { useState, useRef, type MouseEvent } from "react"
import { Activity, Cpu, TrendingUp, Gauge, Settings, Wifi } from "lucide-react"

export function HeroCard3D() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setTransform({ rotateX, rotateY })
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 })
    setGlare({ x: 50, y: 50 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-md perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative rounded-2xl p-6 transition-all duration-200 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
          background: "linear-gradient(135deg, rgba(0, 15, 30, 0.8) 0%, rgba(10, 22, 40, 0.6) 100%)",
          border: "1px solid rgba(0, 212, 255, 0.2)",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 212, 255, 0.25), 0 0 60px rgba(0, 212, 255, 0.1)"
            : "0 10px 40px -15px rgba(0, 212, 255, 0.2)",
        }}
      >
        {/* Glare effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0, 212, 255, 0.15) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Card content with parallax */}
        <div
          className="relative z-10"
          style={{
            transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
            transition: "transform 0.2s ease-out",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#00E5FF] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#030712]" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Xai-industries Control</h3>
                <p className="text-[#7dd3fc] text-sm">System Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-[#00D4FF]" />
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-[#00D4FF] text-xs">Online</span>
            </div>
          </div>

          {/* Stats grid */}
          <div
            className="grid grid-cols-2 gap-4 mb-6"
            style={{
              transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
              transition: "transform 0.2s ease-out 0.05s",
            }}
          >
            <div className="p-4 rounded-xl bg-[#0a1628]/50 border border-[#00D4FF]/10">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-[#7dd3fc] text-xs">Efficiency</span>
              </div>
              <p className="text-2xl font-bold text-white">99.7%</p>
              <p className="text-[#00D4FF] text-xs flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> +15.2%
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0a1628]/50 border border-[#00E5FF]/10">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-[#7dd3fc] text-xs">Output</span>
              </div>
              <p className="text-2xl font-bold text-white">24.8K</p>
              <p className="text-[#00E5FF] text-xs flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> +8.4%
              </p>
            </div>
          </div>

          {/* System metrics */}
          <div
            className="space-y-3"
            style={{
              transform: isHovered ? "translateZ(10px)" : "translateZ(0)",
              transition: "transform 0.2s ease-out 0.1s",
            }}
          >
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#7dd3fc] flex items-center gap-2">
                  <Settings className="w-3 h-3" /> Automation Pipeline
                </span>
                <span className="text-white">92%</span>
              </div>
              <div className="h-2 rounded-full bg-[#0a1628] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00E5FF]"
                  style={{ width: "92%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#7dd3fc] flex items-center gap-2">
                  <Cpu className="w-3 h-3" /> AI Processing
                </span>
                <span className="text-white">97%</span>
              </div>
              <div className="h-2 rounded-full bg-[#0a1628] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00E5FF] to-[#38bdf8]"
                  style={{ width: "97%" }}
                />
              </div>
            </div>
          </div>

          {/* Bottom status */}
          <div className="mt-4 pt-4 border-t border-[#00D4FF]/10 flex items-center justify-between text-xs">
            <span className="text-[#7dd3fc]/60">Last sync: 2 sec ago</span>
            <span className="text-[#00D4FF]">All systems nominal</span>
          </div>
        </div>

        {/* Animated border glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `conic-gradient(from ${Date.now() * 0.05}deg at 50% 50%, transparent, rgba(0, 212, 255, 0.3), transparent, rgba(0, 229, 255, 0.3), transparent)`,
            opacity: isHovered ? 0.5 : 0,
            transition: "opacity 0.3s ease-out",
            filter: "blur(1px)",
          }}
        />
      </div>
    </div>
  )
}
