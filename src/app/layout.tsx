import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import Newsletter from "./Components/layout/Newsletter"
import Cp from "./Components/layout/Copyright"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Add Navbar */}
        {/* <div className="max-w-[80%] mx-auto"> */}
        {children}
        <Newsletter/>
        <Footer /> 
        <Cp/>
      </body>
    </html>
  );
}
