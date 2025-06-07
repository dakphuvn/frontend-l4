"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Send } from "lucide-react"

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  })

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      guests: "",
      date: "",
      time: "",
      message: "",
    })
    // Close modal
    onClose()
    // Show success message
    alert("Đặt bàn thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl transform scale-80">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 hover:bg-primary-100 transition-colors z-10"
        >
          <X className="w-5 h-5 text-primary" />
        </button>

        <div className="p-6 md:p-8">
          <h2 className="heading-tertiary mb-6 text-center">Liên Hệ / Đặt Bàn</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                placeholder="Nhập email"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-primary-700 mb-2">
                  Số khách *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                >
                  <option value="">Chọn số khách</option>
                  <option value="1-2">1-2 người</option>
                  <option value="3-4">3-4 người</option>
                  <option value="5-8">5-8 người</option>
                  <option value="9-15">9-15 người</option>
                  <option value="16+">16+ người</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-primary-700 mb-2">
                  Ngày *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-primary-700 mb-2">
                  Giờ *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-all duration-200"
                >
                  <option value="">Chọn giờ</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                Yêu cầu đặc biệt
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                placeholder="Nhập yêu cầu đặc biệt (nếu có)"
              />
            </div>

            <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Gửi Yêu Cầu</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
