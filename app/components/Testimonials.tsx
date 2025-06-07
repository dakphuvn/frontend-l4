"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    location: "Tuy Hòa, Phú Yên",
    rating: 5,
    comment: "Đồ ăn ngon, không gian đẹp, phục vụ tận tình. Đặc biệt món cá nướng rất tuyệt vời!",
    date: "2024-01-15",
    avatar: "NA", // Initials for fallback
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    location: "TP. Hồ Chí Minh",
    rating: 5,
    comment: "Lần đầu đến Phú Yên và được giới thiệu đến Đắk Phú. Thực sự không thất vọng, sẽ quay lại!",
    date: "2024-01-10",
    avatar: "TB",
  },
  {
    id: 3,
    name: "Lê Minh Cường",
    location: "Hà Nội",
    rating: 5,
    comment: "Nhà hàng có view đẹp, đồ ăn đậm đà hương vị miền Trung. Giá cả hợp lý.",
    date: "2024-01-08",
    avatar: "LC",
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    location: "Đà Nẵng",
    rating: 5,
    comment: "Tổ chức tiệc cưới tại đây rất hoàn hảo. Đội ngũ nhân viên chuyên nghiệp, tận tâm.",
    date: "2024-01-05",
    avatar: "PD",
  },
  {
    id: 5,
    name: "Hoàng Minh Tuấn",
    location: "Nha Trang",
    rating: 5,
    comment: "Không gian sang trọng, món ăn đa dạng. Đặc biệt phù hợp cho các buổi họp mặt gia đình.",
    date: "2024-01-03",
    avatar: "HT",
  },
  {
    id: 6,
    name: "Võ Thị Mai",
    location: "Quy Nhon",
    rating: 5,
    comment: "Dịch vụ tuyệt vời, giá cả phải chăng. Nhà hàng có vị trí đẹp, view biển tuyệt vời.",
    date: "2024-01-01",
    avatar: "VM",
  },
  {
    id: 7,
    name: "Nguyễn Thị Lan",
    location: "Huế",
    rating: 5,
    comment: "Không gian nhà hàng rất ấm cúng, phù hợp cho gia đình. Món ăn đậm đà hương vị truyền thống.",
    date: "2023-12-28",
    avatar: "NL",
  },
  {
    id: 8,
    name: "Đặng Văn Hùng",
    location: "Cần Thơ",
    rating: 5,
    comment: "Tổ chức sinh nhật con tại đây rất thành công. Nhân viên nhiệt tình, chu đáo từng chi tiết.",
    date: "2023-12-25",
    avatar: "DH",
  },
  {
    id: 9,
    name: "Lý Thị Hoa",
    location: "Vũng Tàu",
    rating: 5,
    comment: "Hải sản tươi ngon, chế biến tinh tế. Đặc biệt món tôm nướng muối ớt rất đặc sắc.",
    date: "2023-12-22",
    avatar: "LH",
  },
  {
    id: 10,
    name: "Trương Minh Đức",
    location: "Biên Hòa",
    rating: 5,
    comment: "Nhà hàng có view nhìn ra biển tuyệt đẹp. Thích hợp cho các buổi hẹn hò lãng mạn.",
    date: "2023-12-20",
    avatar: "TD",
  },
  {
    id: 11,
    name: "Phan Thị Ngọc",
    location: "Long An",
    rating: 5,
    comment: "Dịch vụ chuyên nghiệp, thực đơn đa dạng. Đặc biệt món cháo cá rất ngon và bổ dưỡng.",
    date: "2023-12-18",
    avatar: "PN",
  },
  {
    id: 12,
    name: "Bùi Văn Thành",
    location: "Đồng Nai",
    rating: 5,
    comment: "Tổ chức họp mặt công ty tại đây rất ấn tượng. Không gian rộng rãi, âm thanh tốt.",
    date: "2023-12-15",
    avatar: "BT",
  },
  {
    id: 13,
    name: "Cao Thị Minh",
    location: "Tây Ninh",
    rating: 5,
    comment: "Lần đầu thử món ăn miền Trung tại đây, vị rất đậm đà và authentic. Sẽ giới thiệu bạn bè.",
    date: "2023-12-12",
    avatar: "CM",
  },
  {
    id: 14,
    name: "Đinh Văn Nam",
    location: "An Giang",
    rating: 5,
    comment: "Nhà hàng có không gian sang trọng, phục vụ tận tình. Đặc biệt món gỏi cuốn rất tươi ngon.",
    date: "2023-12-10",
    avatar: "DN",
  },
  {
    id: 15,
    name: "Hồ Thị Yến",
    location: "Kiên Giang",
    rating: 5,
    comment: "Tổ chức tiệc đầy tháng cho con tại đây rất hoàn hảo. Đội ngũ hỗ trợ rất chuyên nghiệp.",
    date: "2023-12-08",
    avatar: "HY",
  },
  {
    id: 16,
    name: "Lưu Minh Quân",
    location: "Bạc Liêu",
    rating: 5,
    comment: "Món ăn chất lượng cao, giá cả hợp lý. Đặc biệt thích không gian thoáng mát, view đẹp.",
    date: "2023-12-05",
    avatar: "LQ",
  },
  {
    id: 17,
    name: "Mai Thị Thu",
    location: "Sóc Trăng",
    rating: 5,
    comment: "Dịch vụ tuyệt vời, nhân viên thân thiện. Món bánh xèo và nem nướng rất ngon.",
    date: "2023-12-03",
    avatar: "MT",
  },
  {
    id: 18,
    name: "Ngô Văn Tài",
    location: "Cà Mau",
    rating: 5,
    comment: "Không gian nhà hàng rất đẹp, thích hợp cho các dịp đặc biệt. Sẽ quay lại nhiều lần nữa.",
    date: "2023-12-01",
    avatar: "NT",
  },
]

// Function to generate avatar background color based on name
const getAvatarColor = (name: string) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-orange-500",
    "bg-teal-500",
    "bg-cyan-500",
  ]

  // Simple hash function to get consistent color for same name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - visibleCount + 1))
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered, visibleCount])

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.08),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-rgb),0.05),transparent_70%)]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Khách Hàng Nói Gì</h2>
          <p className="text-body max-w-2xl mx-auto">
            Những phản hồi chân thực từ khách hàng đã trải nghiệm tại Đắk Phú
          </p>
        </div>

        {/* Auto-scrolling testimonials */}
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                width: `${(testimonials.length * 100) / visibleCount}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <Card className="h-full bg-white shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <Avatar className={`h-14 w-14 mr-4 ${getAvatarColor(testimonial.name)}`}>
                          <AvatarFallback className="text-white font-medium">{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-primary">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.location}</div>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <blockquote className="text-gray-700 mb-4 italic">"{testimonial.comment}"</blockquote>

                      <div className="text-xs text-gray-400 text-right">
                        {new Date(testimonial.date).toLocaleDateString("vi-VN")}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125 w-4" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
