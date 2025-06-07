import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  url = "https://dakphu.com",
  type = "website",
}: SEOProps = {}): Metadata {
  const defaultTitle = "Nhà Hàng Đắk Phú - Biển Việt lên bàn – Tươi Ngon Chuẩn Vị"
  const defaultDescription =
    "Khám phá tinh hoa ẩm thực biển Việt tại Nhà Hàng Đắk Phú. Hải sản tươi sống, không gian sang trọng, dịch vụ đẳng cấp tại Tuy Hòa, Phú Yên."

  const seoTitle = title ? `${title} | Nhà Hàng Đắk Phú` : defaultTitle
  const seoDescription = description || defaultDescription

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [...keywords, "nhà hàng hải sản", "Đắk Phú", "Tuy Hòa", "Phú Yên"].join(", "),
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      type: type as any,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}
