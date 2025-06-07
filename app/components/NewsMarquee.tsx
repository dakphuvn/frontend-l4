"use client"
import Marquee from "react-fast-marquee"

interface NewsItem {
  id: number
  content: string
  type: "news" | "promotion" | "event"
}

const NewsMarquee = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      content: "🔥 Tin nóng: Ra mắt sản phẩm mới - Cơ hội đầu tư hấp dẫn",
      type: "news" as const,
    },
    {
      id: 2,
      content: "🎉 Sự kiện đặc biệt: Hội thảo chuyên ngành - Đăng ký ngay!",
      type: "event" as const,
    },
    {
      id: 3,
      content: "🎁 Ưu đãi tháng: Giảm giá sốc - Mua ngay kẻo lỡ",
      type: "promotion" as const,
    },
    {
      id: 4,
      content: "📢 Thông báo quan trọng: Thay đổi chính sách bảo mật",
      type: "news" as const,
    },
    {
      id: 5,
      content: "🌟 Cơ hội vàng: Trở thành đối tác chiến lược - Liên hệ ngay",
      type: "promotion" as const,
    },
    {
      id: 6,
      content: "📰 Tin tức mới nhất: Thị trường bất động sản có nhiều biến động",
      type: "news" as const,
    },
    {
      id: 7,
      content: "🗓️ Lịch sự kiện: Chuỗi workshop chuyên sâu - Nâng cao kỹ năng",
      type: "event" as const,
    },
    {
      id: 8,
      content: "💰 Khuyến mãi đặc biệt: Tặng voucher cho khách hàng mới",
      type: "promotion" as const,
    },
    {
      id: 9,
      content: "🎊 Chào mừng năm 2025 - Ưu đãi đặc biệt cho khách hàng thân thiết",
      type: "promotion" as const,
    },
  ]

  return (
    <div className="bg-gray-100 py-2">
      <Marquee speed={40} gradient={false}>
        {newsItems.map((item) => (
          <span key={item.id} className="mx-4 text-gray-700">
            {item.content}
          </span>
        ))}
      </Marquee>
    </div>
  )
}

export default NewsMarquee
