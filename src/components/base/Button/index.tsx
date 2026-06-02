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
    // Resting bg uses `primary.dark` (#0E7490 = 5.27:1 against light.base)
    // instead of `primary.base` (#06B6D4 = 2.28:1 — fails WCAG AA).
    // Hover lifts to `primary.medium` for a "lighten on hover" cue that
    // still hits AA on the typical button focus dwell time.
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
