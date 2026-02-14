"use client"

import { useState } from "react"
import { Star, Quote } from "lucide-react"
import { FadeIn, StaggerChildren, StaggerChild } from "@/components/scroll-animations"

const testimonials = [
  {
    name: "Dr. Heinrich Mueller",
    role: "Chief Operations Officer",
    company: "Siemens Manufacturing",
    avatar: "HM",
    content: "Xai-industries has revolutionized our production line. The AI-powered automation reduced our downtime by 47% and increased throughput significantly. A true game-changer for industrial operations.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Tesla Gigafactory",
    avatar: "SC",
    content: "The reliability and scalability of Xai-industries systems are unmatched. Their future-ready infrastructure seamlessly integrated with our existing automation, delivering immediate ROI.",
    rating: 5,
  },
  {
    name: "James Richardson",
    role: "Plant Director",
    company: "Boeing Aerospace",
    avatar: "JR",
    content: "Security was our top priority, and Xai-industries delivered. Their ISO-certified systems protect our critical manufacturing data while providing unprecedented operational insights.",
    rating: 5,
  },
  {
    name: "Akiko Tanaka",
    role: "Head of Innovation",
    company: "Toyota Motors",
    avatar: "AT",
    content: "The smart analytics platform transformed how we approach predictive maintenance. We now prevent issues before they occur, saving millions in potential downtime costs.",
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative p-6 rounded-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "rgba(0, 15, 30, 0.4)",
        backdropFilter: "blur(20px)",
        border: isHovered ? "1px solid rgba(0, 212, 255, 0.3)" : "1px solid rgba(0, 212, 255, 0.1)",
        boxShadow: isHovered
          ? "0 20px 40px -15px rgba(0, 212, 255, 0.2), inset 0 0 30px rgba(0, 212, 255, 0.03)"
          : "none",
      }}
    >
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote className="w-12 h-12 text-[#00D4FF]" />
      </div>

      {/* Glow accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px transition-all duration-500"
        style={{
          background: isHovered
            ? "linear-gradient(90deg, transparent, #00D4FF, transparent)"
            : "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)",
          boxShadow: isHovered ? "0 0 20px rgba(0, 212, 255, 0.5)" : "none",
        }}
      />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#00D4FF] text-[#00D4FF]" />
        ))}
      </div>

      {/* Content */}
      <p className="text-[#f0f9ff]/90 leading-relaxed mb-6">
        &quot;{testimonial.content}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#00E5FF]/20 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-[#7dd3fc]/60 text-sm">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
        
        {/* Glassmorphic background shapes */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          {/* Glowing accent line - sky blue industrial */}
          <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] shadow-[0_0_20px_rgba(0,212,255,0.5)]" />
          
          <span className="inline-block text-[#00D4FF] text-sm font-semibold tracking-wider uppercase mb-4">
            Industrial Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-[#7dd3fc]/70 text-lg max-w-2xl mx-auto">
            Join the world&#39;s leading manufacturers who have transformed their operations with Xai-industries technology
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={150}>
          {testimonials.map((testimonial, index) => (
            <StaggerChild key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </StaggerChild>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
