"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from 'lucide-react'
import { useMediaQuery } from "@/hooks/use-media-query"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Smart Contracts", href: "#" },
  { name: "Services", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Roadmap", href: "#" },
  { name: "Whitepaper", href: "#" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  React.useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, isMobile])

  React.useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    }
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 z-50 w-full bg-background shadow-lg md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
                  Serendale
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex-grow overflow-y-auto">
                <ul className="p-4 space-y-2">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3 px-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        <ChevronRight className="h-5 w-5 opacity-50" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="border-t p-4">
                <div className="flex justify-between items-center">
                  <ThemeToggle />
                  <Button variant="outline" size="sm">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

