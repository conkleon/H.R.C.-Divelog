import type { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | H.R.C. Divelog",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://divelog.hrclifeguards.org",
    siteName: "H.R.C. Divelog"
  }
};

export default config;
