import { h, mergeProps } from "@pyreon/core";
import { useRouter } from "@pyreon/router";

type Props = Partial<{
  href: string;
  onClick: (e: MouseEvent) => void;
  external: boolean;
  replace: boolean;
  scroll: boolean;
}>;

// Hrefs the browser should handle natively — never route-push these.
const isBrowserHandled = (href: string, external?: boolean) =>
  external === true ||
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("sms:");

// biome-ignore lint/suspicious/noExplicitAny: rocketstyle compose plumbing
type ComponentLike = (props: any) => any;
// biome-ignore lint/suspicious/noExplicitAny: rocketstyle compose plumbing
type HOC = (WrappedComponent: ComponentLike) => (props: Props) => any;

// HOC must preserve getter-shaped reactive props the compiler emits via
// `_rp(() => …)`. The naive `<WrappedComponent {...props} />` triggers
// JSX spread which is emitted as `Object.assign({}, obj)` — FIRES every
// getter at spread time and value-copies the result. We instead build
// a descriptor-preserving props object via `mergeProps` (from
// `@pyreon/core`) and pass it as a single argument to `h(...)`,
// bypassing the spread entirely. Pyreon's `h` calls `makeReactiveProps`
// internally which honors getter descriptors downstream.
//
// Derived attributes (`rel` / `target`) depend on the reactive `href`
// and are defined as getters so they re-evaluate on href change;
// otherwise they'd capture the initial-render value and silently
// drift out of sync from a hover-gated mailto.
const component: HOC = (WrappedComponent) => {
  const Enhanced = (props: Props) => {
    const router = useRouter();

    // `mergeProps<T>` requires all sources to share the same `T`; the
    // overrides below intentionally add HTML attributes not in `Props`
    // (rel / target / onClick), so cast both sides to a wider shape.
    const overrides = {
      get rel() {
        return props.href && isBrowserHandled(props.href, props.external)
          ? "noopener noreferrer"
          : undefined;
      },
      get target() {
        return props.href &&
          (props.external === true ||
            props.href.startsWith("http://") ||
            props.href.startsWith("https://"))
          ? "_blank"
          : undefined;
      },
      onClick: (e: MouseEvent) => {
        if (props.onClick) props.onClick(e);
        const href = props.href;
        if (!href || href === "#") return;
        if (isBrowserHandled(href, props.external)) return;
        e.preventDefault();
        if (props.replace) router.replace(href);
        else router.push(href);
      },
    } as Record<string, unknown>;

    const merged = mergeProps(props as Record<string, unknown>, overrides);
    return h(WrappedComponent, merged);
  };

  return Enhanced;
};

export default component;
