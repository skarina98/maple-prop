import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Maple Properties - Family-run property investment company transforming dilapidated properties into high-quality homes across England." />
        <meta name="keywords" content="property investment, property refurbishment, UK property, family property company, property development" />
        <meta name="author" content="Maple Properties" />
        <meta property="og:title" content="Maple Properties - Transforming Properties Into Homes" />
        <meta property="og:description" content="Family-run property investment company buying rundown properties across the UK for refurbishment and long-term letting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mapleproperties.co.uk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maple Properties - Transforming Properties Into Homes" />
        <meta name="twitter:description" content="Family-run property investment company buying rundown properties across the UK for refurbishment and long-term letting." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://mapleproperties.co.uk" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
