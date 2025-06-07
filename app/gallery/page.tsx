"use client"

import { useState, useEffect } from "react"
import { Eye, Play, X, ChevronDown } from "lucide-react"

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [visibleItems, setVisibleItems] = useState(18)
  const [loading, setLoading] = useState(false)

  const categories = [
    { id: "all", name: "Tất Cả" },
    { id: "restaurant", name: "Không Gian Nhà Hàng" },
    { id: "wedding", name: "Tiệc Cưới" },
    { id: "conference", name: "Hội Nghị & Gala" },
    { id: "food", name: "Món Ăn" },
    { id: "events", name: "Sự Kiện Khác" },
  ]

  // Generate more gallery items for demonstration
  const generateGalleryItems = (count: number) => {
    const items = []
    const categories = ["restaurant", "wedding", "conference", "food", "events"]
    const types = ["image", "video"]

    for (let i = 1; i <= count; i++) {
      items.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        category: categories[Math.floor(Math.random() * categories.length)],
        title: `Hình ảnh ${i}`,
        description: `Mô tả cho hình ảnh số ${i}`,
        image: `/placeholder.svg?height=400&width=600&text=Image${i}`,
        thumbnail: `/placeholder.svg?height=300&width=400&text=Thumb${i}`,
      })
    }
    return items
  }

  const allGalleryItems = generateGalleryItems(60) // Generate 60 items total

  const filteredItems =
    activeCategory === "all" ? allGalleryItems : allGalleryItems.filter((item) => item.category === activeCategory)

  const visibleFilteredItems = filteredItems.slice(0, visibleItems)

  const loadMore = () => {
    setLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleItems((prev) => Math.min(prev + 18, filteredItems.length))
      setLoading(false)
    }, 1000)
  }

  // Reset visible items when category changes
  useEffect(() => {
    setVisibleItems(18)
  }, [activeCategory])

  const hasMore = visibleItems < filteredItems.length

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
            <h1 className="heading-primary text-white mb-4 text-shadow">Thư Viện Hình Ảnh</h1>
            <p className="text-xl text-white/90 text-shadow">
              Khám phá không gian sang trọng và những khoảnh khắc đáng nhớ tại Đắk Phú
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-accent text-primary hover:bg-primary-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleFilteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg card-hover">
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Type Indicator */}
                <div className="absolute top-4 left-4">
                  {item.type === "video" ? (
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>

                {/* Click to view */}
                <button onClick={() => setSelectedImage(item.image)} className="absolute inset-0 w-full h-full" />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button onClick={loadMore} disabled={loading} className="btn-primary flex items-center space-x-2 mx-auto">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Đang tải...</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    <span>Xem Thêm ({filteredItems.length - visibleItems} hình)</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* No more items message */}
          {!hasMore && filteredItems.length > 18 && (
            <div className="text-center mt-12">
              <p className="text-primary-600">Đã hiển thị tất cả {filteredItems.length} hình ảnh</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
