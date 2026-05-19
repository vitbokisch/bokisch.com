/// <reference types="vite/client" />

declare module "virtual:zero/routes" {
  // biome-ignore lint/suspicious/noExplicitAny: zero virtual module
  export const routes: any;
}

// @pyreon/zero imagePlugin `?optimize` import — build-time WebP variants.
// vite/client only declares `*?url`; this is the imagePlugin descriptor.
declare module "*?optimize" {
  const value: {
    src: string;
    srcset: string;
    width: number;
    height: number;
    placeholder: string;
    formats?: { type: string; srcset: string }[];
    sources?: { src: string; width: number; format: string }[];
  };
  export default value;
}
