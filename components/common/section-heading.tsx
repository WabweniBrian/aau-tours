"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  subtitleClassName?: string
  withAccent?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  subtitleClassName,
  withAccent = true,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12")}>
      {withAccent && (
        <motion.div
          className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Discover
        </motion.div>
      )}
      <motion.h2
        className={cn("heading-md", className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={cn("text-foreground/70 mt-4 max-w-3xl", centered && "mx-auto", subtitleClassName)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
