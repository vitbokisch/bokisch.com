import { splitProps } from "@pyreon/core";
import type { AnyComponent } from "~/types";

export type Props = Partial<{
  name: string;
  src: string;
  alt: string;
}>;

type HOC = (WrappedComponent: AnyComponent<Props>) => AnyComponent<Props>;

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: AnyComponent<Props>) => {
  const Enhanced = (props: Props) => {
    const [own, rest] = splitProps(props, ["name", "src"]);
    return <WrappedComponent alt={own.name} {...rest} src={own.src} />;
  };

  Enhanced.displayName = `LoadIconLogo(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return Enhanced;
};

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent);
};

export default Component;
