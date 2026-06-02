import { Show, splitProps } from "@pyreon/core";
import type { AnyComponent } from "~/types";
import link from "../Link";

const Link = link.attrs({
  contentAlignX: "block",
});

export type Props = Partial<{
  link: string;
  name: string;
}>;

type HOC = (WrappedComponent: AnyComponent<Props>) => AnyComponent<Props>;

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: AnyComponent<Props>) => {
  const Enhanced = (props: Props & { image?: string }) => {
    const [own, rest] = splitProps(props, ["link", "name", "image"]);
    return (
      <Show
        when={() => own.link}
        fallback={<WrappedComponent {...rest} name="" />}
      >
        <Link href={own.link}>
          <WrappedComponent {...rest} name="" />
        </Link>
      </Show>
    );
  };

  Enhanced.displayName = `WithLink(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return Enhanced;
};

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent);
};

export default Component;
