"use client"

import { useState } from "react"
import { Shield, Award, CheckCircle, Brain, Cloud, Cpu, X, ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/scroll-animations"

// ============================================================
// BACKEND-READY CERTIFICATE DATA STRUCTURE
// ============================================================
// This data structure is designed to be easily replaced with
// dynamic data from a database, CMS, or API endpoint.
// 
// To integrate with a backend:
// 1. Replace the static 'certificates' array below with a fetch call
// 2. Maintain the same data structure for seamless integration
// 3. Floating animations will remain consistent regardless of data source
//
// Example integration:
// const certificates = await fetch('/api/certificates').then(res => res.json())
// ============================================================

export interface Certificate {
  id: number
  title: string
  fullTitle: string
  authority: string
  description: string
  credentialId: string
  issuedDate: string
  validUntil?: string
  holderName: string
  icon: typeof Shield
  position: { x: number; y: number }
  delay: number
  scale: number
}

// Certificate Modal Component
function CertificateModal({ 
  certificate, 
  isOpen, 
  onClose 
}: { 
  certificate: Certificate | null
  isOpen: boolean
  onClose: () => void 
}) {
  if (!isOpen || !certificate) return null

  const Icon = certificate.icon

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-[#030712]/90 backdrop-blur-md" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl animate-in fade-in zoom-in-95 duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(0, 20, 15, 0.98) 0%, rgba(10, 28, 20, 0.98) 100%)",
          border: "1px solid rgba(0, 255, 136, 0.3)",
          boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.8), 0 0 100px rgba(0, 255, 136, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center bg-[#00FF88]/10 border border-[#00FF88]/20 text-[#00FF88] hover:bg-[#00FF88]/20 transition-all z-10"
          aria-label="Close certificate view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Header */}
        <div className="p-8 border-b border-[#00FF88]/10">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00FF88] to-[#00E0FF] flex items-center justify-center"
              style={{ boxShadow: "0 8px 30px -5px rgba(0, 255, 136, 0.5)" }}
            >
              <Icon className="w-8 h-8 text-[#030712]" />
            </div>
            <div>
              <span className="px-3 py-1 rounded-md bg-[#00FF88]/10 border border-[#00FF88]/20 text-[#00FF88] text-sm font-bold">
                {certificate.authority}
              </span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {certificate.fullTitle}
          </h2>
          <p className="text-[#00FF88]/80 text-lg font-medium">
            {certificate.description}
          </p>
        </div>

        {/* Certificate Details */}
        <div className="p-8">
          {/* Holder Information */}
          <div className="mb-8 p-6 rounded-xl bg-[#00FF88]/5 border border-[#00FF88]/10">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#00E0FF]" />
              <span className="text-[#7dd3fc]/60 text-sm uppercase tracking-wider">Certificate Holder</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{certificate.holderName}</h3>
          </div>

          {/* Credential Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#001a12]/60 border border-[#00FF88]/10">
              <span className="text-[#7dd3fc]/50 text-xs uppercase tracking-wider">Credential ID</span>
              <p className="text-white font-mono text-sm mt-1">{certificate.credentialId}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#001a12]/60 border border-[#00FF88]/10">
              <span className="text-[#7dd3fc]/50 text-xs uppercase tracking-wider">Issue Date</span>
              <p className="text-white text-sm mt-1">{certificate.issuedDate}</p>
            </div>
            {certificate.validUntil && (
              <div className="p-4 rounded-xl bg-[#001a12]/60 border border-[#00FF88]/10 md:col-span-2">
                <span className="text-[#7dd3fc]/50 text-xs uppercase tracking-wider">Valid Until</span>
                <p className="text-[#00FF88] text-sm mt-1 font-medium">{certificate.validUntil}</p>
              </div>
            )}
          </div>

          {/* Verification Badge */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#00FF88]/10 to-[#00E0FF]/10 border border-[#00FF88]/20">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#00FF88]" />
              <div>
                <span className="text-[#00FF88] font-semibold">Verified Oracle Credential</span>
                <p className="text-[#7dd3fc]/50 text-xs">Authenticity confirmed</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#00E0FF] text-sm">
              <ExternalLink className="w-4 h-4" />
              <span>Oracle Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Static certificate data - Ready for backend replacement
const certificates: Certificate[] = [
  {
    id: 1,
    title: "OCI Architect Associate",
    fullTitle: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
    authority: "Oracle",
    description: "Enterprise Cloud Architecture & Infrastructure Design",
    credentialId: "102855384OCI25CAA",
    issuedDate: "November 07, 2025",
    holderName: "Karan Yadav",
    icon: Cloud,
    position: { x: 15, y: 25 },
    delay: 0,
    scale: 1,
  },
  {
    id: 2,
    title: "AI Foundations Associate",
    fullTitle: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    authority: "Oracle",
    description: "AI/ML Foundations & Cloud Intelligence Systems",
    credentialId: "102855384OCI25AICFA",
    issuedDate: "October 19, 2025",
    validUntil: "October 19, 2027",
    holderName: "Karan Yadav",
    icon: Brain,
    position: { x: 70, y: 20 },
    delay: 0.5,
    scale: 0.95,
  },
  {
    id: 3,
    title: "Fusion AI Agent Studio",
    fullTitle: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
    authority: "Oracle",
    description: "AI Agent Development & Intelligent Automation",
    credentialId: "102964919OFAASOFA",
    issuedDate: "November 04, 2025",
    holderName: "Karan Yadav",
    icon: Cpu,
    position: { x: 42, y: 60 },
    delay: 1,
    scale: 1.02,
  },
]

function CertificateCard({ 
  certificate, 
  index,
  onViewCertificate 
}: { 
  certificate: Certificate
  index: number
  onViewCertificate: (cert: Certificate) => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = certificate.icon

  return (
    <div
      className="relative transition-all duration-500 ease-out"
      style={{
        animation: `certificate-float-${index} ${6 + index * 0.5}s ease-in-out infinite`,
        animationDelay: `${certificate.delay}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewCertificate(certificate)}
    >
      <style jsx>{`
        @keyframes certificate-float-0 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes certificate-float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes certificate-float-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
      <div
        className="relative p-6 rounded-2xl transition-all duration-500 cursor-pointer w-full min-h-[320px]"
        style={{
          background: isHovered
            ? "rgba(0, 20, 15, 0.95)"
            : "rgba(0, 20, 15, 0.6)",
          backdropFilter: "blur(20px)",
          border: isHovered 
            ? "1px solid rgba(0, 255, 136, 0.5)" 
            : "1px solid rgba(0, 255, 136, 0.15)",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 255, 136, 0.4), 0 0 60px rgba(0, 255, 136, 0.15), inset 0 0 30px rgba(0, 255, 136, 0.05)"
            : "0 10px 40px -15px rgba(0, 255, 136, 0.1)",
          transform: isHovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        {/* Glow halo */}
        <div
          className="absolute inset-0 rounded-2xl transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(0, 255, 136, 0.2) 0%, transparent 70%)",
            opacity: isHovered ? 1 : 0.3,
          }}
        />

        {/* Light reflection sweep */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
          style={{
            backgroundImage: isHovered
              ? "linear-gradient(105deg, transparent 40%, rgba(0, 255, 136, 0.1) 45%, rgba(0, 255, 136, 0.2) 50%, rgba(0, 255, 136, 0.1) 55%, transparent 60%)"
              : "none",
            backgroundSize: "200% 100%",
            backgroundRepeat: "no-repeat",
            animation: isHovered ? "shimmer 1.5s ease-in-out" : "none",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header with Icon and Authority */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FF88] to-[#00E0FF] flex items-center justify-center transition-all duration-300"
              style={{
                boxShadow: isHovered ? "0 8px 25px -5px rgba(0, 255, 136, 0.5)" : "none",
              }}
            >
              <Icon className="w-6 h-6 text-[#030712]" />
            </div>
            <div className="px-2 py-1 rounded-md bg-[#00FF88]/10 border border-[#00FF88]/20">
              <span className="text-[#00FF88] text-xs font-bold">{certificate.authority}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-1 leading-tight">{certificate.title}</h3>
          
          {/* Full Title */}
          <p className="text-[#7dd3fc]/60 text-xs mb-3 leading-relaxed">{certificate.fullTitle}</p>
          
          {/* Description */}
          <p className="text-[#00FF88]/80 text-sm font-medium mb-3">{certificate.description}</p>

          {/* Holder Name */}
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-[#00E0FF]" />
            <span className="text-white text-sm font-semibold">{certificate.holderName}</span>
          </div>

          {/* Credential Details */}
          <div className="space-y-1 text-xs text-[#7dd3fc]/50">
            <p>Credential ID: <span className="text-[#7dd3fc]/70 font-mono">{certificate.credentialId}</span></p>
            <p>Issued: <span className="text-[#7dd3fc]/70">{certificate.issuedDate}</span></p>
            {certificate.validUntil && (
              <p>Valid Until: <span className="text-[#00FF88]/70">{certificate.validUntil}</span></p>
            )}
          </div>

          {/* Verified badge */}
          <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-[#00FF88]/10">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00FF88]" />
              <span className="text-[#00FF88] text-xs font-medium">Verified Oracle Credential</span>
            </div>
            {/* Click to view indicator */}
            <div className={`flex items-center gap-1 text-xs transition-all duration-300 ${isHovered ? 'text-[#00E0FF] opacity-100' : 'text-[#7dd3fc]/40 opacity-60'}`}>
              <ExternalLink className="w-3 h-3" />
              <span>View</span>
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
          <div
            className="absolute top-0 right-0 w-24 h-24 -translate-y-1/2 translate-x-1/2 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewCertificate = (cert: Certificate) => {
    setSelectedCertificate(cert)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Delay clearing the certificate to allow close animation
    setTimeout(() => setSelectedCertificate(null), 300)
  }

  return (
    <>
      {/* Certificate Modal */}
      <CertificateModal 
        certificate={selectedCertificate} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    <section id="certificates" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00FF88]/30 to-transparent" />
        
        {/* Background glows */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00FF88]/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#00E0FF]/5 blur-[100px]" />
        
        {/* Industrial grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-8">
          <span className="inline-block text-[#00FF88] text-sm font-semibold tracking-wider uppercase mb-4">
            Technical Authority & Credentials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Certified for{" "}
            <span className="bg-gradient-to-r from-[#00FF88] to-[#00E0FF] bg-clip-text text-transparent">
              Enterprise Excellence
            </span>
          </h2>
          <p className="text-[#7dd3fc]/70 text-lg max-w-2xl mx-auto mb-4">
            Industry-recognized Oracle certifications demonstrating deep expertise in cloud architecture, AI foundations, and intelligent automation systems
          </p>
          
          {/* Trust statement for enterprise decision-makers */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/5">
            <Shield className="w-4 h-4 text-[#00FF88]" />
            <span className="text-[#00FF88] text-sm font-medium">Enterprise-Grade Technical Competency</span>
          </div>
        </FadeIn>

        {/* Certificate cards grid container */}
        <FadeIn delay={200}>
          <div className="relative max-w-5xl mx-auto">
            {/* Center glow - positioned behind grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00FF88]/10 blur-[80px] animate-pulse -z-10" />
            
            {/* CSS Grid layout - prevents overlap */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {certificates.map((cert, index) => (
                <CertificateCard 
                  key={cert.id} 
                  certificate={cert} 
                  index={index} 
                  onViewCertificate={handleViewCertificate}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Bottom stats - Enterprise value proposition */}
        <FadeIn delay={400}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "3", label: "Oracle Certifications" },
              { value: "2025", label: "Latest Credentials" },
              { value: "100%", label: "Verified & Active" },
              { value: "Enterprise", label: "Ready Solutions" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-[#001a12]/30 border border-[#00FF88]/10"
              >
                <p className="text-2xl font-bold text-[#00FF88]">{stat.value}</p>
                <p className="text-[#7dd3fc]/60 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
    </>
  )
}
