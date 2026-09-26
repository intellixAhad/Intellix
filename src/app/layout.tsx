import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IntellixIntro from "@/components/IntellixIntro";
import "@/components/intellix-intro.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const plex = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrain",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Intellix Solutions",
  description: "Intellix — Software Development, BPO & Technology Solutions from Bangladesh.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${plex.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="bg-black-01 text-white-01 antialiased">
        <div className="relative min-h-screen bg-black-01">
          <main className="relative z-10">
            <Navbar />
            {/* <IntellixIntro> */}
              <div
                className="pointer-events-none fixed inset-0 -z-100 bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1.5px)] bg-size-[40px_40px]"
                aria-hidden="true"
              />
              {children}
            {/* </IntellixIntro> */}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
