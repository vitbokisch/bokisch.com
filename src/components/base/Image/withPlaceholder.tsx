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

// Reactive accessor — without it, the `!props.src` short-circuit is
// frozen at mount time and ignores later signal-driven src changes.
const Component = (props: Props) => () => {
  if (!props.src) return null;
  const optimized = images(props.src);
  if (!optimized?.src) return null;
  return (
    <img
      src={optimized.src}
      alt={props.alt ?? ""}
      loading={props.loading ?? "lazy"}
      class={props.class}
      style={props.style as string | undefined}
      width={props.width ?? optimized.width}
      height={props.height ?? optimized.height}
    />
  );
};

Component.displayName = "base/Image/Img";

export default Component;
