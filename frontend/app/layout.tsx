// Import Typography -> Google Fonts
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
// Import Metadata
import type { Metadata } from "next";
// Import Global Styles
import "./globals.css";

// Configure Typography
// Inter - Body
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
// Sora - Headings
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});
// Jetbrains Mono - Extra
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

// Configure Page Metadata
export const metadata: Metadata = {
  title: "Tyler Web Development | TyoDev",
  description: "Professional Custom Built Designs & Development",
};

// Root Layout
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
