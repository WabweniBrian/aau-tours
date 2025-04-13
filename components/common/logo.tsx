import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "to-brand-purple mr-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand text-white shadow-lg",
        className,
      )}
    >
      <Sparkles size={24} />
    </div>
  );
};

export default Logo;
