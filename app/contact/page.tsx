"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            <h1 className="heading-primary text-white mb-4 text-shadow">Liên Hệ & Đặt Bàn</h1>
            <p className="text-xl text-white/90 text-shadow">
              Hãy để chúng tôi phục vụ bạn với trải nghiệm ẩm thực đáng nhớ
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-accent rounded-2xl p-8 shadow-lg">
              <h2 className="heading-tertiary mb-6">Đặt Bàn Trực Tuyến</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Nhập email"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-primary-700 mb-2">
                      Số khách *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    >
                      <option value="">Chọn số khách</option>
                      <option value="1-2">1-2 người</option>
                      <option value="3-4">3-4 người</option>
                      <option value="5-8">5-8 người</option>
                      <option value="9-15">9-15 người</option>
                      <option value="16+">16+ người</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-primary-700 mb-2">
                      Ngày *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-primary-700 mb-2">
                      Giờ *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    >
                      <option value="">Chọn giờ</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                    Yêu cầu đặc biệt
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Nhập yêu cầu đặc biệt (nếu có)"
                  />
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Gửi Yêu Cầu Đặt Bàn</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-tertiary mb-6">Thông Tin Liên Hệ</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Địa Chỉ</h3>
                      <p className="text-primary-600">
                        4847+9VV, Độc Lập, Phường 7, Tuy Hòa, Phú Yên, Việt Nam
                        <br />
                        <span className="text-sm text-secondary">
                          Ngay bãi biển trung tâm (bãi Trần Phú), bên cạnh quảng trường Tháp Nghinh Phong
                        </span>
                      </p>
                      <a
                        href="https://maps.app.goo.gl/n6nEqfzXg51kqz7G9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline mt-2 inline-block"
                      >
                        Xem trên Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hotline</h3>
                      <p className="text-primary-600">
                        <a href="tel:0905286377" className="hover:text-secondary transition-colors">
                          0905286377
                        </a>
                      </p>
                      <p className="text-sm text-primary-500 mt-1">Hỗ trợ 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-primary-600">
                        <a href="mailto:info@dakphu.com" className="hover:text-secondary transition-colors">
                          info@dakphu.com
                        </a>
                      </p>
                      <p className="text-sm text-primary-500 mt-1">Phản hồi trong 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Giờ Hoạt Động</h3>
                      <div className="text-primary-600 space-y-1">
                        <p>Thứ 2 - Chủ nhật: 8:00 - 23:00</p>
                        <p>Ngày lễ, Tết: 8:00 - 23:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-accent rounded-2xl p-6">
                <h3 className="heading-tertiary mb-4">Liên Hệ Nhanh</h3>
                <div className="space-y-3">
                  <a
                    href="tel:0905286377"
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium">Gọi ngay</span>
                  </a>
                  <a
                    href="mailto:info@dakphu.com"
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-medium">Gửi email</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/n6nEqfzXg51kqz7G9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">Chỉ đường</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Câu Hỏi Thường Gặp</h2>
            <p className="text-body max-w-3xl mx-auto">
              Những câu hỏi phổ biến về dịch vụ đặt bàn và tổ chức sự kiện tại Đắk Phú
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3">Làm thế nào để đặt bàn?</h3>
                <p className="text-primary-600">
                  Bạn có thể đặt bàn qua form trực tuyến, gọi hotline 0905286377 hoặc đến trực tiếp nhà hàng.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3">Có cần đặt cọc không?</h3>
                <p className="text-primary-600">
                  Đối với bàn thường không cần đặt cọc. Với sự kiện lớn và tiệc cưới cần đặt cọc 30% tổng giá trị.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3">Có thể hủy hoặc đổi lịch không?</h3>
                <p className="text-primary-600">
                  Có thể hủy hoặc đổi lịch trước 24h. Đối với sự kiện lớn cần thông báo trước 7 ngày.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3">Nhà hàng có chỗ đậu xe không?</h3>
                <p className="text-primary-600">
                  Có bãi đậu xe rộng rãi, miễn phí cho khách hàng. Có thể chứa đến 100 xe ô tô và 200 xe máy.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3">Có phục vụ khách chay không?</h3>
                <p className="text-primary-600">
                  Có menu chay đa dạng và có thể chế biến món chay theo yêu cầu. Vui lòng thông báo trước khi đặt bàn.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3">Có dịch vụ giao hàng không?</h3>
                <p className="text-primary-600">
                  Có dịch vụ catering và giao hàng trong bán kính 10km. Phí giao hàng tùy theo khoảng cách.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
