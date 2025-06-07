"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Send, Bot } from "lucide-react"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Xin chào! Tôi là trợ lý ảo của Nhà Hàng Đắk Phú. Tôi có thể giúp gì cho bạn?", isUser: false },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message
    setMessages([...messages, { text: message, isUser: true }])

    // Simulate bot response
    setTimeout(() => {
      let response = "Cảm ơn bạn đã liên hệ với chúng tôi. Nhân viên của chúng tôi sẽ phản hồi sớm nhất có thể."

      // Simple keyword responses
      const lowerMsg = message.toLowerCase()
      if (lowerMsg.includes("đặt bàn") || lowerMsg.includes("reservation")) {
        response = "Bạn có thể đặt bàn bằng cách nhấn vào nút 'Đặt Bàn' trên trang web hoặc gọi số 0905286377."
      } else if (lowerMsg.includes("giờ") || lowerMsg.includes("mở cửa") || lowerMsg.includes("time")) {
        response = "Nhà hàng Đắk Phú mở cửa từ 10:00 - 22:00 hàng ngày, kể cả ngày lễ và Tết."
      } else if (lowerMsg.includes("địa chỉ") || lowerMsg.includes("location") || lowerMsg.includes("ở đâu")) {
        response = "Nhà hàng Đắk Phú tọa lạc tại: 4847+9VV, Độc Lập, Phường 7, Tuy Hòa, Phú Yên, Việt Nam."
      } else if (lowerMsg.includes("menu") || lowerMsg.includes("món ăn") || lowerMsg.includes("thực đơn")) {
        response = "Bạn có thể xem thực đơn đầy đủ của chúng tôi tại mục 'Thực Đơn' trên trang web."
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }])
    }, 1000)

    // Clear input
    setMessage("")
  }

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-secondary-600 shadow-lg flex items-center justify-center text-white hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 transform hover:scale-110 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Mở chatbot"
      >
        <Bot className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 z-30 w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat header */}
        <div className="bg-gradient-to-r from-primary to-primary-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold">Trợ Lý Đắk Phú</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-xs opacity-80">Đang trực tuyến</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat messages */}
        <div className="p-4 h-80 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.isUser ? "bg-primary text-white rounded-tr-none" : "bg-accent text-primary-800 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
