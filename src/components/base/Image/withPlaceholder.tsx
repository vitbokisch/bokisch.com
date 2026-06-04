import { images } from "~/assets/images";

type Props = {
  src?: string;
  alt?: string;
  loading?: "eager" | "lazy";
  class?: string;
  style?: Record<string, unknown> | string;
  width?: number;
  height?: number;
};

// Pyreon component bodies run ONCE. The early `return null` based on
// `props.src` would freeze the conditional at mount time, ignoring later
// signal-driven changes to `src`. Wrap the JSX in a reactive accessor so
// the resolution re-runs whenever the tracked signals change.
//
// `width`/`height` are forwarded as plain HTML attributes — even when the
// CSS resizes the image, the browser uses the intrinsic dimensions to
// compute aspect-ratio and reserves the layout slot pre-decode (eliminates
// CLS). Pyreon's `imagePlugin` (`?optimize`) already extracts these from
// the source PNG/JPG; callers should plumb them through from the
// optimized descriptor (see `vitProfileImage` in `~/assets/images`).
const Component = (props: Props) => () => {
  if (!props.src) return null;
  const url = images(props.src)?.src;
  if (!url) return null;
  return (
    <img
      src={url}
      alt={props.alt ?? ""}
      loading={props.loading ?? "lazy"}
      class={props.class}
      style={props.style as string | undefined}
      width={props.width}
      height={props.height}
    />
  );
};

Component.displayName = "base/Image/Img";

export default Component;
