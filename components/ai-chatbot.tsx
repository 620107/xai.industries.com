"use client"

import React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { MessageCircle, X, Send, User, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// ============================================================
// BACKEND-READY CHATBOT ARCHITECTURE
// ============================================================
// This chatbot UI is fully implemented with placeholder logic.
// The chatbot is NOT bound to any API initially.
// 
// TO CONNECT YOUR CHATBOT API:
// 1. Set the CHATBOT_API_ENDPOINT constant below to your API URL
// 2. Uncomment the API fetch logic in handleSubmit
// 3. Adjust the request/response format to match your API
//
// The UI and layout will remain unchanged when API is connected.
// ============================================================

// API Configuration - Set your chatbot API endpoint here
const CHATBOT_API_ENDPOINT: string | null = null // Example: "https://your-api.com/chat"

// Message interface for type safety
interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

// API Response interface - Adjust based on your API structure
interface ChatAPIResponse {
  message?: string
  content?: string
  response?: string
  error?: string
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Welcome to Xai-industries.\n\nMay I know which service you are looking for?\n\n1. AI Calling Agents\n2. Marketing & CRM Automation\n3. UGC Ads & Growth Support\n4. Lead Generation Automation\n5. Managed / Freelancing Services",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // ============================================================
  // CHATBOT API INTEGRATION HANDLER
  // ============================================================
  // Current: Uses placeholder responses for demonstration
  // Future: Replace with actual API call when endpoint is provided
  // ============================================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input.trim()
    setInput("")
    setIsLoading(true)

    // ============================================================
    // API INTEGRATION POINT
    // ============================================================
    // Uncomment and configure when ready to connect your API:
    //
    // if (CHATBOT_API_ENDPOINT) {
    //   try {
    //     const response = await fetch(CHATBOT_API_ENDPOINT, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         // Add authorization headers if needed:
    //         // 'Authorization': `Bearer ${YOUR_API_KEY}`,
    //       },
    //       body: JSON.stringify({
    //         message: currentInput,
    //         // Add any additional context your API needs:
    //         // conversationHistory: messages,
    //         // userId: 'optional-user-id',
    //       }),
    //     })
    //     
    //     if (!response.ok) throw new Error('API request failed')
    //     
    //     const data: ChatAPIResponse = await response.json()
    //     const assistantContent = data.message || data.content || data.response || 'I apologize, but I could not process your request.'
    //     
    //     const assistantMessage: Message = {
    //       id: (Date.now() + 1).toString(),
    //       role: "assistant",
    //       content: assistantContent,
    //       timestamp: new Date(),
    //     }
    //     
    //     setMessages((prev) => [...prev, assistantMessage])
    //     setIsLoading(false)
    //     return
    //   } catch (error) {
    //     console.error('Chatbot API error:', error)
    //     // Fall through to placeholder response on error
    //   }
    // }
    // ============================================================

    // Xai-industries AI Assistant - Professional consulting tone
    setTimeout(() => {
      const lowerInput = currentInput.toLowerCase()
      let selectedResponse = "May I know which service you are looking for?\n\n1. AI Calling Agents\n2. Marketing & CRM Automation\n3. UGC Ads & Growth Support\n4. Lead Generation Automation\n5. Managed / Freelancing Services"
      
      // Contact information request
      if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("email") || lowerInput.includes("whatsapp") || lowerInput.includes("telegram") || lowerInput.includes("reach") || lowerInput.includes("number")) {
        selectedResponse = "Phone / WhatsApp: +91 93356 24540\nEmail: mrasr620107@gmail.com\nTelegram: https://t.me/X_INDUSTRIES216"
      }
      // AI Calling Agents (Option 1)
      else if (lowerInput.includes("1") || lowerInput.includes("ai calling") || lowerInput.includes("calling agent") || lowerInput.includes("voice") || lowerInput.includes("phone bot") || lowerInput.includes("call agent")) {
        selectedResponse = "AI Calling Agents:\n\nHandles inbound/outbound calls automatically. Qualifies leads, follows up, answers queries. Works 24x7 without salary or breaks.\n\nBenefits: Reduces manpower cost, improves response speed, never misses a call."
      }
      // Marketing & CRM Automation (Option 2)
      else if (lowerInput.includes("2") || lowerInput.includes("marketing") || lowerInput.includes("crm") || lowerInput.includes("automation")) {
        selectedResponse = "Marketing & CRM Automation:\n\nAutomates your marketing workflows, email sequences, lead nurturing, and CRM updates.\n\nBenefits: Saves time, reduces manual errors, improves lead conversion, scales effortlessly."
      }
      // UGC Ads & Growth Support (Option 3)
      else if (lowerInput.includes("3") || lowerInput.includes("ugc") || lowerInput.includes("ads") || lowerInput.includes("growth")) {
        selectedResponse = "UGC Ads & Growth Support:\n\nCreates user-generated content style ads and manages growth campaigns for better engagement.\n\nBenefits: Higher conversion rates, authentic content, cost-effective advertising."
      }
      // Lead Generation Automation (Option 4)
      else if (lowerInput.includes("4") || lowerInput.includes("lead generation") || lowerInput.includes("lead gen") || lowerInput.includes("leads")) {
        selectedResponse = "Lead Generation Automation:\n\nAutomated systems to find, qualify, and nurture leads through multiple channels.\n\nBenefits: Consistent lead flow, reduced acquisition cost, scalable pipeline."
      }
      // Managed / Freelancing Services (Option 5)
      else if (lowerInput.includes("5") || lowerInput.includes("managed") || lowerInput.includes("freelance") || lowerInput.includes("team") || lowerInput.includes("outsource") || lowerInput.includes("hire")) {
        selectedResponse = "Managed / Freelancing Services:\n\nOn-demand skilled professionals and managed teams for your projects.\n\nBenefits: Flexible scaling, no hiring overhead, expert resources when needed."
      }
      // Pricing inquiries - redirect to management
      else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("pricing") || lowerInput.includes("how much") || lowerInput.includes("rate") || lowerInput.includes("fee") || lowerInput.includes("charge")) {
        selectedResponse = "Our management team can guide you better after understanding your requirements.\n\nPhone / WhatsApp: +91 93356 24540\nEmail: mrasr620107@gmail.com"
      }
      // Greetings - Hindi
      else if (lowerInput.includes("namaste") || lowerInput.includes("namaskar") || lowerInput.includes("kaise ho") || lowerInput.includes("kya hal")) {
        selectedResponse = "Namaste! Xai-industries mein aapka swagat hai.\n\nAap kis service ke baare mein jaanna chahte hain?\n\n1. AI Calling Agents\n2. Marketing & CRM Automation\n3. UGC Ads & Growth Support\n4. Lead Generation Automation\n5. Managed / Freelancing Services"
      }
      // Greetings - English
      else if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
        selectedResponse = "Hello! Welcome to Xai-industries.\n\nMay I know which service you are looking for?\n\n1. AI Calling Agents\n2. Marketing & CRM Automation\n3. UGC Ads & Growth Support\n4. Lead Generation Automation\n5. Managed / Freelancing Services"
      }
      // About / Services overview
      else if (lowerInput.includes("what do you do") || lowerInput.includes("about") || lowerInput.includes("services") || lowerInput.includes("company")) {
        selectedResponse = "Xai-industries provides AI automation and consulting services.\n\nOur services:\n1. AI Calling Agents\n2. Marketing & CRM Automation\n3. UGC Ads & Growth Support\n4. Lead Generation Automation\n5. Managed / Freelancing Services\n\nWhich one interests you?"
      }
      // Irrelevant / Off-topic questions
      else if (lowerInput.includes("weather") || lowerInput.includes("joke") || lowerInput.includes("game") || lowerInput.includes("movie") || lowerInput.includes("music") || lowerInput.includes("food")) {
        selectedResponse = "For this query, it would be best to speak directly with our management team.\n\nPhone / WhatsApp: +91 93356 24540\nEmail: mrasr620107@gmail.com"
      }
      // Demo or next steps
      else if (lowerInput.includes("demo") || lowerInput.includes("trial") || lowerInput.includes("meeting") || lowerInput.includes("consultation") || lowerInput.includes("start") || lowerInput.includes("talk") || lowerInput.includes("discuss")) {
        selectedResponse = "Contact us to discuss your requirements:\n\nPhone / WhatsApp: +91 93356 24540\nEmail: mrasr620107@gmail.com\nTelegram: https://t.me/X_INDUSTRIES216"
      }
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: selectedResponse,
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1200 + Math.random() * 800) // Realistic response delay
  }

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 z-50 w-11 h-11 rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 group animate-chatbot-logo ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-label="Open AI Assistant"
      >
        <Image
          src="/xai-logo.jpg"
          alt="XAI Industries Chat"
          width={44}
          height={44}
          className="w-full h-full object-cover"
        />
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#00D4FF] animate-ping opacity-20" />
        {/* Chat indicator */}
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#00FF88] rounded-full border-2 border-[#030712] flex items-center justify-center">
          <MessageCircle className="w-2 h-2 text-[#030712]" />
        </span>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-4 right-4 z-50 w-[320px] h-[420px] rounded-xl overflow-hidden transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(0, 20, 15, 0.95) 0%, rgba(10, 28, 20, 0.95) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 255, 136, 0.2)",
          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 136, 0.12)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-[#00FF88]/10">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden animate-chatbot-logo">
              <Image
                src="/xai-logo.jpg"
                alt="XAI Industries"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-xs">XAI Industries</h3>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
                <span className="text-[#7dd3fc]/60 text-[10px]">AI Assistant</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 rounded-md flex items-center justify-center text-[#7dd3fc] hover:text-[#00FF88] hover:bg-[#00FF88]/10 transition-all"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 h-[280px] overflow-y-auto p-3 space-y-3 hide-scrollbar">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {message.role === "assistant" ? (
                <div className="w-6 h-6 rounded-md flex-shrink-0 overflow-hidden">
                  <Image
                    src="/xai-logo.jpg"
                    alt="XAI"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center bg-[#001a12] border border-[#00FF88]/20">
                  <User className="w-3 h-3 text-[#00FF88]" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-2.5 py-2 rounded-xl ${
                  message.role === "assistant"
                    ? "bg-[#001a12]/60 border border-[#00FF88]/10 rounded-tl-sm"
                    : "bg-gradient-to-r from-[#00FF88]/20 to-[#00E0FF]/20 border border-[#00FF88]/20 rounded-tr-sm"
                }`}
              >
                <p className="text-[#f0fdf4]/90 text-xs leading-relaxed whitespace-pre-line">
                  {message.content}
                </p>
                <span className="text-[#7dd3fc]/40 text-[10px] mt-0.5 block">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-md flex-shrink-0 overflow-hidden">
                <Image
                  src="/xai-logo.jpg"
                  alt="XAI"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#001a12]/60 border border-[#00FF88]/10 rounded-xl rounded-tl-sm px-2.5 py-2">
                <div className="flex items-center gap-1.5">
                  <Loader2 className="w-3 h-3 text-[#00FF88] animate-spin" />
                  <span className="text-[#7dd3fc]/60 text-xs">Processing...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-[#00FF88]/10">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services..."
              className="flex-1 bg-[#001a12]/60 border border-[#00FF88]/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-[#7dd3fc]/40 focus:outline-none focus:border-[#00FF88]/30 transition-colors"
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#00FF88] to-[#00E0FF] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed p-0"
            >
              <Send className="w-4 h-4 text-[#030712]" />
            </Button>
          </div>
          <p className="text-[#7dd3fc]/40 text-[10px] text-center mt-1.5">
            Powered by XAI Industries
          </p>
        </form>
      </div>
    </>
  )
}
