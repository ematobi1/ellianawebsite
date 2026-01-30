import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-lg sm:text-xl font-semibold italic">
              Ellianna Beauty
            </h3>
            <p className="text-sm text-muted-foreground italic">
              ɪꜱ ᴍʏ ʟᴇɢᴀᴄʏ
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/its.theroseeffect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 active:opacity-70"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com/@itsthegarden1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 active:opacity-70"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://tiktok.com/@itsthegarden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 active:opacity-70"
              >
                <TikTokIcon className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">
              Shop
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 active:opacity-70"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/lips"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 active:opacity-70"
                >
                  Lips
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/make-up-community"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 active:opacity-70"
                >
                  Make-Up Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 active:opacity-70"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.acuityscheduling.com/schedule.php?owner=16663445"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 active:opacity-70"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 active:opacity-70"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1 active:opacity-70"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wide">
              Subscribe to our emails
            </h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our mailing list for insider news, product launches, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-background h-11"
              />
              <Button type="submit" className="w-full h-11">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-muted-foreground mb-4">
            <span>Amazon</span>
            <span>•</span>
            <span>American Express</span>
            <span>•</span>
            <span>Apple Pay</span>
            <span>•</span>
            <span>Diners Club</span>
            <span>•</span>
            <span>Discover</span>
            <span>•</span>
            <span>Google Pay</span>
            <span>•</span>
            <span>Mastercard</span>
            <span>•</span>
            <span>PayPal</span>
            <span>•</span>
            <span>Shop Pay</span>
            <span>•</span>
            <span>Visa</span>
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            &copy; {currentYear}, Ellianna Beauty
          </p>
        </div>
      </div>
    </footer>
  )
}
