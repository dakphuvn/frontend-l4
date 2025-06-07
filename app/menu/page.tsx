"use client"

import { useState, useEffect, useRef } from "react"
import { Star, Clock, ChefHat, Leaf, Flame, Award, Loader2 } from "lucide-react"

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("signature")
  const [visibleItems, setVisibleItems] = useState(12)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef(null)

  const categories = [
    { id: "signature", name: "Signature", icon: Award },
    { id: "seafood", name: "Hải Sản Tươi Sống", icon: Star },
    { id: "set-menu", name: "Set Menu Tiệc", icon: ChefHat },
    { id: "drinks", name: "Đồ Uống", icon: Leaf },
    { id: "dessert", name: "Tráng Miệng", icon: Flame },
  ]

  const menuItems = {
    signature: [
      {
        name: "Tôm Hùm Nướng Phô Mai Đắk Phú",
        description: "Tôm hùm tươi sống 800g nướng với phô mai Parmesan, thảo mộc tươi và bơ tỏi đặc biệt",
        price: "1.200.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "25 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Cua Hoàng Đế Alaska Hấp Bia",
        description: "Cua Hoàng Đế Alaska 1.5kg hấp bia tươi Heineken, chấm với bơ tỏi và nước mắm chanh",
        price: "2.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "30 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Bào Ngư Nam Phi Nướng Mỡ Hành",
        description: "Bào ngư tươi Nam Phi size lớn nướng mỡ hành, rắc hạt mè rang và rau thơm",
        price: "800.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Cá Hồi Nauy Nướng Teriyaki",
        description: "Cá hồi Nauy tươi nướng sốt Teriyaki, phục vụ kèm rau củ nướng và cơm trắng",
        price: "450.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Sò Điệp Nhật Bản Áp Chảo",
        description: "Sò điệp Nhật Bản tươi sống áp chảo với bơ tỏi, rau thơm và nước cốt chanh",
        price: "650.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "15 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Mực Một Nắng Nướng Sa Tế",
        description: "Mực một nắng tươi ngon nướng với sa tế đặc biệt, ăn kèm rau sống và bánh tráng",
        price: "320.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Ghẹ Rang Me",
        description: "Ghẹ biển tươi rang với sốt me chua ngọt đặc trưng, ăn kèm rau thơm",
        price: "380.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Lẩu Hải Sản Đặc Biệt",
        description: "Lẩu hải sản đặc biệt với nước dùng ngọt thanh từ xương hầm và hải sản tươi sống",
        price: "750.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "30 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Cá Mú Hấp Hồng Kông",
        description: "Cá mú tươi hấp kiểu Hồng Kông với xì dầu, gừng và hành lá",
        price: "580.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "25 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Tôm Càng Xanh Nướng Muối Ớt",
        description: "Tôm càng xanh size lớn nướng muối ớt, phục vụ kèm sốt chanh đặc biệt",
        price: "420.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "20 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Ốc Hương Rang Muối",
        description: "Ốc hương tươi rang muối với ớt, tỏi và lá chanh thái nhỏ",
        price: "280.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Cua Lột Sốt Singapore",
        description: "Cua lột chiên giòn với sốt Singapore cay ngọt đặc trưng",
        price: "350.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "20 phút",
        spicy: true,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Hàu Nướng Phô Mai",
        description: "Hàu tươi nướng với phô mai Mozzarella, bơ tỏi và rau thơm",
        price: "220.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Cá Hồi Sashimi",
        description: "Cá hồi Na Uy tươi cắt lát mỏng phong cách Nhật Bản, ăn kèm wasabi và gừng hồng",
        price: "320.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "10 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Tôm Hùm Sốt Bơ Tỏi",
        description: "Tôm hùm tươi sống 500g chế biến với sốt bơ tỏi đặc biệt của đầu bếp",
        price: "950.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "25 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Cá Tuyết Nướng Miso",
        description: "Cá tuyết Na Uy nướng với sốt miso truyền thống, phục vụ kèm măng tây",
        price: "480.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
    ],
    seafood: [
      {
        name: "Tôm Sú Nướng Muối Ớt",
        description: "Tôm sú tươi size jumbo nướng muối ớt, ăn kèm bánh tráng nướng",
        price: "450.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Cá Mú Hấp Hồng Kông",
        description: "Cá mú tươi 1kg hấp kiểu Hồng Kông với nấm hương và hành lá",
        price: "650.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "25 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Nghêu Hấp Sả",
        description: "Nghêu tươi hấp sả, gừng và lá chanh, ăn kèm bánh phở nướng",
        price: "180.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "10 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Mực Ống Chiên Giòn",
        description: "Mực ống tươi tẩm bột chiên giòn, ăn kèm sốt mayonnaise cay",
        price: "220.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Cá Hồi Áp Chảo",
        description: "Cá hồi Na Uy áp chảo với da giòn, phục vụ kèm sốt chanh dây",
        price: "320.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Ghẹ Sốt Ớt Singapore",
        description: "Ghẹ tươi sống xào với sốt ớt Singapore đặc trưng, cay ngọt",
        price: "380.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "20 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Hàu Nướng Mỡ Hành",
        description: "Hàu tươi nướng với mỡ hành và đậu phộng rang giã nhỏ",
        price: "190.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Cá Bớp Nướng Muối Ớt",
        description: "Cá bớp tươi nướng muối ớt, ăn kèm rau sống và bánh tráng",
        price: "280.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "20 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Tôm Càng Xanh Nướng Phô Mai",
        description: "Tôm càng xanh nướng với phô mai béo ngậy và bơ tỏi",
        price: "450.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Sò Điệp Nướng Mỡ Hành",
        description: "Sò điệp tươi nướng với mỡ hành thơm lừng và đậu phộng",
        price: "220.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Cá Chẽm Hấp Xì Dầu",
        description: "Cá chẽm tươi hấp với xì dầu, gừng và hành lá kiểu Hồng Kông",
        price: "320.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Ốc Hương Xào Tỏi",
        description: "Ốc hương tươi xào với tỏi, ớt và rau thơm",
        price: "190.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Cua Lột Rang Muối",
        description: "Cua lột tươi rang với muối, ớt và lá chanh thái nhỏ",
        price: "280.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Bạch Tuộc Nướng Sa Tế",
        description: "Bạch tuộc tươi nướng với sa tế cay thơm, ăn kèm rau sống",
        price: "320.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "20 phút",
        spicy: true,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Cá Hồi Sashimi",
        description: "Cá hồi Na Uy tươi cắt lát mỏng phong cách Nhật Bản",
        price: "280.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "10 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Tôm Hùm Baby Nướng Bơ Tỏi",
        description: "Tôm hùm baby nướng với bơ tỏi thơm lừng và rau thơm",
        price: "650.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
    ],
    "set-menu": [
      {
        name: "Set Tiệc Cưới Hoàng Gia",
        description: "Menu 8 món cao cấp cho 10 người: Tôm hùm, cua hoàng đế, bào ngư, cá mú...",
        price: "8.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "60 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Set Gala Doanh Nghiệp",
        description: "Menu 6 món sang trọng cho 8 người: Hải sản cao cấp và món Âu tinh tế",
        price: "5.200.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "45 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Set Gia Đình Hạnh Phúc",
        description: "Menu 5 món gia đình cho 6 người: Hải sản tươi ngon, phù hợp mọi lứa tuổi",
        price: "2.800.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "35 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Set Lãng Mạn Cặp Đôi",
        description: "Menu 4 món đặc biệt cho 2 người: Hải sản cao cấp, rượu vang và tráng miệng",
        price: "1.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "30 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Set Sinh Nhật Đặc Biệt",
        description: "Menu 6 món cho 8-10 người: Hải sản tươi ngon và bánh sinh nhật đặc biệt",
        price: "3.800.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "40 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Set Hội Nghị Doanh Nhân",
        description: "Menu 7 món cao cấp cho 10 người: Hải sản và món Âu sang trọng",
        price: "6.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "50 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Set Buffet Hải Sản",
        description: "Buffet hải sản tươi sống không giới hạn cho 20 người trở lên",
        price: "12.000.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "120 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Set Tiệc Ngoài Trời",
        description: "Menu BBQ 8 món cho 15 người: Hải sản nướng và món ăn kèm đặc biệt",
        price: "7.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "60 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Set Kỷ Niệm Ngày Cưới",
        description: "Menu 5 món đặc biệt cho 2 người: Hải sản cao cấp và champagne",
        price: "2.200.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "35 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Set Họp Mặt Gia Đình",
        description: "Menu 6 món truyền thống cho 8 người: Hải sản tươi ngon và món Việt đặc sắc",
        price: "3.200.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "40 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Set VIP Đặc Biệt",
        description: "Menu 10 món siêu cao cấp cho 10 người: Tôm hùm, cua hoàng đế, bào ngư, vi cá...",
        price: "15.000.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "90 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Set Tiệc Trà Chiều",
        description: "Set trà chiều sang trọng cho 4 người: Bánh ngọt, trà cao cấp và finger food",
        price: "1.200.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "20 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Set Brunch Cuối Tuần",
        description: "Menu brunch đặc biệt cho 4 người: Hải sản, trứng và bánh mì đặc biệt",
        price: "1.800.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "30 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Set Tiệc Tất Niên",
        description: "Menu 8 món truyền thống cho 10 người: Hải sản và món Việt đặc trưng ngày Tết",
        price: "5.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "60 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
      {
        name: "Set Tiệc Thôi Nôi",
        description: "Menu 6 món cho 10 người: Hải sản và món ăn phù hợp cho gia đình có trẻ nhỏ",
        price: "3.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "45 phút",
        spicy: false,
        vegetarian: false,
        chef: false,
      },
      {
        name: "Set Tiệc Mừng Thọ",
        description: "Menu 8 món truyền thống cho 10 người: Hải sản bổ dưỡng và món ăn trường thọ",
        price: "4.800.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "60 phút",
        spicy: false,
        vegetarian: false,
        chef: true,
      },
    ],
    drinks: [
      {
        name: "Rượu Vang Đỏ Bordeaux",
        description: "Rượu vang đỏ Pháp cao cấp, hương vị đậm đà, phù hợp với hải sản nướng",
        price: "1.200.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Champagne Dom Pérignon",
        description: "Champagne cao cấp Pháp, hoàn hảo cho các dịp đặc biệt và tiệc cưới",
        price: "8.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Cocktail Đắk Phú Sunset",
        description: "Cocktail đặc trưng của nhà hàng với rum, passion fruit và grenadine",
        price: "180.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Rượu Vang Trắng Chardonnay",
        description: "Rượu vang trắng Pháp, hương vị nhẹ nhàng, phù hợp với hải sản hấp",
        price: "950.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Whisky Macallan 18",
        description: "Whisky Scotland cao cấp, hương vị đậm đà với hậu vị kéo dài",
        price: "3.500.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Mojito Dừa",
        description: "Cocktail Mojito với nước cốt dừa tươi, bạc hà và chanh",
        price: "150.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Bia Heineken",
        description: "Bia Heineken tươi mát, phục vụ lạnh",
        price: "45.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Nước Ép Trái Cây Tươi",
        description: "Nước ép từ trái cây tươi theo mùa: cam, dứa, dưa hấu, chanh dây...",
        price: "65.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Trà Hoa Cúc Mật Ong",
        description: "Trà hoa cúc pha với mật ong rừng, phục vụ nóng hoặc đá",
        price: "55.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Sinh Tố Bơ",
        description: "Sinh tố bơ đặc creamy với sữa đặc và đá xay",
        price: "75.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Rượu Sake Nhật Bản",
        description: "Rượu Sake cao cấp Nhật Bản, phục vụ nóng hoặc lạnh",
        price: "450.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Cà Phê Phin Truyền Thống",
        description: "Cà phê phin Việt Nam truyền thống, phục vụ với sữa đặc hoặc đen đá",
        price: "45.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Nước Dừa Tươi",
        description: "Nước dừa tươi nguyên trái, phục vụ lạnh",
        price: "55.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Martini Đặc Biệt",
        description: "Cocktail Martini đặc biệt với gin cao cấp và olive",
        price: "180.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Smoothie Trái Cây Nhiệt Đới",
        description: "Smoothie từ các loại trái cây nhiệt đới: xoài, dứa, chanh dây...",
        price: "85.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Trà Sữa Trân Châu",
        description: "Trà sữa với trân châu đường đen tự làm",
        price: "65.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "5 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
    ],
    dessert: [
      {
        name: "Tiramisu Cà Phê Việt",
        description: "Tiramisu truyền thống kết hợp cà phê Việt Nam đặc biệt",
        price: "120.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Panna Cotta Dừa Tươi",
        description: "Panna cotta mềm mịn với nước cốt dừa tươi và topping trái cây nhiệt đới",
        price: "95.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Chocolate Lava Cake",
        description: "Bánh chocolate nóng với lõi chocolate tan chảy, kem vanilla",
        price: "140.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "15 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Chè Hạt Sen Dừa Tươi",
        description: "Chè hạt sen nấu với nước cốt dừa tươi và lá dứa",
        price: "85.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Bánh Flan Caramel",
        description: "Bánh flan mềm mịn với lớp caramel đắng nhẹ",
        price: "75.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Trái Cây Tươi Thập Cẩm",
        description: "Đĩa trái cây tươi theo mùa cắt sẵn, phục vụ với muối ớt chanh",
        price: "120.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Bánh Crepe Sầu Riêng",
        description: "Bánh crepe mỏng với nhân kem sầu riêng và sốt chocolate",
        price: "110.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 5,
        cookTime: "10 phút",
        spicy: false,
        vegetarian: true,
        chef: true,
      },
      {
        name: "Chè Thái",
        description: "Chè Thái với các loại thạch, trái cây và nước cốt dừa",
        price: "85.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Bánh Trung Thu Nhân Thập Cẩm",
        description: "Bánh trung thu truyền thống với nhân thập cẩm hạt sen",
        price: "95.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Kem Dừa Tự Nhiên",
        description: "Kem dừa tự làm từ nước cốt dừa tươi, phục vụ trong trái dừa",
        price: "85.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Bánh Chuối Hấp Nước Cốt Dừa",
        description: "Bánh chuối hấp truyền thống với nước cốt dừa và lá dứa",
        price: "75.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Chè Bưởi",
        description: "Chè bưởi với cùi bưởi ngâm, nước cốt dừa và đậu xanh",
        price: "80.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Bánh Mousse Chanh Dây",
        description: "Bánh mousse chanh dây mát lạnh với lớp thạch trái cây",
        price: "95.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Chè Khúc Bạch",
        description: "Chè khúc bạch với thạch rau câu, hạt é và nước cốt dừa",
        price: "85.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Bánh Táo Nướng",
        description: "Bánh táo nướng kiểu Pháp với kem vanilla",
        price: "110.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "15 phút",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
      {
        name: "Pudding Xoài",
        description: "Pudding xoài mềm mịn với lớp thạch xoài tươi bên trên",
        price: "85.000",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4,
        cookTime: "Phục vụ ngay",
        spicy: false,
        vegetarian: true,
        chef: false,
      },
    ],
  }

  useEffect(() => {
    // Reset visible items when changing category
    setVisibleItems(12)
  }, [activeCategory])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !loading) {
          loadMoreItems()
        }
      },
      { threshold: 0.1 },
    )

    const currentLoaderRef = loaderRef.current
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef)
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef)
      }
    }
  }, [loading, activeCategory, visibleItems])

  const loadMoreItems = () => {
    setLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleItems((prev) => prev + 6)
      setLoading(false)
    }, 800)
  }

  const currentItems = menuItems[activeCategory as keyof typeof menuItems].slice(0, visibleItems)
  const hasMoreItems = visibleItems < menuItems[activeCategory as keyof typeof menuItems].length

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
            <h1 className="heading-primary text-white mb-4 text-shadow">Thực Đơn</h1>
            <p className="text-xl text-white/90 text-shadow">
              Khám phá tinh hoa ẩm thực biển với những món ăn được chế biến từ nguyên liệu tươi ngon nhất
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-accent text-primary hover:bg-primary-50"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-primary-100"
              >
                <div className="relative">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {item.chef && (
                      <div className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Chef's Choice
                      </div>
                    )}
                    {item.spicy && (
                      <div className="bg-red-500 text-white p-1 rounded-full">
                        <Flame className="w-3 h-3" />
                      </div>
                    )}
                    {item.vegetarian && (
                      <div className="bg-green-500 text-white p-1 rounded-full">
                        <Leaf className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary-800">{item.name}</h3>
                  <p className="text-body mb-4 text-sm">{item.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-primary-600">
                      <Clock className="w-4 h-4" />
                      <span>{item.cookTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-xl font-bold text-primary">{item.price}₫</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Indicator */}
          {hasMoreItems && (
            <div ref={loaderRef} className="flex justify-center items-center py-8 mt-8">
              {loading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  <span className="text-primary font-medium">Đang tải thêm món ăn...</span>
                </div>
              ) : (
                <div className="h-16 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-300 rounded-full animate-pulse mx-1"></div>
                  <div className="w-2 h-2 bg-primary-300 rounded-full animate-pulse mx-1 animation-delay-200"></div>
                  <div className="w-2 h-2 bg-primary-300 rounded-full animate-pulse mx-1 animation-delay-400"></div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Special Notes */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="heading-tertiary mb-6 text-center">Ghi Chú Đặc Biệt</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Hải Sản Tươi Sống</h4>
                <p className="text-sm text-primary-600">
                  Tất cả hải sản đều được đánh bắt trong ngày và bảo quản tươi sống
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Chế Biến Theo Yêu Cầu</h4>
                <p className="text-sm text-primary-600">Có thể điều chỉnh độ cay, mặn theo khẩu vị của quý khách</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Đặt Trước 30 Phút</h4>
                <p className="text-sm text-primary-600">
                  Các món đặc biệt cần đặt trước để đảm bảo chất lượng tốt nhất
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
