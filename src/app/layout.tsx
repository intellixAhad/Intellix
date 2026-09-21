import type { Metadata } from "next";
import {
  Playfair_Display,
  IBM_Plex_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

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
  description:
    "Intellix — Software Development, BPO & Technology Solutions from Bangladesh.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plex.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body>
        <div className="w-full min-h-screen bg-black-01 relative z-1 overflow-x-hidden">
          <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1.5px)]  bg-size-[28px_28px]" aria-hidden="true"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
