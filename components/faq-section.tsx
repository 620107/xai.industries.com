"use client"

import { FadeIn } from "@/components/scroll-animations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Xai-industries integrate with existing industrial systems?",
    answer: "Xai-industries connects seamlessly with over 1000+ industrial protocols including OPC-UA, Modbus, PROFINET, and EtherNet/IP. Our AI-powered middleware automatically maps your existing equipment and suggests optimal integration paths. Implementation typically takes 2-4 weeks depending on facility size.",
  },
  {
    question: "What security certifications does Xai-industries hold?",
    answer: "We maintain ISO 27001, SOC 2 Type II, IEC 62443, and NIST Cybersecurity Framework compliance. All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Our systems undergo continuous security monitoring and annual third-party penetration testing.",
  },
  {
    question: "Can Xai-industries scale with our growing operations?",
    answer: "Absolutely. Our modular architecture is designed for industrial scale. We support deployments from single production lines to multi-facility global operations. The X-Core AI engine automatically optimizes resource allocation as your operation expands, with no downtime during scaling.",
  },
  {
    question: "What kind of ROI can we expect from implementing Xai-industries?",
    answer: "Our clients typically see 25-40% reduction in unplanned downtime, 15-30% improvement in production efficiency, and 20-35% decrease in maintenance costs within the first year. We provide detailed ROI analysis during our consultation process tailored to your specific operation.",
  },
  {
    question: "How does the AI-powered predictive maintenance work?",
    answer: "Our X-Core AI analyzes real-time sensor data, historical patterns, and environmental factors to predict equipment failures before they occur. The system learns your specific equipment behavior, achieving 95%+ accuracy in failure prediction up to 30 days in advance.",
  },
  {
    question: "What support and training options are available?",
    answer: "All enterprise plans include 24/7 technical support with guaranteed 15-minute response times for critical issues. We provide comprehensive onboarding, role-based training programs, and a dedicated customer success manager. Optional on-site support is available for complex implementations.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left side - 3D Industrial Object */}
          <FadeIn className="relative hidden lg:block">
            <div className="sticky top-32">
              {/* Glowing industrial visualization */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-[#00D4FF]/5 blur-[80px] animate-pulse" />
                
                {/* Industrial hexagon pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated rings */}
                    <div className="absolute inset-0 -m-8 rounded-full border border-[#00D4FF]/10 animate-ping" style={{ animationDuration: "3s" }} />
                    <div className="absolute inset-0 -m-16 rounded-full border border-[#00E5FF]/10 animate-ping" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
                    <div className="absolute inset-0 -m-24 rounded-full border border-[#00D4FF]/5 animate-ping" style={{ animationDuration: "5s", animationDelay: "1s" }} />
                    
                    {/* Main question mark with industrial style */}
                    <div
                      className="text-[180px] font-bold bg-gradient-to-br from-[#00D4FF] via-[#00E5FF] to-[#38bdf8] bg-clip-text text-transparent"
                      style={{
                        textShadow: "0 0 80px rgba(0, 212, 255, 0.5)",
                        filter: "drop-shadow(0 0 40px rgba(0, 212, 255, 0.3))",
                      }}
                    >
                      ?
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-[#00D4FF]/50 animate-particle-float"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Text below */}
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold text-white mb-2">Technical Questions?</h3>
                <p className="text-[#7dd3fc]/70">Our engineering team is ready to help</p>
              </div>
            </div>
          </FadeIn>

          {/* Right side - FAQ Accordion */}
          <div>
            <FadeIn className="mb-10">
              <span className="inline-block text-[#00D4FF] text-sm font-semibold tracking-wider uppercase mb-4">
                Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#00E5FF] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-[#7dd3fc]/70">
                Everything you need to know about Xai-industries systems
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-xl border-none bg-[#0a1628]/40 px-6 transition-all duration-300 hover:bg-[#0a1628]/60 data-[state=open]:bg-[#0a1628]/60 data-[state=open]:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
                    style={{
                      border: "1px solid rgba(0, 212, 255, 0.1)",
                    }}
                  >
                    <AccordionTrigger className="text-white hover:text-[#00D4FF] hover:no-underline py-5 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#7dd3fc]/70 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
