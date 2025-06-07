"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { X, Mail, User, Phone, Gift, Calendar, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: "", email: "", phone: "" })
      onClose()
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePrivacyClick = () => {
    onClose()
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Đăng Ký Thành Công!</h3>
            <p className="text-gray-600">
              Cảm ơn bạn đã đăng ký nhận tin tức từ Đắk Phú. Chúng tôi sẽ gửi những thông tin mới nhất đến email của
              bạn.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Đăng Ký Nhận Tin</h3>
            </div>

            <div className="mb-6 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                  <Gift className="w-4 h-4 text-primary" />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Ưu Đãi Độc Quyền:</span> Nhận voucher giảm giá và khuyến mãi đặc biệt
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Thông Tin Sự Kiện:</span> Cập nhật sớm nhất về các sự kiện và chương
                  trình
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                  <Utensils className="w-4 h-4 text-primary" />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Menu Mới:</span> Khám phá món ăn mới trước khi ra mắt chính thức
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Họ và tên *
                </Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    placeholder="Nhập địa chỉ email của bạn"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Số điện thoại
                </Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10"
                    placeholder="Nhập số điện thoại (tùy chọn)"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {isSubmitting ? "Đang xử lý..." : "Đăng Ký Ngay"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <Link
                href="/privacy"
                className="text-primary hover:underline"
                prefetch={true}
                onClick={handlePrivacyClick}
              >
                Chính sách bảo mật
              </Link>{" "}
              của chúng tôi.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
