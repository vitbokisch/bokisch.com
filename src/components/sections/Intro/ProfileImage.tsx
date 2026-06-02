import image from "~/components/base/Image";
import { element } from "~/components/core";
import { vitProfileImage } from "~/assets/images";

const ProfileImage = image
  .config({
    name: "sections/Intro/ProfileImage",
  })
  .attrs({
    src: "vit-profile.png",
    loading: "eager",
    alt: "Vit Bokisch",
    // Intrinsic dimensions from the `?optimize` descriptor — lets the
    // browser compute aspect-ratio pre-decode and reserve the layout
    // slot, eliminating the CLS shift Lighthouse flagged.
    width: vitProfileImage.width,
    height: vitProfileImage.height,
  })
  .theme({
    width: "auto",
    height: "100%",
  });

export default element
  .config({
    name: "sections/Intro/ProfileImageWrapper",
  })
  .attrs({ content: ProfileImage })
  .theme({
    position: "absolute",
    right: { xs: -200, sm: -180, lg: -100, xxl: "initial" },
    bottom: { xs: -70, md: 0 },
    height: { xs: 460, md: 640 },
    left: { xxl: "55%" },
  });
