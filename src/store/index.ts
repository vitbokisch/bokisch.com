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
