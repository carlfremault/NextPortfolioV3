import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../_components/navbar/Navbar";
import ContactLinks from "../_components/ContactLinks";
import GoogleAnalytics from "../_components/GoogleAnalytics";
import CookieBanner from "../_components/CookieBanner";
import * as gtag from "../utils/gtag";

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
  const trackingId = gtag.GA_TRACKING_ID!;

  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={trackingId} />
      <body
        className={`${inter.className} mx-auto max-w-7xl content-center bg-slate-900 px-10 py-5`}
      >
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <aside className="my-6 basis-1/4  border-b border-orange-300 md:border-none">
            <ContactLinks />
          </aside>
          <main className="my-6 basis-3/4 md:border-l md:border-orange-300">
            <div className="mb-5 w-full pt-5 text-orange-300 md:px-10">
              {children}
            </div>
          </main>
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
