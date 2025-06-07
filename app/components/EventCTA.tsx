"use client"

import { useRouter } from "next/navigation"
import { Calendar, Phone, MessageCircle, Sparkles, Users, Camera } from "lucide-react"

interface EventCTAProps {
  onOpenReservation: () => void
}

export default function EventCTA({ onOpenReservation }: EventCTAProps) {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const ctaFeatures = [
    {
      icon: Calendar,
      title: "Tư vấn miễn phí",
      description: "Đội ngũ chuyên gia sẵn sàng tư vấn 24/7",
    },
    {
      icon: Users,
      title: "Đội ngũ chuyên nghiệp",
      description: "Kinh nghiệm tổ chức hàng nghìn sự kiện",
    },
    {
      icon: Sparkles,
      title: "Dịch vụ trọn gói",
      description: "Từ ý tưởng đến thực hiện hoàn hảo",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-secondary text-white mb-6">Sẵn Sàng Tổ Chức Sự Kiện Của Bạn?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hãy để chúng tôi biến ý tưởng của bạn thành hiện thực với dịch vụ tổ chức sự kiện chuyên nghiệp, tận tâm và
            đầy sáng tạo.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {ctaFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-white/75 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Bắt Đầu Lên Kế Hoạch Ngay</h3>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">
            Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={onOpenReservation}
              className="bg-white text-primary hover:bg-gray-100 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Tư Vấn Miễn Phí</span>
            </button>

            <button
              onClick={() => handleNavigation("/events")}
              className="border border-white/30 text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <Camera className="w-5 h-5" />
              <span>Xem Portfolio</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/75 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>0905286377</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Tư vấn 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
