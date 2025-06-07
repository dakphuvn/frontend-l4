"use client"

import { useState } from "react"
import { Compass, Landmark, Waves, Navigation } from "lucide-react"
import Hero from "./components/Hero"
import CoreValues from "./components/CoreValues"
import FeaturedMenu from "./components/FeaturedMenu"
import EventServices from "./components/EventServices"
import EventCTA from "./components/EventCTA"
import Testimonials from "./components/Testimonials"
import ReservationModal from "./components/ReservationModal"

export default function Page() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)

  const openReservationModal = () => {
    setIsReservationModalOpen(true)
  }

  const closeReservationModal = () => {
    setIsReservationModalOpen(false)
  }

  return (
    <>
      <Hero />
      <CoreValues />
      <FeaturedMenu />
      <EventServices />
      <EventCTA onOpenReservation={openReservationModal} />
      <Testimonials />

      {/* Location */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h2 className="heading-secondary text-white mb-6">Vị trí Đắk Phú</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-primary-dark/40 p-4 rounded-lg border border-secondary/30">
                  <div className="flex items-center mb-2">
                    <Waves className="w-5 h-5 text-secondary mr-2" />
                    <h3 className="font-semibold text-lg">Bãi biển Trần Phú</h3>
                  </div>
                  <p className="text-sm text-white/80">
                    Tọa lạc ngay bãi biển trung tâm thành phố Tuy Hòa, tận hưởng không khí biển trong lành
                  </p>
                </div>

                <div className="bg-primary-dark/40 p-4 rounded-lg border border-secondary/30">
                  <div className="flex items-center mb-2">
                    <Landmark className="w-5 h-5 text-secondary mr-2" />
                    <h3 className="font-semibold text-lg">Tháp Nghinh Phong</h3>
                  </div>
                  <p className="text-sm text-white/80">
                    Bên cạnh quảng trường Tháp Nghinh Phong - biểu tượng check-in số 1 của Tuy Hòa
                  </p>
                </div>

                <div className="bg-primary-dark/40 p-4 rounded-lg border border-secondary/30">
                  <div className="flex items-center mb-2">
                    <Compass className="w-5 h-5 text-secondary mr-2" />
                    <h3 className="font-semibold text-lg">Vị trí đắc địa</h3>
                  </div>
                  <p className="text-sm text-white/80">
                    Nằm trong phạm vi công viên bờ biển của Tuy Hòa, dễ dàng tiếp cận từ mọi hướng
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://maps.app.goo.gl/n6nEqfzXg51kqz7G9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Chỉ Đường Đến Đắk Phú
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.891528140599!2d109.31419363121216!3d13.106207899737012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fed0011bf3215%3A0x7c7d0f250fab626f!2sDAKPHU%20RESTAURANT!5e1!3m2!1sen!2s!4v1748656770665!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ReservationModal isOpen={isReservationModalOpen} onClose={closeReservationModal} />
    </>
  )
}
