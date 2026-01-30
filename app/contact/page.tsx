"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#EFECEC] py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">Contact</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="h-11 sm:h-12"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="h-11 sm:h-12"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1.5 sm:mb-2">
                Phone number
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                className="h-11 sm:h-12"
              />
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-1.5 sm:mb-2">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={5}
                className="w-full rounded-md border border-input bg-background px-3 py-2 sm:py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[120px] sm:min-h-[150px]"
                placeholder="Comment"
              />
            </div>

            <Button type="submit" className="w-full h-11 sm:h-12 text-sm sm:text-base">
              Send
            </Button>
          </form>
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
