import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name – Portfolio | Fullstack Engineer",
  description: "Fullstack Engineer | Specializing in Agentic AI & Multi-Agent Systems",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-[ui-monospace,Menlo,Monaco,'Courier New',monospace]">
        <div className="min-h-screen flex justify-center">
          <div className="w-full max-w-5xl border-x-2 border-black px-4 md:px-10 py-8 md:py-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
