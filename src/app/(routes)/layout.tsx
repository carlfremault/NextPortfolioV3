import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../_components/navbar/Navbar";
import ContactLinks from "../_components/ContactLinks";

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
        <div className="flex h-[80vh] flex-col md:flex-row">
          <div className="mb-6 basis-1/4 border-b border-orange-300 md:border-none">
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
