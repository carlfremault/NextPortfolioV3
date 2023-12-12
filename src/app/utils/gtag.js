export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const pageview = (GA_MEASUREMENT_ID, url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_location: url,
  });
};
