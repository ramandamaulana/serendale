"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        A Fast Blockchain.
        <br />
        <span className="text-foreground">Scalable AI.</span>
      </motion.h1>

      <motion.p 
        className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our technology performing fast blockchain (120K TPS) and it has guaranteed
        AI-based data security. Proof of Stake, its consensus algorithm enables
        unlimited speeds.
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
        >
          Get started
        </Button>
        <Button 
          size="lg" 
          variant="secondary"
          className="bg-gradient-to-r from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 dark:from-purple-900 dark:to-purple-800 dark:hover:from-purple-800 dark:hover:to-purple-700"
        >
          Ecosystems
        </Button>
      </motion.div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="fill-none stroke-purple-500/20 dark:stroke-purple-400/20"
            strokeWidth="2"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,202.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            className="fill-none stroke-blue-500/20 dark:stroke-blue-400/20"
            strokeWidth="2"
            d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,213.3C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            className="fill-none stroke-cyan-500/20 dark:stroke-cyan-400/20"
            strokeWidth="2"
            d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128"
          />
        </svg>
      </div>
    </div>
  )
}

