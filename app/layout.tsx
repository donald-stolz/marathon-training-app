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
  description: "Don's training plan for Austin Marathon 2026",
  generator: "v0.app",
  appleWebApp: {
    title: "Marathon",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/icon0.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-icon.png",
  },
  manifest: "/manifest.json",
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
