import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gradient-to-br from-green-50 to-green-50 dark:from-gray-900 dark:to-green-950">
      {children}
    </div>
  );
}
