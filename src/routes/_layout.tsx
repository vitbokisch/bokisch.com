import { RouterView } from "@pyreon/router";
import { PyreonUI } from "@pyreon/ui-core";
import { initTheme, resolvedTheme } from "~/store";
import GlobalStyle from "~/theme/GlobalStyles";
import theme from "~/theme/theme";

export function layout() {
  // Initialize zero's theme system at the app root. Wires up (via
  // onMount→effect): localStorage persistence, OS-preference reactivity,
  // the <html data-theme> attribute, and runtime favicon variant swapping
  // on theme change. Without this only faviconPlugin's one-shot pre-paint
  // script runs, so an in-session toggle wouldn't update the favicon
  // until reload.
  initTheme();

  return (
    <PyreonUI theme={theme} mode={() => resolvedTheme()}>
      <GlobalStyle />
      <RouterView />
    </PyreonUI>
  );
}
