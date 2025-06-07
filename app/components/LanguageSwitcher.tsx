"use client"

import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("vi")

  const languages = [
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === currentLang)

  return (
    <div className="fixed top-32 right-4 z-[60] md:top-28 lg:top-32">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-primary-200 rounded-lg px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Globe className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{currentLanguage?.flag}</span>
          <ChevronDown
            className={`w-4 h-4 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-primary-200 rounded-lg shadow-xl overflow-hidden min-w-[160px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-primary-50 transition-colors duration-200 ${
                  currentLang === lang.code ? "bg-primary-50 text-primary" : "text-primary-700"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
