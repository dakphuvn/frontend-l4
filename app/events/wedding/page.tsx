"use client"

import { Heart, Camera, Music, Flower, Users } from "lucide-react"
import { useReservation } from "../../components/ReservationContext"
import { useRouter } from "next/navigation"

export default function Wedding() {
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
      name: "Gói Cưới Cơ Bản",
      price: "25.000.000",
      guests: "50-80 khách",
      features: [
        "Trang trí hoa tươi cơ bản",
        "Menu 6 món truyền thống",
        "Âm thanh ánh sáng cơ bản",
        "MC dẫn chương trình",
        "Chụp ảnh lưu niệm (50 ảnh)",
        "Bánh cưới 2 tầng",
      ],
    },
    {
      name: "Gói Cưới Cao Cấp",
      price: "45.000.000",
      guests: "80-150 khách",
      features: [
        "Trang trí hoa tươi cao cấp",
        "Menu 8 món đặc biệt",
        "Âm thanh ánh sáng chuyên nghiệp",
        "MC + Ban nhạc acoustic",
        "Chụp ảnh chuyên nghiệp (100 ảnh)",
        "Bánh cưới 3 tầng thiết kế riêng",
        "Phòng thay đồ cô dâu",
        "Xe hoa trang trí",
      ],
      popular: true,
    },
    {
      name: "Gói Cưới Hoàng Gia",
      price: "75.000.000",
      guests: "150-300 khách",
      features: [
        "Trang trí toàn diện theo chủ đề",
        "Menu 10 món hải sản cao cấp",
        "Show ánh sáng 3D",
        "MC + Ban nhạc + Ca sĩ",
        "Quay phim + Chụp ảnh (200 ảnh)",
        "Bánh cưới 4 tầng luxury",
        "Phòng thay đồ VIP",
        "Xe hoa + Trang trí đường dẫn",
        "Pháo hoa kết thúc",
      ],
    },
  ]

  const services = [
    {
      icon: Flower,
      title: "Trang Trí Hoa Tươi",
      description: "Thiết kế và trang trí hoa tươi theo chủ đề cưới của bạn",
    },
    {
      icon: Camera,
      title: "Chụp Ảnh Cưới",
      description: "Ekip chụp ảnh chuyên nghiệp ghi lại những khoảnh khắc đẹp nhất",
    },
    {
      icon: Music,
      title: "Âm Nhạc & MC",
      description: "Dịch vụ MC và ban nhạc tạo không khí lãng mạn cho đám cưới",
    },
    {
      icon: Users,
      title: "Phục Vụ Chuyên Nghiệp",
      description: "Đội ngũ phục vụ được đào tạo chuyên biệt cho tiệc cưới",
    },
  ]

  const gallery = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
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
            <h1 className="heading-primary text-white mb-4 text-shadow">Tiệc Cưới Lãng Mạn</h1>
            <p className="text-xl text-white/90 text-shadow">
              Tạo nên đám cưới trong mơ với không gian lãng mạn bên bờ biển
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Đám Cưới Hoàn Hảo Bên Bờ Biển</h2>
              <p className="text-body mb-6">
                Tại Đắk Phú, chúng tôi hiểu rằng ngày cưới là một trong những ngày quan trọng nhất trong đời. Với không
                gian lãng mạn bên bờ biển, dịch vụ chuyên nghiệp và menu hải sản tươi ngon, chúng tôi cam kết mang đến
                cho bạn một đám cưới hoàn hảo.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-primary-600">Tiệc cưới thành công</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-primary-600">Năm kinh nghiệm</div>
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
            <h2 className="heading-secondary mb-6">Dịch Vụ Tiệc Cưới</h2>
            <p className="text-body max-w-3xl mx-auto">
              Chúng tôi cung cấp đầy đủ các dịch vụ cần thiết để tạo nên một đám cưới hoàn hảo
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

      {/* Packages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Gói Tiệc Cưới</h2>
            <p className="text-body max-w-3xl mx-auto">
              Lựa chọn gói tiệc cưới phù hợp với nhu cầu và ngân sách của bạn
            </p>
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
                      <Heart className="w-4 h-4 text-secondary flex-shrink-0" />
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

      {/* Gallery */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Thư Viện Tiệc Cưới</h2>
            <p className="text-body max-w-3xl mx-auto">
              Những khoảnh khắc đẹp từ các tiệc cưới đã được tổ chức tại Đắk Phú
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg card-hover">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Quy Trình Tổ Chức</h2>
            <p className="text-body max-w-3xl mx-auto">
              Quy trình chuyên nghiệp đảm bảo đám cưới của bạn diễn ra suôn sẻ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Tư Vấn & Báo Giá</h3>
              <p className="text-primary-600 text-sm">Tư vấn chi tiết và báo giá minh bạch</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Lên Kế Hoạch</h3>
              <p className="text-primary-600 text-sm">Lập kế hoạch chi tiết cho ngày cưới</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Chuẩn Bị</h3>
              <p className="text-primary-600 text-sm">Chuẩn bị trang trí và setup không gian</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Thực Hiện</h3>
              <p className="text-primary-600 text-sm">Tổ chức và điều phối suốt sự kiện</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary text-white mb-6">Sẵn Sàng Tạo Nên Đám Cưới Trong Mơ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Hãy để chúng tôi giúp bạn tạo nên một ngày cưới hoàn hảo với dịch vụ chuyên nghiệp và không gian lãng mạn
            bên bờ biển.
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
