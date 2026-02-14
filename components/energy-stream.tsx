"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

interface LightThread {
  x: number
  y: number
  length: number
  speed: number
  width: number
  opacity: number
  offset: number
}

interface EnergyWave {
  y: number
  amplitude: number
  frequency: number
  speed: number
  opacity: number
}

export function EnergyStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const threadsRef = useRef<LightThread[]>([])
  const wavesRef = useRef<EnergyWave[]>([])
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0

    const resizeCanvas = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Color palette
    const colors = {
      primary: "#00FF88",
      secondary: "#00E0FF", 
      tertiary: "#00FFA3",
      emerald: "#10b981",
      electricBlue: "#06b6d4",
      darkTeal: "#001a12",
    }

    // Initialize particles - more particles for denser effect
    const initParticles = () => {
      const particles: Particle[] = []
      const particleColors = [colors.primary, colors.secondary, colors.tertiary, colors.emerald]
      
      for (let i = 0; i < 250; i++) {
        const maxLife = Math.random() * 200 + 100
        particles.push({
          x: width / 2 + (Math.random() - 0.5) * 150,
          y: Math.random() * height,
          size: Math.random() * 4 + 0.5,
          speedY: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.9 + 0.1,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          life: Math.random() * maxLife,
          maxLife,
        })
      }
      particlesRef.current = particles
    }

    // Initialize light threads - plasma-like flowing strands
    const initThreads = () => {
      const threads: LightThread[] = []
      for (let i = 0; i < 12; i++) {
        threads.push({
          x: width / 2 + (Math.random() - 0.5) * 60,
          y: Math.random() * height,
          length: Math.random() * 200 + 150,
          speed: Math.random() * 4 + 2,
          width: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          offset: Math.random() * Math.PI * 2,
        })
      }
      threadsRef.current = threads
    }

    // Initialize energy waves - horizontal pulses
    const initWaves = () => {
      const waves: EnergyWave[] = []
      for (let i = 0; i < 8; i++) {
        waves.push({
          y: Math.random() * height,
          amplitude: Math.random() * 40 + 20,
          frequency: Math.random() * 0.02 + 0.01,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.1,
        })
      }
      wavesRef.current = waves
    }

    initParticles()
    initThreads()
    initWaves()

    const animate = () => {
      timeRef.current += 0.016 // ~60fps
      const time = timeRef.current

      ctx.clearRect(0, 0, width, height)
      const centerX = width / 2

      // === LAYER 1: Outer ambient glow ===
      const outerGlow = ctx.createRadialGradient(
        centerX, height / 2, 0,
        centerX, height / 2, 400
      )
      outerGlow.addColorStop(0, "rgba(0, 255, 136, 0.08)")
      outerGlow.addColorStop(0.4, "rgba(0, 224, 255, 0.03)")
      outerGlow.addColorStop(1, "rgba(0, 26, 18, 0)")
      ctx.fillStyle = outerGlow
      ctx.fillRect(0, 0, width, height)

      // === LAYER 2: Main vertical energy beam with pulsing ===
      const pulseIntensity = 0.7 + Math.sin(time * 2) * 0.3
      const beamWidth = 80 + Math.sin(time * 1.5) * 15

      // Outer beam glow
      const outerBeam = ctx.createLinearGradient(centerX - beamWidth * 2, 0, centerX + beamWidth * 2, 0)
      outerBeam.addColorStop(0, "rgba(0, 255, 136, 0)")
      outerBeam.addColorStop(0.2, `rgba(0, 255, 136, ${0.02 * pulseIntensity})`)
      outerBeam.addColorStop(0.5, `rgba(0, 255, 136, ${0.08 * pulseIntensity})`)
      outerBeam.addColorStop(0.8, `rgba(0, 255, 136, ${0.02 * pulseIntensity})`)
      outerBeam.addColorStop(1, "rgba(0, 255, 136, 0)")
      ctx.fillStyle = outerBeam
      ctx.fillRect(centerX - beamWidth * 2, 0, beamWidth * 4, height)

      // Inner intense beam
      const innerBeam = ctx.createLinearGradient(centerX - beamWidth, 0, centerX + beamWidth, 0)
      innerBeam.addColorStop(0, "rgba(0, 255, 136, 0)")
      innerBeam.addColorStop(0.3, `rgba(0, 224, 255, ${0.1 * pulseIntensity})`)
      innerBeam.addColorStop(0.5, `rgba(0, 255, 136, ${0.25 * pulseIntensity})`)
      innerBeam.addColorStop(0.7, `rgba(0, 224, 255, ${0.1 * pulseIntensity})`)
      innerBeam.addColorStop(1, "rgba(0, 255, 136, 0)")
      ctx.fillStyle = innerBeam
      ctx.fillRect(centerX - beamWidth, 0, beamWidth * 2, height)

      // Core bright center
      const coreBeam = ctx.createLinearGradient(centerX - 20, 0, centerX + 20, 0)
      coreBeam.addColorStop(0, "rgba(0, 255, 136, 0)")
      coreBeam.addColorStop(0.5, `rgba(255, 255, 255, ${0.15 * pulseIntensity})`)
      coreBeam.addColorStop(1, "rgba(0, 255, 136, 0)")
      ctx.fillStyle = coreBeam
      ctx.fillRect(centerX - 20, 0, 40, height)

      // === LAYER 3: Energy waves ===
      wavesRef.current.forEach((wave) => {
        wave.y += wave.speed
        if (wave.y > height + 50) {
          wave.y = -50
          wave.amplitude = Math.random() * 40 + 20
        }

        ctx.beginPath()
        ctx.moveTo(centerX - 150, wave.y)
        
        for (let x = -150; x <= 150; x += 5) {
          const waveY = wave.y + Math.sin((x + time * 100) * wave.frequency) * wave.amplitude
          ctx.lineTo(centerX + x, waveY)
        }
        
        const waveGradient = ctx.createLinearGradient(centerX - 150, wave.y, centerX + 150, wave.y)
        waveGradient.addColorStop(0, "rgba(0, 255, 136, 0)")
        waveGradient.addColorStop(0.3, `rgba(0, 224, 255, ${wave.opacity * 0.5})`)
        waveGradient.addColorStop(0.5, `rgba(0, 255, 136, ${wave.opacity})`)
        waveGradient.addColorStop(0.7, `rgba(0, 224, 255, ${wave.opacity * 0.5})`)
        waveGradient.addColorStop(1, "rgba(0, 255, 136, 0)")
        
        ctx.strokeStyle = waveGradient
        ctx.lineWidth = 2
        ctx.stroke()
      })

      // === LAYER 4: Light threads (plasma strands) ===
      threadsRef.current.forEach((thread) => {
        thread.y += thread.speed
        if (thread.y - thread.length > height) {
          thread.y = -thread.length
          thread.x = centerX + (Math.random() - 0.5) * 60
        }

        const wobble = Math.sin(time * 3 + thread.offset) * 15
        
        const threadGradient = ctx.createLinearGradient(
          thread.x + wobble, thread.y - thread.length,
          thread.x + wobble, thread.y
        )
        threadGradient.addColorStop(0, "rgba(0, 255, 136, 0)")
        threadGradient.addColorStop(0.3, `rgba(0, 255, 163, ${thread.opacity * 0.5})`)
        threadGradient.addColorStop(0.7, `rgba(0, 255, 136, ${thread.opacity})`)
        threadGradient.addColorStop(1, `rgba(255, 255, 255, ${thread.opacity * 0.8})`)

        ctx.beginPath()
        ctx.moveTo(thread.x + wobble, thread.y - thread.length)
        
        // Create curved path for organic look
        for (let i = 0; i <= 10; i++) {
          const t = i / 10
          const y = thread.y - thread.length + thread.length * t
          const x = thread.x + wobble + Math.sin(t * Math.PI * 2 + time * 2 + thread.offset) * 8
          ctx.lineTo(x, y)
        }
        
        ctx.strokeStyle = threadGradient
        ctx.lineWidth = thread.width
        ctx.lineCap = "round"
        ctx.stroke()

        // Add glow to thread head
        const headGlow = ctx.createRadialGradient(
          thread.x + wobble, thread.y, 0,
          thread.x + wobble, thread.y, 15
        )
        headGlow.addColorStop(0, `rgba(255, 255, 255, ${thread.opacity * 0.8})`)
        headGlow.addColorStop(0.3, `rgba(0, 255, 136, ${thread.opacity * 0.5})`)
        headGlow.addColorStop(1, "rgba(0, 255, 136, 0)")
        
        ctx.beginPath()
        ctx.arc(thread.x + wobble, thread.y, 15, 0, Math.PI * 2)
        ctx.fillStyle = headGlow
        ctx.fill()
      })

      // === LAYER 5: Particles with turbulence ===
      particlesRef.current.forEach((particle) => {
        particle.life += 1
        
        // Turbulence effect
        const turbulenceX = Math.sin(particle.y * 0.01 + time * 2) * 2
        const turbulenceY = Math.cos(particle.x * 0.01 + time * 1.5) * 0.5
        
        particle.x += particle.speedX + turbulenceX * 0.3
        particle.y += particle.speedY + turbulenceY

        // Fade based on life
        const lifeFade = 1 - (particle.life / particle.maxLife)
        const currentOpacity = particle.opacity * lifeFade

        // Reset particle
        if (particle.y > height + 20 || particle.life >= particle.maxLife) {
          particle.y = -20
          particle.x = centerX + (Math.random() - 0.5) * 150
          particle.life = 0
          particle.maxLife = Math.random() * 200 + 100
          particle.opacity = Math.random() * 0.9 + 0.1
        }

        // Keep particles within beam area with soft boundaries
        const distFromCenter = Math.abs(particle.x - centerX)
        if (distFromCenter > 100) {
          particle.speedX += (centerX - particle.x) * 0.001
        }

        // Convert hex to rgba for gradient
        const hexToRgba = (hex: string, alpha: number) => {
          const r = Number.parseInt(hex.slice(1, 3), 16)
          const g = Number.parseInt(hex.slice(3, 5), 16)
          const b = Number.parseInt(hex.slice(5, 7), 16)
          return `rgba(${r}, ${g}, ${b}, ${alpha})`
        }

        // Draw particle with multi-layer glow
        const particleGlow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        )
        particleGlow.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.9})`)
        particleGlow.addColorStop(0.3, hexToRgba(particle.color, currentOpacity * 0.7))
        particleGlow.addColorStop(1, "rgba(0, 255, 136, 0)")

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = particleGlow
        ctx.fill()

        // Inner bright core
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.9})`
        ctx.fill()
      })

      // === LAYER 6: Horizontal energy pulses ===
      for (let i = 0; i < 5; i++) {
        const pulseY = ((time * 80 + i * 250) % (height + 100)) - 50
        const pulseWidth = 200 + Math.sin(time * 2 + i) * 30
        
        const pulseGradient = ctx.createLinearGradient(
          centerX - pulseWidth, pulseY,
          centerX + pulseWidth, pulseY
        )
        pulseGradient.addColorStop(0, "rgba(0, 224, 255, 0)")
        pulseGradient.addColorStop(0.2, "rgba(0, 224, 255, 0.15)")
        pulseGradient.addColorStop(0.5, "rgba(0, 255, 136, 0.4)")
        pulseGradient.addColorStop(0.8, "rgba(0, 224, 255, 0.15)")
        pulseGradient.addColorStop(1, "rgba(0, 224, 255, 0)")

        ctx.beginPath()
        ctx.moveTo(centerX - pulseWidth, pulseY)
        ctx.lineTo(centerX + pulseWidth, pulseY)
        ctx.strokeStyle = pulseGradient
        ctx.lineWidth = 3
        ctx.stroke()

        // Pulse glow
        const pulseGlow = ctx.createRadialGradient(
          centerX, pulseY, 0,
          centerX, pulseY, 40
        )
        pulseGlow.addColorStop(0, "rgba(0, 255, 136, 0.3)")
        pulseGlow.addColorStop(1, "rgba(0, 255, 136, 0)")
        ctx.fillStyle = pulseGlow
        ctx.fillRect(centerX - 40, pulseY - 40, 80, 80)
      }

      // === LAYER 7: Ambient floating particles (outer area) ===
      for (let i = 0; i < 30; i++) {
        const px = (Math.sin(time * 0.5 + i * 0.5) * 0.5 + 0.5) * width
        const py = (Math.cos(time * 0.3 + i * 0.7) * 0.5 + 0.5) * height
        const pSize = 1 + Math.sin(time + i) * 0.5
        const pOpacity = 0.1 + Math.sin(time * 2 + i) * 0.05

        const ambientGlow = ctx.createRadialGradient(px, py, 0, px, py, pSize * 8)
        ambientGlow.addColorStop(0, `rgba(0, 255, 136, ${pOpacity})`)
        ambientGlow.addColorStop(1, "rgba(0, 255, 136, 0)")
        
        ctx.beginPath()
        ctx.arc(px, py, pSize * 8, 0, Math.PI * 2)
        ctx.fillStyle = ambientGlow
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  )
}
