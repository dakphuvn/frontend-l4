"use client"

import { Calendar, Users, Camera, Sparkles, Star, Award, Clock, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EventServices() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  const eventTypes = [
    {
      id: 1,
      name: "Tiệc Cưới",
      description: "Tổ chức tiệc cưới trọn gói, lãng mạn và đáng nhớ với không gian view biển tuyệt đẹp.",
      icon: Calendar,
      features: ["Trang trí lãng mạn", "Menu đặc biệt", "Nhiếp ảnh chuyên nghiệp", "MC dẫn chương trình"],
      image: "/placeholder.svg?height=300&width=400",
      price: "Từ 2.500.000₫/bàn",
      path: "/events/wedding",
    },
    {
      id: 2,
      name: "Hội Nghị & Gala",
      description: "Tổ chức hội nghị, team building, gala dinner chuyên nghiệp với đầy đủ tiện nghi hiện đại.",
      icon: Users,
      features: ["Âm thanh ánh sáng", "Màn hình LED", "Wifi tốc độ cao", "Phục vụ chuyên nghiệp"],
      image: "/placeholder.svg?height=300&width=400",
      price: "Từ 1.800.000₫/bàn",
      path: "/events/conference",
    },
    {
      id: 3,
      name: "Sự Kiện Cá Nhân",
      description: "Tổ chức sinh nhật, kỷ niệm, tiệc gia đình ấm cúng trong không gian riêng tư.",
      icon: Sparkles,
      features: ["Không gian riêng tư", "Menu linh hoạt", "Trang trí theo chủ đề", "Dịch vụ tận tâm"],
      image: "/placeholder.svg?height=300&width=400",
      price: "Từ 1.200.000₫/bàn",
      path: "/events/private",
    },
    {
      id: 4,
      name: "Sự Kiện Giải Trí",
      description: "Tổ chức concert, festival, triển lãm nghệ thuật độc đáo với sân khấu chuyên nghiệp.",
      icon: Camera,
      features: ["Sân khấu lớn", "Hệ thống âm thanh", "Khu vực VIP", "An ninh đảm bảo"],
      image: "/placeholder.svg?height=300&width=400",
      price: "Liên hệ báo giá",
      path: "/events",
    },
  ]

  const achievements = [
    { icon: Award, number: "1000+", label: "Sự kiện thành công" },
    { icon: Star, number: "4.9/5", label: "Đánh giá khách hàng" },
    { icon: Users, number: "100,000+", label: "Khách hàng hài lòng" },
    { icon: Clock, number: "30+", label: "Năm kinh nghiệm" },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Tổ Chức Sự Kiện Đặc Biệt</h2>
          <p className="text-body max-w-4xl mx-auto">
            Với kinh nghiệm hơn 30 năm trong ngành tổ chức sự kiện, Đắk Phú tự hào mang đến những trải nghiệm đáng nhớ
            cho mọi dịp đặc biệt của bạn. Từ tiệc cưới lãng mạn đến hội nghị chuyên nghiệp, chúng tôi cam kết tạo nên
            những khoảnh khắc hoàn hảo.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Event Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {eventTypes.map((type) => (
            <div key={type.id} className="bg-accent rounded-2xl overflow-hidden shadow-lg card-hover">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div
                    className="h-64 md:h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${type.image})` }}
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="heading-tertiary">{type.name}</h3>
                  </div>

                  <p className="text-body mb-6">{type.description}</p>

                  <div className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">{type.price}</div>
                    <button className="btn-outline text-sm px-4 py-2" onClick={() => handleNavigation(type.path)}>
                      Tìm hiểu thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
