"use client"

import { Loader2 } from "lucide-react"

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-primary-600 text-sm">Đang tải...</p>
      </div>
    </div>
  )
}
