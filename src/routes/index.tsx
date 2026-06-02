import { Meta } from "@pyreon/zero/meta";
import socials from "~/components/sections/contacts/ContactIconList/data";
import Home from "~/components/pages/Home";
import config from "~/config";

// schema.org Person — makes the site eligible for Google rich results /
// knowledge-panel and gives AI crawlers structured identity. @context is
// added by <Meta jsonLd>.
const personJsonLd = {
  "@type": "Person",
  name: "Vit Bokisch",
  url: config.url,
  description: config.description,
  jobTitle: "Frontend Engineer",
  email: "mailto:vit@bokisch.cz",
  sameAs: socials.map((s) => s.link),
};

export default function HomePage() {
  return (
    <>
      <Meta
        title="Vit Bokisch"
        description={config.description}
        canonical={config.url}
        siteName="Vit Bokisch"
        twitterCard="summary_large_image"
        jsonLd={personJsonLd}
      />
      <Home />
    </>
  );
}
