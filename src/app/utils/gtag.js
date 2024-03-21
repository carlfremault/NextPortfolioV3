import { getCookieConsentValue, Cookies } from "react-cookie-consent";
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const pageview = (url) => {
  if (
    window &&
    typeof window !== "undefined" &&
    window.gtag &&
    getCookieConsentValue() === "true"
  ) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

export const startTracking = () => {
  const gtagScript = document.createElement("script");
  gtagScript.type = "text/javascript";
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(gtagScript);
};

export const stopTracking = () => {
  const domain = `.${window.location.hostname.replace(/^(www\.)?/, "")}`;
  Cookies.remove("_ga", { domain, path: "/" });
  Cookies.remove("_gat", { domain, path: "/" });
  Cookies.remove("_gid", { domain, path: "/" });
};
