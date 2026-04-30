import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import AddToCartToast from "@/components/ui/AddToCartToast";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Johnny & Jugnu",
  description: "J&J clone built with Next.js App Router and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning Next.js aur next-themes ke conflicts roknay ke liye zaroori hai
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] antialiased transition-colors duration-300">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <AddToCartToast />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}