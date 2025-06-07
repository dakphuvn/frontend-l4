"use client"

import { Heart, Building, Gift } from "lucide-react"
import { useReservation } from "../components/ReservationContext"
import { useRouter } from "next/navigation"

export default function Events() {
  const { openReservationModal } = useReservation()
  const router = useRouter()

  const eventTypes = [
    {
      icon: Heart,
      title: "Tiệc Cưới Lãng Mạn",
      description: "Tổ chức tiệc cưới đẳng cấp với không gian lãng mạn bên bờ biển, tạo nên những kỷ niệm đẹp nhất",
      features: [
        "Trang trí hoa tươi cao cấp",
        "Menu tiệc cưới đặc biệt",
        "Ekip tổ chức chuyên nghiệp",
        "Chụp ảnh cưới miễn phí",
        "Âm thanh ánh sáng hiện đại",
        "Phòng thay đồ riêng biệt",
      ],
      image: "/placeholder.svg?height=400&width=600",
      capacity: "50-300 khách",
      price: "Từ 1.500.000₫/bàn",
      link: "/events/wedding",
    },
    {
      icon: Building,
      title: "Hội Nghị & Gala Doanh Nghiệp",
      description: "Không gian trang trọng và chuyên nghiệp cho các sự kiện doanh nghiệp, hội nghị và gala đẳng cấp",
      features: [
        "Thiết bị hội nghị hiện đại",
        "Dịch vụ catering cao cấp",
        "Hỗ trợ kỹ thuật 24/7",
        "Bãi đỗ xe rộng rãi",
        "Phòng VIP riêng biệt",
        "Dịch vụ MC chuyên nghiệp",
      ],
      image: "/placeholder.svg?height=400&width=600",
      capacity: "100-500 khách",
      price: "Từ 2.000.000₫/bàn",
      link: "/events/conference",
    },
    {
      icon: Gift,
      title: "Sự Kiện Riêng Tư",
      description: "Tổ chức sinh nhật, kỷ niệm và các buổi họp mặt gia đình trong không gian ấm cúng và riêng tư",
      features: [
        "Không gian riêng tư",
        "Menu tùy chỉnh theo yêu cầu",
        "Trang trí theo chủ đề",
        "Dịch vụ cá nhân hóa",
        "Khu vui chơi trẻ em",
        "Karaoke cao cấp",
      ],
      image: "/placeholder.svg?height=400&width=600",
      capacity: "20-100 khách",
      price: "Từ 800.000₫/bàn",
      link: "/events/private",
    },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/placeholder.svg?height=600&width=1200)" }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <h1 className="heading-primary text-white mb-4 text-shadow">Dịch Vụ Sự Kiện</h1>
            <p className="text-xl text-white/90 text-shadow">
              Tạo nên những kỷ niệm đáng nhớ với dịch vụ tổ chức sự kiện đẳng cấp
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Các Loại Sự Kiện</h2>
            <p className="text-body max-w-3xl mx-auto">
              Từ tiệc cưới lãng mạn đến hội nghị trang trọng, chúng tôi mang đến những trải nghiệm sự kiện đáng nhớ với
              dịch vụ chuyên nghiệp và không gian đẳng cấp.
            </p>
          </div>

          <div className="space-y-16">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <event.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="heading-tertiary">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-primary-600">
                        <span>{event.capacity}</span>
                        <span>•</span>
                        <span>{event.price}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-body mb-6">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {event.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                        <span className="text-primary-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button onClick={() => handleNavigation(event.link)} className="btn-primary">
                      Tìm Hiểu Thêm
                    </button>
                    <button onClick={openReservationModal} className="btn-outline">
                      Báo Giá
                    </button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Gói Dịch Vụ</h2>
            <p className="text-body max-w-3xl mx-auto">Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="heading-tertiary mb-4">Gói Cơ Bản</h3>
                <div className="text-3xl font-bold text-primary mb-2">15.000.000₫</div>
                <div className="text-sm text-primary-600">Trọn gói sự kiện</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Không gian sảnh chính</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Menu 6 món cơ bản</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Trang trí đơn giản</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Âm thanh cơ bản</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Phục vụ 50 khách</span>
                </li>
              </ul>

              <button onClick={openReservationModal} className="w-full text-center btn-outline">
                Chọn Gói Này
              </button>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg ring-4 ring-secondary transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Phổ Biến Nhất
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="heading-tertiary mb-4">Gói Cao Cấp</h3>
                <div className="text-3xl font-bold text-primary mb-2">35.000.000₫</div>
                <div className="text-sm text-primary-600">Trọn gói sự kiện</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Không gian VIP + sảnh chính</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Menu 8 món cao cấp</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Trang trí hoa tươi</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Âm thanh ánh sáng chuyên nghiệp</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Chụp ảnh miễn phí</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Phục vụ 100 khách</span>
                </li>
              </ul>

              <button onClick={openReservationModal} className="w-full text-center btn-secondary">
                Chọn Gói Này
              </button>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="heading-tertiary mb-4">Gói Hoàng Gia</h3>
                <div className="text-3xl font-bold text-primary mb-2">65.000.000₫</div>
                <div className="text-sm text-primary-600">Trọn gói sự kiện</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Toàn bộ không gian nhà hàng</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Menu 10 món đặc biệt</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Trang trí cao cấp toàn diện</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Show ánh sáng 3D</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Ekip chụp ảnh chuyên nghiệp</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">MC + Ban nhạc</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-primary-700">Phục vụ 200 khách</span>
                </li>
              </ul>

              <button onClick={openReservationModal} className="w-full text-center btn-outline">
                Chọn Gói Này
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Thư Viện Sự Kiện</h2>
            <p className="text-body max-w-3xl mx-auto">
              Những khoảnh khắc đẹp từ các sự kiện đã được tổ chức tại Đắk Phú
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg card-hover">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(/placeholder.svg?height=300&width=400)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold">Sự Kiện {index}</h4>
                  <p className="text-sm opacity-90">Tiệc cưới sang trọng</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => handleNavigation("/gallery")} className="btn-secondary">
              Xem Thêm Hình Ảnh
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary text-white mb-6">Sẵn Sàng Tổ Chức Sự Kiện Của Bạn?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Hãy để chúng tôi biến ý tưởng của bạn thành hiện thực với dịch vụ tư vấn miễn phí và báo giá chi tiết cho sự
            kiện của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openReservationModal} className="btn-secondary">
              Tư Vấn Miễn Phí
            </button>
            <button
              onClick={() => handleNavigation("/gallery/360-tour")}
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Tham Quan Không Gian
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
