"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { startTracking, stopTracking } from "../utils/gtag";

const CookiesContext = createContext<CookiesContext | undefined>(undefined);

function CookiesContextProvider({ children }: { children: React.ReactNode }) {
  const [GATrackingConsent, setGATrackingConsent] = useState(
    getCookieConsentValue() === "true",
  );

  useEffect(() => {
    if (GATrackingConsent) startTracking();
    else stopTracking();
  }, [GATrackingConsent]);

  return (
    <CookiesContext.Provider
      value={{
        setGATrackingConsent,
      }}
    >
      {children}
    </CookiesContext.Provider>
  );
}

function useCookies() {
  const context = useContext(CookiesContext);
  if (context === undefined) {
    throw new Error("useCookie must be used within a CookiesContextProvider");
  }
  return context;
}

export { useCookies };
export default CookiesContextProvider;
