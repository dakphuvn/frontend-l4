export default function Privacy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/placeholder.svg?height=600&width=1200)" }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <h1 className="heading-primary text-white mb-4 text-shadow">Chính Sách Bảo Mật</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose max-w-none">
            <p className="text-lg font-medium text-primary-700 mb-8">Cập nhật lần cuối: 30/05/2024</p>

            <div className="space-y-8">
              <div>
                <h2 className="heading-tertiary mb-4">1. Giới Thiệu</h2>
                <p className="text-body">
                  Nhà Hàng Đắk Phú ("chúng tôi", "của chúng tôi") cam kết bảo vệ quyền riêng tư của bạn. Chính sách bảo
                  mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ, lưu trữ và bảo vệ thông tin cá nhân của
                  bạn khi bạn sử dụng trang web của chúng tôi và các dịch vụ liên quan.
                </p>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">2. Thông Tin Chúng Tôi Thu Thập</h2>
                <p className="text-body mb-4">Chúng tôi có thể thu thập các loại thông tin sau:</p>
                <ul className="list-disc pl-6 space-y-2 text-primary-700">
                  <li>
                    <strong>Thông tin cá nhân:</strong> Họ tên, địa chỉ email, số điện thoại, địa chỉ liên lạc.
                  </li>
                  <li>
                    <strong>Thông tin đặt bàn:</strong> Ngày, giờ, số lượng khách, yêu cầu đặc biệt.
                  </li>
                  <li>
                    <strong>Thông tin thanh toán:</strong> Chi tiết thẻ tín dụng, thông tin tài khoản ngân hàng (nếu áp
                    dụng).
                  </li>
                  <li>
                    <strong>Thông tin sử dụng:</strong> Cách bạn tương tác với trang web của chúng tôi, bao gồm các
                    trang bạn truy cập và thời gian truy cập.
                  </li>
                  <li>
                    <strong>Thông tin thiết bị:</strong> Địa chỉ IP, loại trình duyệt, thiết bị và hệ điều hành.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">3. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
                <p className="text-body mb-4">Chúng tôi sử dụng thông tin thu thập được để:</p>
                <ul className="list-disc pl-6 space-y-2 text-primary-700">
                  <li>Xử lý và xác nhận đặt bàn của bạn</li>
                  <li>Cung cấp và cải thiện dịch vụ của chúng tôi</li>
                  <li>Gửi thông báo về đặt bàn hoặc sự kiện</li>
                  <li>Gửi thông tin tiếp thị và quảng cáo (nếu bạn đã đồng ý)</li>
                  <li>Phân tích cách trang web của chúng tôi được sử dụng để cải thiện trải nghiệm người dùng</li>
                  <li>Tuân thủ các nghĩa vụ pháp lý</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">4. Chia Sẻ Thông Tin</h2>
                <p className="text-body mb-4">
                  Chúng tôi không bán, cho thuê hoặc trao đổi thông tin cá nhân của bạn với bên thứ ba. Tuy nhiên, chúng
                  tôi có thể chia sẻ thông tin trong các trường hợp sau:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-primary-700">
                  <li>Với các nhà cung cấp dịch vụ giúp chúng tôi vận hành trang web và dịch vụ</li>
                  <li>
                    Khi có yêu cầu pháp lý hoặc để bảo vệ quyền lợi, tài sản hoặc an toàn của chúng tôi hoặc người khác
                  </li>
                  <li>Với sự đồng ý của bạn</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">5. Bảo Mật Dữ Liệu</h2>
                <p className="text-body">
                  Chúng tôi áp dụng các biện pháp bảo mật hợp lý để bảo vệ thông tin cá nhân của bạn khỏi mất mát, truy
                  cập trái phép, tiết lộ, thay đổi hoặc phá hủy. Tuy nhiên, không có phương thức truyền tải qua internet
                  hoặc phương thức lưu trữ điện tử nào là an toàn 100%. Do đó, chúng tôi không thể đảm bảo an ninh tuyệt
                  đối.
                </p>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">6. Cookie và Công Nghệ Tương Tự</h2>
                <p className="text-body">
                  Trang web của chúng tôi sử dụng cookie và các công nghệ tương tự để cải thiện trải nghiệm duyệt web
                  của bạn, phân tích cách bạn sử dụng trang web và cá nhân hóa nội dung. Bạn có thể kiểm soát việc sử
                  dụng cookie thông qua cài đặt trình duyệt của mình.
                </p>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">7. Quyền Của Bạn</h2>
                <p className="text-body mb-4">
                  Tùy thuộc vào luật pháp hiện hành, bạn có thể có các quyền sau liên quan đến thông tin cá nhân của
                  mình:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-primary-700">
                  <li>Quyền truy cập và nhận bản sao thông tin cá nhân của bạn</li>
                  <li>Quyền yêu cầu chỉnh sửa thông tin không chính xác</li>
                  <li>Quyền yêu cầu xóa thông tin cá nhân của bạn</li>
                  <li>Quyền hạn chế hoặc phản đối việc xử lý thông tin của bạn</li>
                  <li>Quyền rút lại sự đồng ý của bạn bất kỳ lúc nào</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">8. Thay Đổi Chính Sách Bảo Mật</h2>
                <p className="text-body">
                  Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất
                  kỳ thay đổi quan trọng nào bằng cách đăng thông báo trên trang web của chúng tôi hoặc gửi email cho
                  bạn.
                </p>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">9. Liên Hệ Với Chúng Tôi</h2>
                <p className="text-body">
                  Nếu bạn có bất kỳ câu hỏi hoặc quan ngại nào về Chính sách Bảo mật này hoặc cách chúng tôi xử lý thông
                  tin cá nhân của bạn, vui lòng liên hệ với chúng tôi qua email: info@dakphu.com hoặc gọi số:
                  0905286377.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
