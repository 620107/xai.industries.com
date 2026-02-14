import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WorkflowSection } from "@/components/workflow-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CertificatesSection } from "@/components/certificates-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { KeyboardScrollEnhancer } from "@/components/keyboard-scroll-enhancer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <KeyboardScrollEnhancer />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <TestimonialsSection />
      <CertificatesSection />
      <FAQSection />
      <Footer />
      <AIChatbot />
    </main>
  )
}
