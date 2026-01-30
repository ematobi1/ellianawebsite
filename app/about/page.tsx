import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About - Ellianna Beauty",
  description: "Learn about Ellianna Beauty - where beauty meets purpose. Cruelty-free and vegan products.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#EFECEC] py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">About</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-6 sm:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl italic text-muted-foreground">
              Ellianna means &quot;God has answered&quot; and &quot;sunshine.&quot; It&apos;s no coincidence that you landed here.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              The Garden to me is defined by wherever I plant my feet. Life outcomes depend on personal choices and mindset, framing our existence as a cultivated space.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              My life purpose centers on enhancing inner beauty outwardly through cruelty-free and vegan products. When you look amazing, you feel even better. Let&apos;s change the world while supporting each other.
            </p>

            <p className="font-heading text-xl sm:text-2xl md:text-3xl italic mt-8 sm:mt-12">
              Welcome to The Garden
            </p>
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
