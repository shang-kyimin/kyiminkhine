import type { Metadata } from "next";
import "./globals.css";
import { Barlow, Overpass } from "next/font/google";
import Header from "@/components/shares/Header";
import Footer from "@/components/shares/Footer";


const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--title",
});

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--content",
});


export const metadata: Metadata = {
  title: "Ciao, Io sono Kyi Min Khine",
  description: "A self-taught software developer, based in Pavia, Italy. I build software (mostly web-based) that are practical and reliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${overpass.variable}`}>
      <body className="font-content max-w-4xl mx-auto bg-gradient-to-br from-[#EEF2FF] to-[#C7D2FE]">
        <Header />

        <main className="max-w-3xl mx-auto p-2 md:p-3">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}


