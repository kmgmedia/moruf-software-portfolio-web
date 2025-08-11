// app/layout.tsx
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";

// Load Syne font and assign a custom CSS variable
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Moruf Adebola | Portfolio",
  description: "Crafted with passion by Moruf Adebola",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={syne.variable}>
      <body>
        <div className="min-h-screen flex flex-col antialiased font-syne">
          <Header />
          <main className="flex-grow">{children}</main>
          <footer className="w-full flex justify-center py-8 bg-transparent">
            <SocialLinks />
          </footer>
        </div>
      </body>
    </html>
  );
}
