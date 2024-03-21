"use client";

import CC from "react-cookie-consent";
import { useCookies } from "../_context/CookiesContext";

export default function CookieBanner() {
  const { setGATrackingConsent } = useCookies();

  const handleSubmit = (consent: boolean) => {
    setGATrackingConsent(consent);
  };

  return (
    <CC
      disableStyles
      onAccept={() => handleSubmit(true)}
      onDecline={() => handleSubmit(false)}
      enableDeclineButton
      buttonText="Allow"
      declineButtonText="Decline"
      containerClasses="fixed bottom-0 left-0 right-0 mx-auto my-10 max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-gray-700 px-3 py-3 text-orange-300 shadow md:max-w-screen-sm md:px-4"
      buttonClasses="rounded-md border border-orange-300 px-5 py-2 text-orange-300"
      declineButtonClasses="rounded-md border border-orange-300 px-5 py-2 text-orange-300"
      buttonWrapperClasses="flex gap-6 justify-center"
    >
      <div className="text-center">
        This site uses Google Analytics to understand how you use it. This
        involves collecting anonymous data about your browsing behavior.
      </div>
      <div className="my-6 text-center underline">
        <a
          href="https://blog.google/around-the-globe/google-europe/google-analytics-facts/"
          className="center"
          target="_blank"
          rel="noreferrer"
        >
          More info
        </a>
      </div>
    </CC>
  );
}
