import { svgs } from "~/assets/logo";
import { element } from "~/components/core";

export default element
	.config({ name: "base/Logo" })
	.attrs({
		contentAlignX: "left",
		contentAlignY: "center",
		dangerouslySetInnerHTML: {
			__html: svgs["logo-vit-bokisch"],
		},
	})
	.theme((t, m) => ({
		width: { xs: 120, sm: 180, lg: 250 },
		color: m(t.color.dark.base, t.color.light.base),
	}))
	.styles(
		(css) => css`
      & > svg {
        width: 100%;
        height: auto;

        & * {
          fill: currentColor;
        }
      }
    `,
	);
