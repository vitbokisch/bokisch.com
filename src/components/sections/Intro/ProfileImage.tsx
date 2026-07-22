import { OptimizedImage } from "@pyreon/zero/image";
import { vitProfileImage } from "~/assets/images";
import { element } from "~/components/core";

// `<OptimizedImage source={…}>` spreads every field from the `?optimize`
// descriptor (src + srcset + width + height + placeholder + formats) onto
// `<Image>` — no hand-rolled `<img>` wrapper can silently drop any of them.
// The Image runtime reserves `aspect-ratio` + `max-width` on its container
// pre-decode → no CLS when the WebP arrives.
const ProfileImage = () => (
  <OptimizedImage
    source={vitProfileImage}
    alt="Vit Bokisch"
    priority
    style="width: auto; height: 100%;"
  />
);

export default element
  .config({
    name: "sections/Intro/ProfileImageWrapper",
  })
  .attrs({ content: ProfileImage })
  .theme({
    position: "absolute",
    right: { xs: -160, sm: -180, lg: -100, xxl: "initial" },
    bottom: { xs: -70, md: 0 },
    // Explicit width matches image aspect (~1:1) — without it the
    // OptimizedImage's inner container (aspect-ratio + max-width: 614)
    // sizes itself off content, ignoring the wrapper's intended footprint.
    // Scaled down on xs so the profile peeks in gracefully instead of
    // dominating the mobile viewport.
    width: { xs: 380, md: 640 },
    height: { xs: 380, md: 640 },
    left: { xxl: "55%" },
  });
