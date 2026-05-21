import { kinetic } from "@pyreon/kinetic";
import { PyreonUI } from "@pyreon/ui-core";
import Heading from "~/components/base/Heading";
import text from "~/components/base/Text";
import ContactIconList from "~/components/sections/contacts/ContactIconList";
import theme from "~/theme/theme";

// CSS-first staggered entrance on first mount (~3 KB, GPU-composited).
// `appear` triggers the leave→enter transition on the initial render;
// `stagger` cascades each direct child (Heading → tagline → social icons)
// with an 80 ms offset for a polished hero reveal.
//
// `blurInUp` preset inlined locally instead of imported from
// `@pyreon/kinetic-presets` — the package re-exports a `presets` aggregate
// object that references all ~123 preset values, defeating tree-shaking
// (verified: 114 `opacity:0` patterns shipped to the client bundle when
// only one preset was imported). Inlining saves ~16 KB raw / ~1.5 KB gzip.
// Upstream fix tracked separately.
const blurInUp = {
  enterStyle: {
    opacity: 0,
    filter: "blur(8px)",
    transform: "translateY(16px)",
  },
  enterToStyle: { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
  enterTransition: "all 300ms ease-out",
  leaveStyle: { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
  leaveToStyle: {
    opacity: 0,
    filter: "blur(8px)",
    transform: "translateY(16px)",
  },
  leaveTransition: "all 200ms ease-in",
};
const Entrance = kinetic("div").preset(blurInUp).stagger({ interval: 80 });

const Text = text.theme((t) => ({
  maxWidth: { sm: "80%", lg: "60%" },
  marginBottom: t.space.xLarge,
  fontSize: {
    xs: t.fontSize.base,
    md: t.fontSize.large,
    lg: t.fontSize.xLarge,
  },
}));

type Props = {
  heading?: string;
};

const Component = (props: Props) => (
  <PyreonUI theme={theme} inversed>
    <Entrance show={() => true} appear>
      <Heading size="level1" label={props.heading} />
      <Text state="base">
        I build and deliver products that actually ship.
        <br />
        Efficiently and smartly.
      </Text>
      <ContactIconList />
    </Entrance>
  </PyreonUI>
);

export default Component;
