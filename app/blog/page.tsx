"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Tất Cả")

  const blogPosts = [
    {
      id: 1,
      title: "Bí Quyết Chọn Hải Sản Tươi Sống Chất Lượng Cao",
      excerpt:
        "Hướng dẫn chi tiết cách nhận biết và chọn lựa hải sản tươi sống đảm bảo chất lượng cho bữa ăn hoàn hảo.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Chef Nguyễn Văn Minh",
      date: "15/12/2024",
      category: "Ẩm Thực",
      readTime: "5 phút đọc",
    },
    {
      id: 2,
      title: "Xu Hướng Tổ Chức Tiệc Cưới Bên Bờ Biển 2024",
      excerpt: "Khám phá những xu hướng mới nhất trong việc tổ chức tiệc cưới lãng mạn với khung cảnh biển tuyệt đẹp.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Trần Thị Hoa",
      date: "12/12/2024",
      category: "Sự Kiện",
      readTime: "7 phút đọc",
    },
    {
      id: 3,
      title: "Văn Hóa Ẩm Thực Biển Miền Trung Việt Nam",
      excerpt:
        "Tìm hiểu về truyền thống ẩm thực biển đặc sắc của miền Trung và cách chúng tôi kế thừa, phát huy tại Đắk Phú.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Lê Văn Đức",
      date: "10/12/2024",
      category: "Văn Hóa",
      readTime: "6 phút đọc",
    },
    {
      id: 4,
      title: "Cách Phối Hợp Rượu Vang Với Hải Sản",
      excerpt: "Hướng dẫn chuyên nghiệp về cách chọn và phối hợp rượu vang phù hợp với từng loại hải sản.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Sommelier Đức",
      date: "08/12/2024",
      category: "Đồ Uống",
      readTime: "8 phút đọc",
    },
    {
      id: 5,
      title: "Tổ Chức Hội Nghị Doanh Nghiệp Thành Công",
      excerpt: "Những yếu tố quan trọng để tổ chức một hội nghị doanh nghiệp chuyên nghiệp và ấn tượng.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Trần Thị Hoa",
      date: "05/12/2024",
      category: "Sự Kiện",
      readTime: "6 phút đọc",
    },
    {
      id: 6,
      title: "Công Thức Nấu Lẩu Hải Sản Chua Cay Đắk Phú",
      excerpt: "Chia sẻ công thức độc quyền của nhà hàng để bạn có thể thưởng thức hương vị đặc biệt tại nhà.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Chef Nguyễn Văn Minh",
      date: "03/12/2024",
      category: "Công Thức",
      readTime: "10 phút đọc",
    },
  ]

  const categories = ["Tất Cả", "Ẩm Thực", "Sự Kiện", "Văn Hóa", "Đồ Uống", "Công Thức"]

  // Filter posts based on active category
  const filteredPosts =
    activeCategory === "Tất Cả" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  // Get featured post (first post of filtered posts or first overall if none match)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : blogPosts[0]

  // Get remaining posts for the grid
  const remainingPosts = filteredPosts.length > 0 ? filteredPosts.filter((post) => post.id !== featuredPost.id) : []

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/placeholder.svg?height=600&width=1200)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <h1 className="heading-primary text-white mb-4 text-shadow">Blog & Tin Tức</h1>
            <p className="text-xl text-white/90 text-shadow">
              Khám phá thế giới ẩm thực biển và những câu chuyện thú vị từ Đắk Phú
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 
                  ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-accent text-primary hover:bg-primary/10"
                  }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Không tìm thấy bài viết</h3>
              <p className="text-gray-600 mb-8">Không có bài viết nào trong danh mục "{activeCategory}"</p>
              <button
                onClick={() => setActiveCategory("Tất Cả")}
                className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Xem tất cả bài viết
              </button>
            </div>
          )}

          {filteredPosts.length > 0 && (
            <>
              {/* Featured Post */}
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-accent rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${featuredPost.image})` }} />
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-primary-600">{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-primary-600">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                      >
                        Đọc Tiếp
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                          <span className="text-xs text-primary-600">{post.readTime}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-primary-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-primary-500">
                            <div className="flex items-center space-x-1 mb-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="flex items-center space-x-1 text-secondary hover:text-primary font-semibold transition-colors"
                          >
                            <span>Đọc thêm</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
