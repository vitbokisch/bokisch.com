import { Show } from "@pyreon/core";
import Box, { Body, Header } from "../Box";
import heading from "../Heading";
import Icon from "../Icon";
import IconLogo from "../IconLogo";
import Line from "../Line";
import List from "../List";
import Text from "../Text";

const Heading = heading.theme((t) => ({
  marginTop: t.space.large,
}));

const SubHeading = Text.theme((t) => ({
  marginBottom: t.space.medium,
  marginTop: t.space.xSmall,
}));

type Props = {
  state?: (typeof Box)["$$types"]["state"];
  title: (typeof Heading)["$$types"]["label"];
  subtitle?: (typeof SubHeading)["$$types"]["label"];
  note?: (typeof Text)["$$types"]["children"];
  icon?: (typeof Icon)["$$types"]["name"];
  logo?: (typeof IconLogo)["$$types"]["name"];
  list?: (typeof List)["$$types"]["data"];
};

const Component = (props: Props) => (
  <Box large tag="article" state={props.state}>
    <Header>
      <Show when={() => props.icon}>
        <Icon xLarge name={props.icon} />
      </Show>
      <Show when={() => props.logo}>
        <IconLogo circle src={props.logo} />
      </Show>
      <Heading tag="h1" level3 centered label={props.title} />
      <Show when={() => props.subtitle}>
        <SubHeading centered label={props.subtitle} />
      </Show>
      <Show when={() => props.note}>
        <Text small neutral>
          {props.note}
        </Text>
      </Show>
    </Header>

    <Show when={() => props.list}>
      <Line />
    </Show>

    <Body>
      <Show when={() => props.list}>
        <List data={props.list} valueName="label" gap="large" />
      </Show>
    </Body>
  </Box>
);

Component.displayName = "base/Card";
export default Component;
