import { images } from "~/assets/images";

type Props = {
  src?: string;
  alt?: string;
  loading?: "eager" | "lazy";
  class?: string;
  style?: Record<string, unknown> | string;
};

// Pyreon component bodies run ONCE. The early `return null` based on
// `props.src` would freeze the conditional at mount time, ignoring later
// signal-driven changes to `src`. Wrap the JSX in a reactive accessor so
// the resolution re-runs whenever the tracked signals change.
const Component = (props: Props) => () => {
  if (!props.src) return null;
  const url = images[props.src];
  if (!url) return null;
  return (
    <img
      src={url}
      alt={props.alt ?? ""}
      loading={props.loading ?? "lazy"}
      class={props.class}
      style={props.style as string | undefined}
    />
  );
};

Component.displayName = "base/Image/Img";

export default Component;
