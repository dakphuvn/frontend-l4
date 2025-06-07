"use client"

import { useRouter } from "next/navigation"
import { useReservation } from "../../components/ReservationContext"

export default function Tour360Page() {
  const { openReservationModal } = useReservation()
  const router = useRouter()

  const handleMenuNavigation = () => {
    router.push("/menu")
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
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <h1 className="heading-primary text-white mb-4 text-shadow">Tour 360° Nhà Hàng Đắk Phú</h1>
            <p className="text-xl text-white/90 text-shadow">
              Khám phá không gian sang trọng và ấm cúng qua góc nhìn 360 độ
            </p>
          </div>
        </div>
      </section>

      {/* 360 Tour Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Tour Description */}
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-6">Trải Nghiệm Thực Tế Ảo</h2>
              <p className="text-body max-w-3xl mx-auto mb-8">
                Hãy cùng khám phá không gian nhà hàng Đắk Phú với công nghệ tour 360°. Bạn có thể xem trước các khu vực
                dining, không gian sự kiện và cảm nhận được bầu không khí ấm cúng trước khi đến thăm.
              </p>
            </div>

            {/* 360 Tour Viewer */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tour 360° Không Gian Nhà Hàng</h3>
                <p className="text-gray-600">
                  Sử dụng chuột để xoay và khám phá không gian. Nhấn và kéo để di chuyển góc nhìn.
                </p>
              </div>

              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1748660658745!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHEzZFBRTmc.!2m2!1d13.1061575035147!2d109.3147422702505!3f11.822850563543852!4f-17.011891999176257!5f1.7220893896965626"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Tour 360° Nhà Hàng Đắk Phú"
                />
              </div>
            </div>

            {/* Tour Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Góc Nhìn 360°</h3>
                <p className="text-gray-600">Xem toàn cảnh không gian nhà hàng từ mọi góc độ</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Khám Phá Không Gian</h3>
                <p className="text-gray-600">Tham quan các khu vực dining và sự kiện</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tương Tác Dễ Dàng</h3>
                <p className="text-gray-600">Điều khiển đơn giản bằng chuột hoặc cảm ứng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-600 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Hãy Đến Trải Nghiệm Thực Tế</h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Tour 360° chỉ là khởi đầu. Hãy đến nhà hàng để cảm nhận trọn vẹn không gian ấm cúng và thưởng thức những
              món ăn tuyệt vời của Đắk Phú.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openReservationModal} className="btn-primary bg-white text-primary hover:bg-gray-50">
                Đặt Bàn Ngay
              </button>
              <button
                onClick={handleMenuNavigation}
                className="btn-outline border-white text-white hover:bg-white hover:text-primary"
              >
                Xem Thực Đơn
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
