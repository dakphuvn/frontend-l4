import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4E629D", // Xanh biển sâu
          50: "#E6F2FF",
          100: "#CCE5FF",
          200: "#99CCFF",
          300: "#66B2FF",
          400: "#3399FF",
          500: "#4E629D",
          600: "#3D4F7D",
          700: "#2C3B5D",
          800: "#1B273D",
          900: "#0A131D",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#C49F68", // Vàng đồng
          50: "#FFF9E6",
          100: "#FFF3CC",
          200: "#FFE799",
          300: "#FFDB66",
          400: "#FFCF33",
          500: "#C49F68",
          600: "#B8934F",
          700: "#8A6E3B",
          800: "#5C4927",
          900: "#2E2414",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F7F4E9", // Trắng ngà
          50: "#FEFDFB",
          100: "#F7F4E9",
          200: "#F0EAD3",
          300: "#E8DFBD",
          400: "#E1D5A7",
          500: "#D9CA91",
          600: "#AE9F74",
          700: "#827757",
          800: "#574F3A",
          900: "#2B281D",
          foreground: "#0A3D62",
        },
        neutral: {
          DEFAULT: "#BCC0C0", // Xám bạc
          50: "#F8F9F9",
          100: "#F1F2F2",
          200: "#E3E5E5",
          300: "#D5D8D8",
          400: "#C7CBCB",
          500: "#BCC0C0",
          600: "#969A9A",
          700: "#717373",
          800: "#4B4D4D",
          900: "#262626",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        vietnam: ["'Be Vietnam Pro'", "sans-serif"],
        heading: ["'Playfair Display'", "serif"],
        body: ["'Be Vietnam Pro'", "sans-serif"],
        sans: ["'Be Vietnam Pro'", "system-ui", "-apple-system", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
