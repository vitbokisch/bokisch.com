import { link } from "~/components/core";

export default link
  .config({ name: "base/Button" })
  .theme((t) => ({
    height: 48,
    fontSize: t.fontSize.base,
    paddingX: t.space.large,
    borderRadius: t.borderRadius.base,
    borderWidth: t.borderWidth.base,
    borderStyle: t.borderStyle.base,
    textAlign: "center",
  }))
  .states((t) => ({
    // White text on `primary.dark` (#0E7490) reaches 5.27:1 — comfortably
    // AA. Brand reads slightly darker than cyan-500 but keeps the classic
    // "white-on-cyan" pairing. Hover/active step through the palette.
    primary: {
      color: t.color.light.base,
      backgroundColor: t.color.primary.dark,
      borderColor: t.color.primary.dark,

      hover: {
        color: t.color.light.base,
        backgroundColor: t.color.primary.medium,
        borderColor: t.color.primary.medium,
      },
      active: {
        color: t.color.light.base,
        backgroundColor: t.color.primary.dark,
        borderColor: t.color.primary.dark,
      },
    },
  }));
