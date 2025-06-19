import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/common/theme-provider";
import BackToTopButton from "@/components/common/back-button";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import RoadSafetyProvider from "@/components/road-safety/road-safety-provider";

// For headings
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

// For body text
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
export const metadata: Metadata = {
  title: "AAU Tours and Travel",
  description:
    "Experience the beauty of Uganda with tailor-made travel packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${dmSans.variable}`}
    >
      <body>
        {/* Next top loader: Appears at the top of the page on page transition */}
        <NextTopLoader color={"#FF7A00"} zIndex={9999} />
        {/* Toaster */}
        <Toaster
          toastOptions={{
            className:
              "bg-white dark:bg-slate-800 dark:text-slate-200 z-[999999]",
            duration: 3000,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="aau-theme"
        >
          <RoadSafetyProvider>{children}</RoadSafetyProvider>
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
