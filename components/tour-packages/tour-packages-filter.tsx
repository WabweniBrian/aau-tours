"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, ChevronDown, X } from "lucide-react"

export function TourPackagesFilter() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const categories = [
    { id: "wildlife", name: "Wildlife Safaris" },
    { id: "gorilla", name: "Gorilla Trekking" },
    { id: "bird", name: "Bird Watching" },
    { id: "cultural", name: "Cultural Tours" },
    { id: "motorsport", name: "Motorsport Tours" },
  ]

  const durations = [
    { id: "1-3", name: "1-3 Days" },
    { id: "4-7", name: "4-7 Days" },
    { id: "8-14", name: "8-14 Days" },
    { id: "15+", name: "15+ Days" },
  ]

  const priceRanges = [
    { id: "budget", name: "Budget (< $1000)" },
    { id: "mid", name: "Mid-range ($1000-$2000)" },
    { id: "luxury", name: "Luxury ($2000+)" },
  ]

  const toggleFilter = (filterId: string) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter((id) => id !== filterId))
    } else {
      setActiveFilters([...activeFilters, filterId])
    }
  }

  const clearFilters = () => {
    setActiveFilters([])
  }

  return (
    <section className="py-8 bg-white sticky top-0 z-30 border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center">
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="flex items-center space-x-2 text-foreground font-medium"
            >
              <Filter size={18} />
              <span>Filters</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${isFiltersOpen ? "rotate-180" : ""}`}
              />
            </button>

            {activeFilters.length > 0 && (
              <div className="ml-4 flex items-center">
                <span className="text-sm text-foreground/60 mr-2">{activeFilters.length} active filters</span>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary flex items-center hover:underline"
                  aria-label="Clear all filters"
                >
                  Clear all <X size={14} className="ml-1" />
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm text-foreground/60 mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                className="bg-transparent border-b border-gray-300 py-1 pr-8 focus:outline-none focus:border-primary text-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration-short">Duration: Shortest First</option>
                <option value="duration-long">Duration: Longest First</option>
              </select>
            </div>

            <div className="flex items-center">
              <label htmlFor="view" className="text-sm text-foreground/60 mr-2">
                View:
              </label>
              <select
                id="view"
                className="bg-transparent border-b border-gray-300 py-1 pr-8 focus:outline-none focus:border-primary text-sm"
              >
                <option value="grid">Grid</option>
                <option value="list">List</option>
              </select>
            </div>
          </div>
        </div>

        {/* Expandable filters */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isFiltersOpen ? "auto" : 0, opacity: isFiltersOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-6 pb-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-3">Tour Type</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => toggleFilter(category.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      activeFilters.includes(category.id)
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-foreground/80"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3">Duration</h3>
              <div className="flex flex-wrap gap-2">
                {durations.map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => toggleFilter(duration.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      activeFilters.includes(duration.id)
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-foreground/80"
                    }`}
                  >
                    {duration.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3">Price Range</h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => toggleFilter(range.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      activeFilters.includes(range.id)
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-foreground/80"
                    }`}
                  >
                    {range.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
