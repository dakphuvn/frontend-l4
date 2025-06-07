import { Award, Users, Heart, Target } from "lucide-react"

export default function About() {
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
            <h1 className="heading-primary text-white mb-4 text-shadow">Về Chúng Tôi</h1>
            <p className="text-xl text-white/90 text-shadow">
              Câu chuyện về hành trình tạo nên thương hiệu ẩm thực biển đẳng cấp
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Câu Chuyện Thương Hiệu</h2>
              <div className="space-y-6 text-body">
                <p>
                  Đắk Phú ra đời từ niềm đam mê với ẩm thực biển Việt Nam và khát vọng mang đến những trải nghiệm ẩm
                  thực đẳng cấp quốc tế ngay tại quê hương.
                </p>
                <p>
                  Tọa lạc tại vị trí đắc địa với tầm nhìn panorama ra biển Tuy Hòa, Đắk Phú không chỉ là nhà hàng mà còn
                  là nơi lưu giữ và phát huy tinh hoa ẩm thực biển cả.
                </p>
                <p>
                  Với hơn 30 năm kinh nghiệm, chúng tôi tự hào đã phục vụ hàng nghìn khách hàng và tổ chức thành công
                  nhiều sự kiện quan trọng, từ tiệc cưới lãng mạn đến hội nghị doanh nghiệp trang trọng.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
                style={{ backgroundImage: "url(/placeholder.svg?height=600&width=800)" }}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm">Năm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4">Tầm Nhìn</h3>
              <p className="text-body">
                Trở thành điểm đến ẩm thực hải sản hàng đầu Việt Nam, nơi hội tụ tinh hoa ẩm thực biển cả với dịch vụ
                đẳng cấp quốc tế, tạo nên những trải nghiệm đáng nhớ cho mọi thực khách.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4">Sứ Mệnh</h3>
              <p className="text-body">
                Mang đến những trải nghiệm ẩm thực biển đặc sắc với nguyên liệu tươi ngon nhất, không gian sang trọng và
                dịch vụ chuyên nghiệp, góp phần nâng tầm ẩm thực Việt Nam trên bản đồ thế giới.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Triết Lý Ẩm Thực</h2>
            <p className="text-body max-w-3xl mx-auto">
              Chúng tôi tin rằng ẩm thực không chỉ là việc chế biến món ăn mà còn là nghệ thuật kết hợp hài hòa giữa
              nguyên liệu, kỹ thuật và cảm xúc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4">Chất Lượng Tuyệt Đối</h3>
              <p className="text-body">
                Cam kết sử dụng nguyên liệu tươi sống cao cấp, được chọn lọc kỹ càng từ những nguồn cung uy tín nhất.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4">Dịch Vụ Tận Tâm</h3>
              <p className="text-body">
                Đội ngũ phục vụ chuyên nghiệp, được đào tạo bài bản để mang đến trải nghiệm hoàn hảo cho từng khách
                hàng.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4">Cảm Xúc Trong Từng Món</h3>
              <p className="text-body">
                Mỗi món ăn đều được chế biến với tình yêu và sự tỉ mỉ, tạo nên hương vị đặc biệt chỉ có tại Đắk Phú.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
