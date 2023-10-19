import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carl Fremault - Web developer",
  description: "Carl Fremault's Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto max-w-7xl content-center bg-slate-900 p-10`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
