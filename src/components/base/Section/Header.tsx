import type { VNodeChild } from "@pyreon/core";
import { element } from "~/components/core";
import heading from "../Heading";
import Text from "../Text";

const Header = element
  .config({
    name: "base/Section/Header",
  })
  .attrs<{ name?: string }>({
    tag: "header",
    contentAlignX: "center",
  })
  .theme((t, m) => ({
    marginBottom: { xs: t.space.large, md: t.space.xLarge },
    maxWidth: { xs: "90%", lg: "70%", xxl: 996 },
    color: m(t.color.dark.base, t.color.light.base),
  }))
  .variants({
    hidden: {
      display: "none",
    },
  });

const Heading = heading.theme((t) => ({
  marginBottom: { xs: t.space.medium, md: t.space.large },
}));

type Props = {
  title: string;
  children?: VNodeChild;
  hidden?: boolean;
  name?: string;
};

const component = (props: Props) => (
  <Header hidden={props.hidden} name={props.name}>
    <Heading centered level2 label={props.title} />
    <Text paragraph large centered>
      {props.children}
    </Text>
  </Header>
);

component.displayName = "fragments/section/Header";
export default component;
