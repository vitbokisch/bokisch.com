import { splitProps } from "@pyreon/core";
import { svgs } from "~/assets/icons";
import type { AnyComponent } from "~/types";

export type Props = Partial<{
  name: string;
  label: string;
  href: string;
  dangerouslySetInnerHTML: { __html: string };
}>;

type HOC = (WrappedComponent: AnyComponent<Props>) => AnyComponent<Props>;

const createEnhancedComponent = (WrappedComponent: AnyComponent<Props>) => {
  const Enhanced = (props: Props) => {
    const [own, rest] = splitProps(props, ["name", "label", "href"]);

    return (
      <WrappedComponent
        href={own.href}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SVG content is from trusted local assets loaded at build time
        dangerouslySetInnerHTML={
          own.name && svgs[own.name] ? { __html: svgs[own.name] } : undefined
        }
        aria-label={own.label || own.name}
        {...rest}
      />
    );
  };

  Enhanced.displayName = `LoadIcon(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return Enhanced;
};

const Component: HOC = (WrappedComponent) =>
  createEnhancedComponent(WrappedComponent);

export default Component;
