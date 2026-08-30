import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/root/footer";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/root/navbar";
import MotionProvider from "@/components/motion/motion-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lalith Sai Kumar - AI/LLM Engineer",
  description: "Lalith Sai Kumar is an AI/LLM engineer building RAG pipelines, FastAPI backends, production ML systems, and cloud-native AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Apply the saved theme before first paint to avoid a light-mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        <MotionProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
