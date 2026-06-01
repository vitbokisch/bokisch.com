import { signal } from "@pyreon/reactivity";
import button from "~/components/base/Button";

const Button = button.theme((t) => ({
  marginTop: t.space.xxLarge,
}));

const isHover = signal(false);

// Anti-spam hover-gate: scraped HTML ships `href="#"`; only real users
// with a `mouseenter` event flip the signal to expose the mailto.
//
// The idiomatic form `href={isHover() ? "mailto:…" : "#"}` is auto-
// wrapped by the pyreon compiler as `_rp(() => …)` (reactive prop
// descriptor). The HOC chain (`withLink`) preserves that descriptor
// via `mergeProps` + direct `h()` from `@pyreon/core`.
const Component = () => (
  <Button
    state="primary"
    onMouseEnter={() => isHover.set(true)}
    onMouseLeave={() => isHover.set(false)}
    label="Let's build something together"
    href={isHover() ? "mailto:vit@bokisch.cz" : "#"}
  />
);

export default Component;
