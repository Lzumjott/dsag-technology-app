"use client"

import { categories, type Category } from "@/lib/trends-data"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  selected: Category
  onSelect: (cat: Category) => void
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "rounded-lg border px-4 py-2 text-sm font-medium transition-all",
            selected === cat
              ? "border-primary/50 bg-primary/10 text-primary"
              : "border-border bg-card text-muted-foreground hover:border-border hover:bg-secondary hover:text-foreground"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
