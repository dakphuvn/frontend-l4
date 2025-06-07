"use client"

import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { Play, ChevronRight, Star, Award, Users, Eye } from "lucide-react"
import { useReservation } from "./ReservationContext"

const slides = [
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Khám phá Tinh Hoa Biển Cả",
    subtitle: "Đắk Phú – Đẳng cấp tạo nên khác biệt",
    description: "Trải nghiệm ẩm thực hải sản đỉnh cao với tầm nhìn vô tận ra biển",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Không Gian Sang Trọng",
    subtitle: "Nơi mọi khoảnh khắc trở nên đặc biệt",
    description: "Thiết kế tinh tế, dịch vụ đẳng cấp cho những dịp quan trọng",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Hải Sản Tươi Sống",
    subtitle: "Từ biển cả đến bàn ăn của bạn",
    description: "Nguyên liệu tươi ngon nhất được chọn lọc kỹ càng mỗi ngày",
  },
]

const StatItem = memo(({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <div className="text-center">
    <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-3 mx-auto">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-sm text-white/80">{label}</div>
  </div>
))

StatItem.displayName = "StatItem"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { openReservationModal } = useReservation()

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden will-change-scroll">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-4xl text-center">
            <div className="animate-fade-in">
              <h1 className="heading-primary text-white mb-6 text-shadow">{slides[currentSlide].title}</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-amber-300 font-bold mb-6 text-shadow-lg drop-shadow-md tracking-wide bg-black/10 backdrop-blur-sm px-4 py-2 rounded-lg animate-pulse">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed text-shadow">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up justify-center">
              <Link href="/menu" className="btn-primary flex items-center justify-center space-x-2">
                <span>Xem Thực Đơn</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <button
                onClick={openReservationModal}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Đặt Bàn Ngay</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                href="/events"
                className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary flex items-center justify-center space-x-2"
              >
                <span>Tổ Chức Sự Kiện</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/gallery/360-tour"
                className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary flex items-center justify-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>Tour Ảo 360°</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
              <StatItem icon={Star} value="5★" label="Đánh Giá" />
              <StatItem icon={Award} value="30+" label="Năm Kinh Nghiệm" />
              <StatItem icon={Users} value="7000+" label="Khách Hàng Thân Thiết" />
              <StatItem icon={Play} value="1000+" label="Sự Kiện Thành Công" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-secondary scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
