import { splitProps } from "@pyreon/core";
import type { AnyComponent } from "~/types";

type Props = {
  author?: string;
  quote?: string;
  [key: string]: unknown;
};

type HOC = (WrappedComponent: AnyComponent<Props>) => AnyComponent<Props>;

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: AnyComponent<Props>) => {
  const Enhanced = (props: Props) => {
    const [, rest] = splitProps(props, ["author", "quote"]);
    return <WrappedComponent {...rest} />;
  };

  Enhanced.displayName = `Quote(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return Enhanced;
};

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent);
};

export default Component;
