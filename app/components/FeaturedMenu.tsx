import Link from "next/link"
import { Star, ChefHat, Clock } from "lucide-react"

export default function FeaturedMenu() {
  const featuredDishes = [
    {
      name: "Tôm Hùm Nướng Phô Mai",
      description: "Tôm hùm tươi sống nướng với phô mai Parmesan, thảo mộc tươi",
      price: "1.200.000",
      image: "/placeholder.svg?height=400&width=600",
      rating: 5,
      cookTime: "25 phút",
      chef: "Đặc sản",
    },
    {
      name: "Cua Hoàng Đế Hấp Bia",
      description: "Cua Hoàng Đế Alaska hấp bia tươi, chấm với bơ tỏi thơm lừng",
      price: "2.500.000",
      image: "/placeholder.svg?height=400&width=600",
      rating: 5,
      cookTime: "30 phút",
      chef: "Signature",
    },
    {
      name: "Bào Ngư Nướng Mỡ Hành",
      description: "Bào ngư tươi Nam Phi nướng mỡ hành, rắc hạt mè rang",
      price: "800.000",
      image: "/placeholder.svg?height=400&width=600",
      rating: 5,
      cookTime: "20 phút",
      chef: "Premium",
    },
  ]

  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Món Ăn Đặc Trưng</h2>
          <p className="text-body max-w-3xl mx-auto">
            Đắm chìm trong hành trình ẩm thực đặc quyền với các kiệt tác signature được chế tác từ hải sản tuyển chọn
            đặc biệt kỹ lưỡng, tạo nên dấu ấn vị giác riêng biệt chỉ dành cho thực khách sành điệu tại Đắk Phú.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
              <div className="relative">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${dish.image})` }} />
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {dish.chef}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(dish.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary-800">{dish.name}</h3>
                <p className="text-body mb-4">{dish.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-primary-600">
                    <div className="flex items-center space-x-1">
                      <ChefHat className="w-4 h-4" />
                      <span>Chef's Choice</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{dish.cookTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-2xl font-bold text-primary">{dish.price}₫</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/menu" className="btn-secondary">
            Xem Toàn Bộ Thực Đơn
          </Link>
        </div>
      </div>
    </section>
  )
}
