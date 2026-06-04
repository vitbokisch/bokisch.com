import { createImageRegistry } from "@pyreon/zero";

// `?optimize` query is applied to every glob entry — imagePlugin converts
// each PNG to WebP at native resolution at build time. Lookup keys are
// derived from the basename (with + without extension) automatically.
const images = createImageRegistry(
  import.meta.glob("./*.png", { eager: true, query: "?optimize", import: "default" })
);

export { images };
// Profile photo descriptor still exposed for OptimizedImage's `source` prop
export const vitProfileImage = images("vit-profile");
