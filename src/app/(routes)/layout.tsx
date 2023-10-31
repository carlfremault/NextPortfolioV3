import "../globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Navbar from "../_components/navbar/Navbar";
import ContactLinks from "../_components/ContactLinks";
import UnsplashImage from "../_components/UnsplashImage";

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
        className={`${inter.className} mx-auto max-w-7xl content-center bg-slate-900 px-10 py-5`}
      >
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <div className="my-6 basis-1/4  border-b border-orange-300 md:border-none">
            <ContactLinks />
          </div>
          <div className="my-6 basis-3/4 md:border-l md:border-orange-300">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
