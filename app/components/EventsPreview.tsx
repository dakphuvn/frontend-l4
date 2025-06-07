"use client"

import { Calendar, Users, Camera, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { useReservation } from "./ReservationContext"

export default function EventsPreview() {
  const router = useRouter()
  const { openReservationModal } = useReservation()

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  // Define event types with icons and descriptions
  const eventTypes = [
    {
      id: 1,
      name: "Tiệc Cưới",
      description: "Tổ chức tiệc cưới trọn gói, lãng mạn và đáng nhớ.",
      icon: Calendar,
    },
    {
      id: 2,
      name: "Hội Nghị & Sự Kiện Doanh Nghiệp",
      description: "Tổ chức hội nghị, team building, gala dinner chuyên nghiệp.",
      icon: Users,
    },
    {
      id: 3,
      name: "Sự Kiện Cá Nhân",
      description: "Tổ chức sinh nhật, kỷ niệm, tiệc gia đình ấm cúng.",
      icon: Sparkles,
    },
    {
      id: 4,
      name: "Sự Kiện Giải Trí",
      description: "Tổ chức concert, festival, triển lãm nghệ thuật độc đáo.",
      icon: Camera,
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Các Loại Hình Sự Kiện</h2>
          <p className="text-lg text-gray-500">
            Chúng tôi cung cấp dịch vụ tổ chức sự kiện đa dạng, đáp ứng mọi nhu cầu của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventTypes.map((type) => (
            <div key={type.id} className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary text-4xl mb-4">
                <type.icon />
              </div>
              <h3 className="heading-tertiary mb-2">{type.name}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="heading-tertiary text-white mb-4">Bạn Có Ý Tưởng Sự Kiện Đặc Biệt?</h3>
          <p className="text-lg mb-8 opacity-90">
            Hãy để chúng tôi biến ý tưởng của bạn thành hiện thực với dịch vụ tư vấn miễn phí
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openReservationModal} className="btn-secondary">
              Tư Vấn Miễn Phí
            </button>
            <button
              onClick={() => handleNavigation("/gallery")}
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Xem Thư Viện Sự Kiện
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
