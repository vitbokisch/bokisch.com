import { effect } from "@pyreon/reactivity";
import { startClient } from "@pyreon/zero/client";
import { routes } from "virtual:zero/routes";
import { resolvedTheme } from "~/store";

startClient({ routes });

// faviconPlugin injects a one-shot pre-paint script that sets the favicon
// <link media> from the stored/system theme. It has no runtime hook, so an
// in-session theme toggle (ThemeSwitch → toggleTheme) updates the page but
// leaves the favicon stale until the next reload. Re-apply the same media
// toggle reactively whenever resolvedTheme() changes.
effect(() => {
  const mode = resolvedTheme();
  for (const link of document.querySelectorAll<HTMLLinkElement>(
    "[data-favicon-theme]",
  )) {
    link.media = link.dataset.faviconTheme === mode ? "" : "not all";
  }
});
