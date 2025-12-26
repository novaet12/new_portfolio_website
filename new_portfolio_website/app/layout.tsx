import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name – Portfolio | Fullstack Engineer",
  description: "Fullstack Engineer | Specializing in Agentic AI & Multi-Agent Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
