import { DM_Sans } from "next/font/google";
import "./globals.css";

import Hero from "./components/Hero";
import Footer from "./components/Footer";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Alcove",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <main className="container bg-[#111]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
