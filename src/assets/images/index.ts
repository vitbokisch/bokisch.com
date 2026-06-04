// Logos: `?optimize` (was `?url`) — `imagePlugin` converts each PNG to
// WebP at build time (saves ~70% per logo). The `.src` extraction keeps
// the `Record<string, string>` shape IconLogo's `<img src>` lookup needs;
// the full descriptor (with srcset/width/height) is available off the
// import if a consumer ever wants responsive sources for these too.
import logoBeihangUni from "./logo-beihang-uni.png?optimize";
import logoCinnamon from "./logo-cinnamon.png?optimize";
import logoCtuUni from "./logo-ctu-uni.png?optimize";
import logoCzm from "./logo-czm.png?optimize";
import logoExaforce from "./logo-exaforce.png?optimize";
import logoInvisible from "./logo-invisible.png?optimize";
import logoMews from "./logo-mews.png?optimize";
import logoProcesment from "./logo-procesment.png?optimize";
import logoSamba from "./logo-samba.png?optimize";
import logoSpendee from "./logo-spendee.png?optimize";
import logoStrv from "./logo-strv.png?optimize";
import logoTechloop from "./logo-techloop.png?optimize";
import logoUgentUni from "./logo-ugent-uni.png?optimize";
// Profile: also `?optimize` — already exposed as the full descriptor
// (`vitProfileImage`) for OptimizedImage's `source={…}` consumer.
import vitProfile from "./vit-profile.png?optimize";

export const images: Record<string, string> = {
  "logo-beihang-uni.png": logoBeihangUni.src,
  "logo-cinnamon.png": logoCinnamon.src,
  "logo-ctu-uni.png": logoCtuUni.src,
  "logo-czm.png": logoCzm.src,
  "logo-exaforce.png": logoExaforce.src,
  "logo-invisible.png": logoInvisible.src,
  "logo-mews.png": logoMews.src,
  "logo-procesment.png": logoProcesment.src,
  "logo-samba.png": logoSamba.src,
  "logo-spendee.png": logoSpendee.src,
  "logo-strv.png": logoStrv.src,
  "logo-techloop.png": logoTechloop.src,
  "logo-ugent-uni.png": logoUgentUni.src,
  "vit-profile.png": vitProfile.src,
};

// Full optimized descriptor (srcset/width/height/placeholder) for the
// profile photo — exposed for consumers that can use responsive sources.
export const vitProfileImage = vitProfile;
