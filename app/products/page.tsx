import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Products - Ellianna Beauty",
  description: "Shop all Ellianna Beauty products - lipsticks, lip glosses, makeup brushes, and more.",
}

const products = [
  {
    id: 1,
    name: "Juicy Lip Filler Luminizer & Plumper",
    price: 18.99,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/BC70E5F8-B1A3-499C-AF02-519664158AA1.png?v=1751468026",
    href: "/products/juicy-lip-filler-luminizer-plumper",
    variants: ["Pink", "Rose gold"],
    inStock: true,
  },
  {
    id: 2,
    name: "Large Handle Garden Mirror",
    price: 10.00,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/AA2BA88A-BA38-4D07-B5D0-BF5C7BE5F924.png",
    href: "/products/large-handle-garden-mirror",
    inStock: true,
  },
  {
    id: 3,
    name: "Lip Pencil",
    price: 22.00,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/IMG_1207.jpg",
    href: "/products/lip-pencil",
    variants: ["Provocation Dark Brown", "Forbidden Rouge Burgundy"],
    inStock: true,
  },
  {
    id: 4,
    name: "Lips Gloss",
    price: 25.58,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/DEE694CA-D2B0-4655-8A2C-629A4FA8CDBB.jpg?v=1761684968",
    href: "/products/lip-gloss",
    inStock: true,
  },
  {
    id: 5,
    name: "Liquid Lipstick",
    price: 25.58,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/IMG-1204.jpg?v=1759953437",
    href: "/products/liquid-lipstick",
    inStock: true,
  },
  {
    id: 6,
    name: "On the Beat Makeup Class",
    price: 280.00,
    compareAtPrice: 300.00,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/4EA68A30-D9CF-4F11-B9C9-DCCFE469EB68.png?v=1743040270",
    href: "/products/on-the-beat-makeup-class",
    inStock: true,
    onSale: true,
  },
  {
    id: 7,
    name: "Pencil Sharpener",
    price: 8.99,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/B02BFC12-F963-4734-BDC1-F94640B7DB21.png",
    href: "/products/pencil-sharpener",
    variants: ["Pink"],
    inStock: true,
  },
  {
    id: 8,
    name: "Professional Make-up Brushes 18pcs",
    price: 100.00,
    compareAtPrice: 180.00,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/IMG-1066.jpg",
    href: "/products/professional-makeup-brushes-18pcs",
    inStock: true,
    onSale: true,
  },
  {
    id: 9,
    name: "The Garden Pocket Mirrors Limited Edition",
    price: 13.89,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/DD05B965-5842-4191-8D34-1E5E6E7072E5.png",
    href: "/products/the-garden-pocket-mirrors-limited-edition",
    variants: ["Heart"],
    inStock: true,
  },
  {
    id: 10,
    name: "The Lip Kit Combo (Limited Edition)",
    price: 30.00,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/IMG-1075.jpg",
    href: "/products/the-lip-kit-combo-limited-edition",
    inStock: false,
  },
  {
    id: 11,
    name: "Waterproof Defining Micro Power Eyebrow Pencil",
    price: 18.99,
    image: "https://cf90d1-04.myshopify.com/cdn/shop/files/DE2FF0BD-6875-4283-8D15-B0E8BF87182C.png",
    href: "/products/waterproof-defining-micro-power-eyebrow-pencil",
    variants: ["Light brown", "Dark brown", "Light coffee", "Dark coffee"],
    inStock: true,
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#EFECEC] py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">Products</h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <Link key={product.id} href={product.href} className="group">
                <Card className="overflow-hidden h-full border-0 shadow-md hover:shadow-xl active:scale-[0.98] transition-all">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.onSale && (
                      <Badge className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-red-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2">
                        Sale
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary" className="text-xs sm:text-sm md:text-lg">Sold out</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h3 className="font-medium text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-xs sm:text-sm md:text-base">${product.price.toFixed(2)} USD</span>
                      {product.compareAtPrice && (
                        <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground line-through">
                          ${product.compareAtPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#EFECEC]">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            Subscribe to our emails
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Subscribe to our mailing list for insider news, product launches, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Email"
              className="flex-1 h-11 sm:h-12"
              required
            />
            <Button type="submit" className="px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
