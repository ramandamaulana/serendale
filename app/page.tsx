import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
    </main>
  )
}

