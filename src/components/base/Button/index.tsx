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
    // Brand-cyan bg + dark text — the convention for bright accent buttons
    // (Stripe/Linear/Vercel pattern). Light text on `primary.base` is the
    // visually obvious pairing but only hits 2.28:1 (fails WCAG AA); dark
    // text on the same brand cyan reaches 6.12:1 (close to AAA) and keeps
    // the recognizable color. Hover darkens the bg one step; active (the
    // brief mousedown state) goes to `primary.dark` with light text, where
    // the high-contrast pressed cue justifies the swap.
    primary: {
      color: t.color.dark.base,
      backgroundColor: t.color.primary.base,
      borderColor: t.color.primary.base,

      hover: {
        color: t.color.dark.base,
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
