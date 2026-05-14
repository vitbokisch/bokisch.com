import button from "~/components/base/Button";

const Button = button.theme((t) => ({
  marginTop: t.space.xxLarge,
}));

type Props = {
  onClick: () => void;
  label: string;
};

const Component = (props: Props) => (
  <Button state="primary" onClick={props.onClick} label={props.label} />
);

export default Component;
