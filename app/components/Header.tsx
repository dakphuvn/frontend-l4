"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { useReservation } from "./ReservationContext"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openReservationModal } = useReservation()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
    setIsMenuOpen(false)
  }

  const navigation = [
    { name: "Trang Chủ", href: "/" },
    { name: "Giới Thiệu", href: "/about" },
    { name: "Thực Đơn", href: "/menu" },
    { name: "Thư Viện", href: "/gallery" },
    { name: "Liên Hệ", href: "/contact" },
    { name: "Tin Tức", href: "/blog" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Hotline: 0905286377</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Độc Lập, Phường 7, Tuy Hòa, Phú Yên</span>
            </div>
          </div>
          <div className="text-sm">Giờ mở cửa: 8:00 - 23:00 hàng ngày</div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-custom shadow-lg" : "bg-white/90 backdrop-blur-custom"
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button onClick={() => handleNavigation("/")} className="flex items-center space-x-4">
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                  src="/images/logo-header.png"
                  alt="Đắk Phú Restaurant Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 80px, 96px"
                />
              </div>
              <div>
                <h1 className="font-heading text-3xl font-bold text-primary">Đắk Phú</h1>
                <p className="text-sm text-center text-secondary font-medium">
                  Biển Việt lên bàn
                  <br />
                  Tươi Ngon Chuẩn Vị
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-primary-700 hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button onClick={openReservationModal} className="btn-outline">
                Đặt Bàn
              </button>
              <button onClick={() => handleNavigation("/events")} className="btn-primary">
                Tổ Chức Sự Kiện
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-primary-100">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="text-primary-700 hover:text-primary font-medium py-2 transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-primary-100">
                  <button onClick={openReservationModal} className="btn-outline text-center">
                    Đặt Bàn
                  </button>
                  <button onClick={() => handleNavigation("/events")} className="btn-primary text-center">
                    Tổ Chức Sự Kiện
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
