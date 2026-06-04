import {
  initTheme,
  resolvedTheme,
  setTheme,
  theme,
  toggleTheme,
} from "@pyreon/zero/theme";

export { initTheme, resolvedTheme, setTheme, theme, toggleTheme };

export const themeSignal = resolvedTheme;
export const isDarkSignal = () => resolvedTheme() === "dark";

// SSR-safe (returns `false` server-side); non-reactive (read at mount only).
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
