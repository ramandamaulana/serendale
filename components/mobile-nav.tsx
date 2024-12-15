"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Smart Contracts", href: "#smart-contracts" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Whitepaper", href: "#whitepaper" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="relative h-full w-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
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
              <ScrollArea className="flex-grow">
                <nav className="p-4">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between py-3 px-4 text-lg font-medium rounded-lg hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </ScrollArea>
              <div className="border-t p-4">
                <div className="flex items-center justify-between">
                  <ThemeToggle />
                  <Button>Get Started</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

