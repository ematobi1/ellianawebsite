"use client"

import Link from "next/link"
import { ShoppingCart, Search, Menu, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const navigation: { name: string; href: string; external?: boolean }[] = [
  { name: "Home", href: "/" },
  { name: "Booking", href: "https://app.acuityscheduling.com/schedule.php?owner=16663445", external: true },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
]

export function Header() {
  const cartItemCount = 0 // TODO: Connect to cart state

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 min-w-0">
          <span className="font-heading text-lg sm:text-xl md:text-2xl font-semibold italic tracking-wide truncate">
            Ellianna Beauty
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          {/* Search - hidden on small mobile */}
          <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9 md:h-10 md:w-10">
            <Search className="h-4 w-4 md:h-5 md:w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10">
                <User className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/account" className="w-full">My Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/orders" className="w-full">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/bookings" className="w-full">Bookings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative h-9 w-9 md:h-10 md:w-10">
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-4 w-4 md:h-5 md:w-5 rounded-full p-0 flex items-center justify-center text-[10px] md:text-xs">
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 md:h-10 md:w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-heading text-lg font-semibold italic">Menu</span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col p-4 space-y-1">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center py-3 px-4 text-base font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-accent rounded-lg active:bg-accent/80"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="mt-auto p-4 border-t">
                  <div className="flex items-center justify-center space-x-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href="/account">Sign In</Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href="/products">Shop</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
