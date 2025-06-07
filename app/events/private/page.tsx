"use client"

import { Gift, Cake, Music, Camera } from "lucide-react"
import { useReservation } from "../../components/ReservationContext"
import { useRouter } from "next/navigation"

export default function Private() {
  const { openReservationModal } = useReservation()
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const packages = [
    {
      name: "Gói Sinh Nhật Cơ Bản",
      price: "8.000.000",
      guests: "20-30 khách",
      features: [
        "Không gian riêng tư",
        "Trang trí sinh nhật cơ bản",
        "Menu 5 món gia đình",
        "Bánh sinh nhật",
        "Karaoke 3 tiếng",
        "Chụp ảnh lưu niệm",
      ],
    },
    {
      name: "Gói Kỷ Niệm Cao Cấp",
      price: "15.000.000",
      guests: "30-60 khách",
      features: [
        "Phòng VIP riêng biệt",
        "Trang trí theo chủ đề",
        "Menu 7 món đặc biệt",
        "Bánh kỷ niệm thiết kế riêng",
        "Karaoke + DJ",
        "Chụp ảnh chuyên nghiệp",
        "Khu vui chơi trẻ em",
        "Welcome drink",
      ],
      popular: true,
    },
    {
      name: "Gói Họp Mặt Gia Đình",
      price: "25.000.000",
      guests: "60-100 khách",
      features: [
        "Toàn bộ khu vực riêng",
        "Trang trí cao cấp toàn diện",
        "Menu 10 món hải sản",
        "Bánh đa tầng luxury",
        "Ban nhạc + MC",
        "Quay phim + Chụp ảnh",
        "Khu vui chơi trẻ em mở rộng",
        "Buffet tráng miệng",
        "Quà lưu niệm",
      ],
    },
  ]

  const services = [
    {
      icon: Gift,
      title: "Trang Trí Theo Chủ Đề",
      description: "Thiết kế và trang trí theo chủ đề yêu thích của bạn",
    },
    {
      icon: Cake,
      title: "Bánh Sinh Nhật Đặc Biệt",
      description: "Bánh sinh nhật được thiết kế riêng theo yêu cầu",
    },
    {
      icon: Music,
      title: "Karaoke & Âm Nhạc",
      description: "Hệ thống karaoke hiện đại và dịch vụ DJ chuyên nghiệp",
    },
    {
      icon: Camera,
      title: "Chụp Ảnh Lưu Niệm",
      description: "Ghi lại những khoảnh khắc đẹp nhất trong ngày đặc biệt",
    },
  ]

  const eventTypes = [
    {
      title: "Sinh Nhật",
      description: "Tổ chức sinh nhật ấm cúng cho mọi lứa tuổi",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Trang trí sinh nhật", "Bánh kem", "Karaoke", "Chụp ảnh"],
    },
    {
      title: "Kỷ Niệm Ngày Cưới",
      description: "Kỷ niệm những cột mốc quan trọng trong hôn nhân",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Trang trí lãng mạn", "Menu đặc biệt", "Âm nhạc", "Quà lưu niệm"],
    },
    {
      title: "Họp Mặt Gia Đình",
      description: "Không gian ấm cúng cho các buổi họp mặt gia đình",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Menu gia đình", "Khu vui chơi trẻ em", "Karaoke", "Không gian rộng"],
    },
    {
      title: "Tiệc Thôi Nôi",
      description: "Tổ chức tiệc thôi nôi đáng nhớ cho bé yêu",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Trang trí dễ thương", "Menu trẻ em", "Khu vui chơi", "Chụp ảnh gia đình"],
    },
  ]

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
            <h1 className="heading-primary text-white mb-4 text-shadow">Sự Kiện Riêng Tư</h1>
            <p className="text-xl text-white/90 text-shadow">
              Tạo nên những kỷ niệm đẹp với không gian ấm cúng và riêng tư
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Không Gian Riêng Tư Ấm Cúng</h2>
              <p className="text-body mb-6">
                Tại Đắk Phú, chúng tôi hiểu rằng những dịp đặc biệt trong gia đình cần được tổ chức trong không gian ấm
                cúng và riêng tư. Với dịch vụ cá nhân hóa và menu đa dạng, chúng tôi cam kết mang đến cho bạn những kỷ
                niệm đáng nhớ.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">300+</div>
                  <div className="text-sm text-primary-600">Sự kiện riêng tư</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">100</div>
                  <div className="text-sm text-primary-600">Sức chứa tối đa</div>
                </div>
              </div>
              <button onClick={openReservationModal} className="btn-primary">
                Tư Vấn Miễn Phí
              </button>
            </div>
            <div className="relative">
              <div
                className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
                style={{ backgroundImage: "url(/placeholder.svg?height=600&width=800)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Dịch Vụ Đặc Biệt</h2>
            <p className="text-body max-w-3xl mx-auto">
              Các dịch vụ được thiết kế riêng để tạo nên những kỷ niệm đáng nhớ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-tertiary mb-3">{service.title}</h3>
                <p className="text-body">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Các Loại Sự Kiện</h2>
            <p className="text-body max-w-3xl mx-auto">
              Đa dạng các loại hình sự kiện riêng tư phù hợp với mọi dịp đặc biệt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-accent rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }} />
                <div className="p-6">
                  <h3 className="heading-tertiary mb-3">{event.title}</h3>
                  <p className="text-body mb-4">{event.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {event.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Gift className="w-3 h-3 text-secondary" />
                        <span className="text-xs text-primary-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={openReservationModal} className="btn-outline text-sm px-4 py-2 w-full">
                    Báo Giá
                  </button>
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
            <p className="text-body max-w-3xl mx-auto">Lựa chọn gói dịch vụ phù hợp với quy mô và ngân sách sự kiện</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  pkg.popular ? "border-secondary transform scale-105" : "border-primary-100"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Phổ Biến Nhất
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="heading-tertiary mb-4">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}₫</div>
                  <div className="text-sm text-primary-600">{pkg.guests}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Gift className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-primary-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openReservationModal}
                  className={`w-full text-center ${pkg.popular ? "btn-secondary" : "btn-outline"}`}
                >
                  Chọn Gói Này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary text-white mb-6">Sẵn Sàng Tạo Nên Kỷ Niệm Đặc Biệt?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Hãy để chúng tôi giúp bạn tổ chức một sự kiện riêng tư đáng nhớ với dịch vụ cá nhân hóa và không gian ấm
            cúng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openReservationModal} className="btn-secondary">
              Tư Vấn Miễn Phí
            </button>
            <button
              onClick={() => handleNavigation("/gallery")}
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Xem Thư Viện
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
