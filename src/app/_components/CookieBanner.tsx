"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  // Get consent in case it's stored in local storage
  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cfportfolio_cookie_consent");

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  // Update GA consent
  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });
  }, [cookieConsent]);

  const handleConsent = (consent: boolean) => {
    setCookieConsent(consent);
    setLocalStorage("cfportfolio_cookie_consent", consent);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0
                        mx-auto my-10 max-w-max 
                        flex-col items-center justify-between gap-4 rounded-lg bg-gray-700 px-3 py-3 text-orange-300  
                        shadow md:max-w-screen-sm md:px-4 ${
                          cookieConsent != null ? "hidden" : "flex"
                        }`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p>
            This site uses Google Analytics to understand how you use it. This
            involves collecting anonymous data about your browsing behavior.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <a
          href="https://blog.google/around-the-globe/google-europe/google-analytics-facts/"
          className=""
          target="_blank"
          rel="noreferrer"
        >
          <button className="rounded-md border border-orange-300 px-5 py-2 text-orange-300">
            More info
          </button>
        </a>
        <button
          className="rounded-md border border-orange-300 px-5 py-2 text-orange-300"
          onClick={() => handleConsent(false)}
        >
          Decline
        </button>
        <button
          className="rounded-lg border border-orange-300 bg-gray-900 px-5 py-2 text-orange-300"
          onClick={() => handleConsent(true)}
        >
          Allow
        </button>
      </div>
    </div>
  );
}
