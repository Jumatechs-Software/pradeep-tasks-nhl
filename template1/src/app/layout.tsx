import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font_poppins",
});

const gilroy = localFont({
  weight: "500",
  variable: "--font_gilroy",
  src: "../../public/fonts/gilroy.ttf",
});

export const metadata: Metadata = {
  title: "Child Care",
  description: "Childcare Website Template 1",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/android-chrome-192x192.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // style={{
        //   fontFamily: poppins.style.fontFamily,
        //   fontWeight: poppins.style.fontWeight,
        // }}
        className={`${poppins.variable} ${gilroy.variable}`}
      >
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
