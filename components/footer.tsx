"use client"

import { Twitter, Github, Linkedin, Youtube, Instagram, Phone, Mail, Send } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  Solutions: [
    { label: "AI Automation", href: "#features" },
    { label: "Smart Analytics", href: "#" },
    { label: "Infrastructure", href: "#" },
    { label: "Integration API", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "News", href: "#" },
    { label: "Partners", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Support Center", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Compliance", href: "#" },
    { label: "Security", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/xai_industries/", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "https://github.com/620107", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/karan-yadav-864281378", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#030712] pt-20 pb-8">
      {/* Top gradient line - sky blue industrial */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent shadow-[0_0_20px_rgba(0,212,255,0.5)]" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Logo and description */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 group mb-4">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                <Image
                  src="/xai-logo.jpg"
                  alt="XAI Industries"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">
                X<span className="text-[#00D4FF]">AI</span>
                <span className="text-white/80 font-medium ml-1">Industries</span>
              </span>
            </a>
            <p className="text-[#7dd3fc]/60 text-sm max-w-xs mb-6">
              Engineering the future of industrial automation through AI-powered innovation and intelligent systems.
            </p>
            
            {/* Contact CTA */}
            <div className="mb-6 p-4 rounded-xl border border-[#00D4FF]/20 bg-[#0a1628]/40">
              <p className="text-white text-sm font-medium mb-3">
                Have questions or want to discuss your project?
              </p>
              
              <div className="space-y-2 mb-3">
                <a
                  href="https://wa.me/+919335624540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7dd3fc]/80 hover:text-[#00D4FF] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 93356 24540 (WhatsApp)</span>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mrasr620107@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7dd3fc]/80 hover:text-[#00D4FF] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>mrasr620107@gmail.com</span>
                </a>
                <a
                  href="https://t.me/X_INDUSTRIES216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7dd3fc]/80 hover:text-[#00D4FF] transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram: @X_INDUSTRIES216</span>
                </a>
                <a
                  href="https://www.instagram.com/xai_industries/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7dd3fc]/80 hover:text-[#00D4FF] transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram: @xai_industries</span>
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg border border-[#00D4FF]/20 bg-[#0a1628]/40 flex items-center justify-center text-[#7dd3fc] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#7dd3fc]/60 text-sm hover:text-[#00D4FF] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* X-Industries branding */}
        <div className="text-center py-8 border-t border-b border-[#00D4FF]/10 mb-8">
          <span className="text-[#00D4FF]/10 text-4xl md:text-6xl font-black tracking-[0.2em]">
            XAI-INDUSTRIES
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7dd3fc]/40 text-sm">
            © {new Date().getFullYear()} XAI Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#7dd3fc]/40 text-sm hover:text-[#00D4FF] transition-colors">
              System Status
            </a>
            <a href="#" className="text-[#7dd3fc]/40 text-sm hover:text-[#00D4FF] transition-colors">
              API Documentation
            </a>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-[#7dd3fc]/60 text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
