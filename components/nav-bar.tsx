"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"

const navItems = [
  { name: "Smart Contracts", href: "#smart-contracts" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Whitepaper", href: "#whitepaper" },
]

export function NavBar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold">Serendale</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <MobileNav />
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
            <Button className="ml-4 hidden md:inline-flex">Get Started</Button>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

