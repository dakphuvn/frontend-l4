"use client"

import { Building, Presentation, Wifi, Coffee, Users, Mic } from "lucide-react"
import { useReservation } from "../../components/ReservationContext"
import { useRouter } from "next/navigation"

export default function Conference() {
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
      name: "Gói Hội Nghị Cơ Bản",
      price: "15.000.000",
      guests: "50-100 khách",
      features: [
        "Phòng hội nghị tiêu chuẩn",
        "Thiết bị âm thanh cơ bản",
        "Máy chiếu & màn hình",
        "Coffee break 2 lần",
        "Buffet trưa đơn giản",
        "Wifi miễn phí",
      ],
    },
    {
      name: "Gói Hội Nghị Cao Cấp",
      price: "30.000.000",
      guests: "100-200 khách",
      features: [
        "Phòng hội nghị VIP",
        "Hệ thống âm thanh chuyên nghiệp",
        "Màn hình LED lớn",
        "Coffee break cao cấp",
        "Set menu trưa đặc biệt",
        "Dịch vụ MC chuyên nghiệp",
        "Livestream sự kiện",
        "Phòng nghỉ riêng cho diễn giả",
      ],
      popular: true,
    },
    {
      name: "Gói Gala Doanh Nghiệp",
      price: "50.000.000",
      guests: "200-500 khách",
      features: [
        "Toàn bộ không gian nhà hàng",
        "Sân khấu & ánh sáng chuyên nghiệp",
        "Hệ thống âm thanh 5.1",
        "Welcome drink & canapé",
        "Gala dinner 8 món cao cấp",
        "Ban nhạc & MC",
        "Quay phim chuyên nghiệp",
        "Trang trí theo chủ đề công ty",
        "Phòng VIP cho lãnh đạo",
      ],
    },
  ]

  const facilities = [
    {
      icon: Presentation,
      title: "Thiết Bị Hiện Đại",
      description: "Máy chiếu 4K, màn hình LED, hệ thống âm thanh chuyên nghiệp",
    },
    {
      icon: Wifi,
      title: "Internet Tốc Độ Cao",
      description: "Wifi miễn phí tốc độ cao, hỗ trợ livestream và video call",
    },
    {
      icon: Coffee,
      title: "Dịch Vụ Catering",
      description: "Coffee break, buffet và set menu cao cấp",
    },
    {
      icon: Mic,
      title: "Hỗ Trợ Kỹ Thuật",
      description: "Đội ngũ kỹ thuật chuyên nghiệp hỗ trợ 24/7",
    },
  ]

  const eventTypes = [
    {
      title: "Hội Nghị Doanh Nghiệp",
      description: "Tổ chức hội nghị, họp cổ đông, ra mắt sản phẩm với không gian chuyên nghiệp",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "50-300 người",
    },
    {
      title: "Gala Dinner",
      description: "Tiệc gala sang trọng cho các sự kiện kỷ niệm, tôn vinh thành tích",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "100-500 người",
    },
    {
      title: "Hội Thảo Khoa Học",
      description: "Không gian lý tưởng cho các hội thảo, seminar và workshop",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "30-150 người",
    },
    {
      title: "Tiệc Tri Ân Khách Hàng",
      description: "Tổ chức tiệc tri ân, networking với khách hàng và đối tác",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "50-200 người",
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
            <h1 className="heading-primary text-white mb-4 text-shadow">Hội Nghị & Gala Doanh Nghiệp</h1>
            <p className="text-xl text-white/90 text-shadow">
              Không gian chuyên nghiệp cho các sự kiện doanh nghiệp đẳng cấp
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Sự Kiện Doanh Nghiệp Chuyên Nghiệp</h2>
              <p className="text-body mb-6">
                Với không gian sang trọng, thiết bị hiện đại và dịch vụ chuyên nghiệp, Đắk Phú là lựa chọn hoàn hảo cho
                các sự kiện doanh nghiệp. Từ hội nghị nhỏ đến gala dinner lớn, chúng tôi đảm bảo mọi sự kiện đều thành
                công tốt đẹp.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-primary-600">Sự kiện doanh nghiệp</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">500</div>
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

      {/* Facilities */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Tiện Nghi & Dịch Vụ</h2>
            <p className="text-body max-w-3xl mx-auto">
              Đầy đủ tiện nghi hiện đại và dịch vụ chuyên nghiệp cho sự kiện hoàn hảo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-tertiary mb-3">{facility.title}</h3>
                <p className="text-body">{facility.description}</p>
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
              Đa dạng các loại hình sự kiện doanh nghiệp phù hợp với mọi nhu cầu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-accent rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }} />
                <div className="p-6">
                  <h3 className="heading-tertiary mb-3">{event.title}</h3>
                  <p className="text-body mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary-600">{event.capacity}</span>
                    </div>
                    <button onClick={openReservationModal} className="btn-outline text-sm px-4 py-2">
                      Báo Giá
                    </button>
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
                      <Building className="w-4 h-4 text-secondary flex-shrink-0" />
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
          <h2 className="heading-secondary text-white mb-6">Sẵn Sàng Tổ Chức Sự Kiện Chuyên Nghiệp?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Hãy để chúng tôi giúp bạn tạo nên một sự kiện doanh nghiệp thành công với dịch vụ chuyên nghiệp và không
            gian đẳng cấp.
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
