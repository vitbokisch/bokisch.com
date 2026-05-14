import { RouterView } from "@pyreon/router";
import { PyreonUI } from "@pyreon/ui-core";
import { resolvedTheme } from "~/store";
import GlobalStyle from "~/theme/GlobalStyles";
import theme from "~/theme/theme";

export function layout() {
  return (
    <PyreonUI theme={theme} mode={() => resolvedTheme()}>
      <GlobalStyle />
      <RouterView />
    </PyreonUI>
  );
}
