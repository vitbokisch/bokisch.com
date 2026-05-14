import { signal } from "@pyreon/reactivity";
import button from "~/components/base/Button";

const Button = button.theme((t) => ({
  marginTop: t.space.xxLarge,
}));

const isHover = signal(false);

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
