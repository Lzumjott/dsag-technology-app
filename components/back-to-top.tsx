"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Zurück nach oben"
      className={cn(
        "fixed bottom-[var(--grid-unit-quarter)] right-[var(--grid-unit-quarter)] z-40 flex h-[var(--grid-unit-quarter)] w-[var(--grid-unit-quarter)] items-center justify-center border border-border bg-card text-muted-foreground shadow-lg transition-all hover:bg-secondary hover:text-foreground",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
