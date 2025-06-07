"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { useRouter } from "next/navigation"
import NewsletterModal from "./NewsletterModal"
import Image from "next/image"

// TikTok Icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

// Zalo Icon component
const ZaloIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169-.224-.487-.336-.951-.336-.951 0-1.595.448-1.931 1.344-.224.672-.336 1.568-.336 2.688 0 .896.056 1.624.168 2.184.168.84.616 1.26 1.344 1.26.728 0 1.176-.42 1.344-1.26.112-.56.168-1.288.168-2.184 0-1.12-.112-2.016-.336-2.688-.336-.896-.98-1.344-1.931-1.344-.464 0-.782.112-.951.336zm-3.024 0c-.169-.224-.487-.336-.951-.336-.951 0-1.595.448-1.931 1.344-.224.672-.336 1.568-.336 2.688 0 .896.056 1.624.168 2.184.168.84.616 1.26 1.344 1.26.728 0 1.176-.42 1.344-1.26.112-.56.168-1.288.168-2.184 0-1.12-.112-2.016-.336-2.688-.336-.896-.98-1.344-1.931-1.344-.464 0-.782.112-.951.336z" />
  </svg>
)

export default function Footer() {
  const router = useRouter()
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false)

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src="/images/logo-footer.png"
                  alt="Đắk Phú Restaurant Logo"
                  fill
                  className="object-contain"
                  sizes="64px"
                  priority
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Nhà Hàng Đắk Phú</h3>
                <p className="text-sm text-secondary font-bold text-center leading-tight">
                  Biển Việt lên bàn
                  <br />
                  Tươi Ngon Chuẩn Vị
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Khám phá tinh hoa ẩm thực biển Việt với không gian sang trọng, dịch vụ đẳng cấp và hải sản tươi sống chất
              lượng cao.
            </p>
            <button
              onClick={() => setIsNewsletterModalOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Đăng Ký Nhận Tin</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Giới Thiệu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/menu")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Thực Đơn
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/events")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Dịch Vụ Sự Kiện
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/gallery")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Thư Viện
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/blog")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Tin Tức
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Dịch Vụ</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/events/wedding")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Tiệc Cưới
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/events/conference")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Hội Nghị & Gala
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/events/private")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Sự Kiện Riêng
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Đặt Bàn
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/gallery/360-tour")}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                >
                  Tour Ảo 360°
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Thông Tin Liên Hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-300">4847+9VV, Độc Lập, Phường 7, Tuy Hòa, Phú Yên, Việt Nam</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">0905286377</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">info@dakphu.vn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">8:00 - 23:00 hàng ngày</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="font-semibold mb-3">Theo Dõi Chúng Tôi</h5>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/dakphu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/dakphu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://zalo.me/dakphu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-600 transition-colors"
                >
                  <ZaloIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com/@dakphu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-600 transition-colors"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@dakphu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Nhà Hàng Đắk Phú. Tất cả quyền được bảo lưu.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={() => handleNavigation("/privacy")}
              className="text-gray-400 hover:text-secondary text-sm transition-colors"
            >
              Chính Sách Bảo Mật
            </button>
            <button
              onClick={() => handleNavigation("/terms")}
              className="text-gray-400 hover:text-secondary text-sm transition-colors"
            >
              Điều Khoản Sử Dụng
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal isOpen={isNewsletterModalOpen} onClose={() => setIsNewsletterModalOpen(false)} />
    </footer>
  )
}
