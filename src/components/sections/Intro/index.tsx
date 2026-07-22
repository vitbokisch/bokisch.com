import Background from "~/components/base/Background";
import { Container } from "~/components/base/grid";
import section from "~/components/base/Section";
import { element } from "~/components/core";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import ProfileImage from "./ProfileImage";

const Element = element.theme({ height: "inherit" });

const Section = section
  .theme({
    height: "100vh",
    // Pin min + max so the hero slot is reserved at hydration regardless
    // of font swap — siblings below (Quote, Companies) can't be pushed.
    // Eliminates the CLS shift Lighthouse flagged on "Years of Shipping".
    minHeight: { xs: 640, md: 840 },
    maxHeight: { xs: 640, md: 840 },
    overflow: "hidden",
    background:
      "linear-gradient(180deg, #a5aead 0%, #b1bab9 52%, #b0b8b7 100%)",
  })
  .variants(() => ({
    fullScreen: {
      height: "100vh",
      // Keep hero within viewport at lg+ — the previous `lg: 1400` made
      // the section taller than typical laptop viewports (1440x900 has
      // ~820px of usable height after browser chrome), pushing the
      // content + profile photo below the fold on the homepage.
      minHeight: { xs: 640, md: 800 },
      maxHeight: { xs: 640, md: 800 },
    },
  }));

type Props = {
  heading: string;
  variant?: (typeof Section)["$$types"]["variant"];
};

const Component = (props: Props) => (
  <Section variant={props.variant}>
    <ProfileImage />
    <Background overlay />

    <Container css="height: 100%;">
      <Element
        gap={36}
        block
        direction="rows"
        beforeContent={Header}
        beforeContentDirection="rows"
        beforeContentAlignX="block"
        content={<Content heading={props.heading} />}
        contentDirection="rows"
        afterContent={Footer}
        afterContentAlignX="center"
      />
    </Container>
  </Section>
);

Component.displayName = "sections/Intro";
export default Component;
