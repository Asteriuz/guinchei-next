import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./styles/animation.css";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className + " overflow-x-hidden"}>
        {children}
        <Footer />
      </body>
      <Script src="scroll.js" strategy="lazyOnload" />
    </html>
  );
}