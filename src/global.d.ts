interface CollapseHeaderInfo {
  timeFrame: string;
  title: string;
  company?: string;
  companyHref?: string;
  tech?: string;
}

interface BulletPoint {
  title?: string;
  text: string;
}

interface GridImage {
  src: string;
  height: number;
  width: number;
  alt: string;
}

interface ActionButton {
  text: string;
  href: string;
  logo: JSX.Element;
  internal?: boolean;
}

interface Window {
  gtag: any;
}
