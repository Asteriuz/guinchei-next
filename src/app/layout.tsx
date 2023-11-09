import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./styles/animation.css";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import Header from "@/components/Header/Header";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guinchei",
  description: "Chamar um guincho nunca foi tão fácil!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className + " overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
      </body>
      <Script src="js/flowbite.min.js" />
      <Script src="js/nav.js" />
      <Script src="js/scroll.js" />
    </html>
  );
}
