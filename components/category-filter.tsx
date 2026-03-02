"use client"

import { useRef, useEffect } from "react"
import { categories, type Category } from "@/lib/trends-data"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  selected: Category
  onSelect: (cat: Category) => void
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Scroll the selected button into view on mobile
  useEffect(() => {
    if (!scrollRef.current) return
    const active = scrollRef.current.querySelector("[data-active='true']")
    if (active) {
      active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    }
  }, [selected])

  return (
    <div
      ref={scrollRef}
      className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-x-visible sm:px-0"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          data-active={selected === cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "shrink-0 border px-[var(--grid-unit-eighth)] h-[var(--grid-unit-quarter)] text-sm font-medium transition-all",
            selected === cat
              ? "border-primary/50 bg-primary/10 text-primary"
              : "border-border bg-card text-muted-foreground active:bg-secondary hover:border-border hover:bg-secondary hover:text-foreground"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
