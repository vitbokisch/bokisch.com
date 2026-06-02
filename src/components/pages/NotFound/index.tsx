import { PyreonUI } from "@pyreon/ui-core";
import Background from "~/components/base/Background";
import Button from "~/components/base/Button";
import { Container } from "~/components/base/grid";
import Heading from "~/components/base/Heading";
import Text from "~/components/base/Text";
import { element } from "~/components/core";
import Layout from "~/components/layouts/Base";
import Header from "~/components/sections/Intro/Header";
import theme from "~/theme/theme";

const GradientBackground = Background.theme({
  minHeight: "100vh",
  background: `linear-gradient(
    180deg,
    #a5aead 0%,
    #b1bab9 52.08%,
    #b0b8b7 100%
  )`,
});

const Stack = element.theme(() => ({
  minHeight: "100vh",
}));

const Hero = element.theme(() => ({
  flex: 1,
  minHeight: { xs: "70vh", md: "60vh" },
}));

const Code = Heading.theme((t) => ({
  fontSize: {
    xs: "5rem",
    sm: t.fontSize.jumbo,
    lg: "12rem",
  },
  marginBottom: t.space.small,
  letterSpacing: "-0.05em",
}));

const Message = Text.theme((t) => ({
  marginBottom: t.space.xLarge,
  fontSize: {
    xs: t.fontSize.base,
    md: t.fontSize.large,
  },
  textAlign: "center",
}));

const Component = () => (
  <Layout>
    <GradientBackground>
      <PyreonUI theme={theme} inversed>
        <Container>
          <Stack
            block
            direction="rows"
            beforeContent={Header}
            beforeContentDirection="rows"
            beforeContentAlignX="block"
            content={
              <Hero
                block
                direction="rows"
                contentAlignX="center"
                contentAlignY="center"
              >
                <Code size="level1">404</Code>
                <Message state="base">This page doesn't exist.</Message>
                <Button state="primary" href="/" label="Go to home" />
              </Hero>
            }
            contentDirection="rows"
          />
        </Container>
      </PyreonUI>
    </GradientBackground>
  </Layout>
);

Component.displayName = "components/pages/NotFound";
export default Component;
