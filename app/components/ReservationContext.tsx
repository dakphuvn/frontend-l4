"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"
import ReservationModal from "./ReservationModal"

interface ReservationContextType {
  openReservationModal: () => void
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined)

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openReservationModal = () => {
    setIsModalOpen(true)
  }

  return (
    <ReservationContext.Provider value={{ openReservationModal }}>
      {children}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ReservationContext.Provider>
  )
}

export function useReservation() {
  const context = useContext(ReservationContext)
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider")
  }
  return context
}
