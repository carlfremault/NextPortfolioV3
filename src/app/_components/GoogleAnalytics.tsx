"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { pageview } from "../utils/gtag";

export default function GoogleAnalytics({
  GA_TRACKING_ID,
}: {
  GA_TRACKING_ID: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    pageview(GA_TRACKING_ID, pathname);
  }, [pathname, GA_TRACKING_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'denied',
                    'functionality_storage': 'denied',
                    'personalization_storage': 'denied',
                    'security_storage': 'denied',
                });
                
                gtag('config', '${GA_TRACKING_ID}');
                `,
        }}
      />
    </>
  );
}
