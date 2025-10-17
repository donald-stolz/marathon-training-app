import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import {
  Heebo as V0_Font_Heebo,
  Geist_Mono as V0_Font_Geist_Mono,
} from "next/font/google";
import SupabaseContextProvider from "@/context/SupabaseContext";

// Initialize fonts
const _heebo = V0_Font_Heebo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Marathon Training App",
  description: "A training plan for marathon runners",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SupabaseContextProvider>
          {children}
          <Analytics />
        </SupabaseContextProvider>
      </body>
    </html>
  );
}
