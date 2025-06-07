"use client"

import { Heart, Users, Award, Leaf } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Tình Yêu Ẩm Thực",
    description: "Chúng tôi đặt tình yêu và đam mê vào từng món ăn, mang đến trải nghiệm ẩm thực đích thực.",
  },
  {
    icon: Users,
    title: "Phục Vụ Tận Tâm",
    description: "Đội ngũ nhân viên được đào tạo chuyên nghiệp, luôn sẵn sàng phục vụ với thái độ nhiệt tình.",
  },
  {
    icon: Award,
    title: "Chất Lượng Hàng Đầu",
    description: "Cam kết sử dụng nguyên liệu tươi ngon, quy trình chế biến nghiêm ngặt đảm bảo chất lượng.",
  },
  {
    icon: Leaf,
    title: "Tự Nhiên & Sạch",
    description: "Ưu tiên sử dụng nguyên liệu hữu cơ, địa phương, thân thiện với môi trường.",
  },
]

export default function CoreValues() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Giá Trị Cốt Lõi</h2>
          <p className="text-body max-w-2xl mx-auto">
            Những giá trị mà chúng tôi luôn theo đuổi để mang đến trải nghiệm ẩm thực tuyệt vời nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
