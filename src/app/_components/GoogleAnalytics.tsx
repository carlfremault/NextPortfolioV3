"use client";

import Script from "next/script";
import { GA_TRACKING_ID } from "../utils/gtag";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        id="gtag-tracking"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                
                gtag('config', '${GA_TRACKING_ID}');
                `,
        }}
      />
    </>
  );
}
