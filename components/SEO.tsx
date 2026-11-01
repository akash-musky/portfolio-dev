import Head from "next/head";
import { profile } from "../content/profile";

export default function SEO() {
  const title = "Akash Kumar — Senior Software Engineer";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={profile.description} />
      <meta name="author" content={profile.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0c0f14" />
      <link rel="canonical" href={profile.url} />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={profile.description} />
      <meta property="og:url" content={profile.url} />
      <meta property="og:image" content={`${profile.url}social-preview.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Akash Kumar — Senior software engineer, backend systems, and applied AI" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={profile.description} />
      <meta name="twitter:image" content={`${profile.url}social-preview.png`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            url: profile.url,
            jobTitle: "Senior Software Engineer",
            worksFor: { "@type": "Organization", name: "Fleetx" },
          }),
        }}
      />
    </Head>
  );
}
