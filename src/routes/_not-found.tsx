import { Meta } from "@pyreon/zero/meta";
import NotFound from "~/components/pages/NotFound";

export default function NotFoundRoute() {
  return (
    <>
      {/* `robots="noindex, nofollow"` is now injected automatically by
          @pyreon/zero's 404 boundary (overrides the <Meta> default), so no
          explicit override needed. No canonical — a 404 shouldn't be a
          duplicate of the homepage in search-engine eyes. */}
      <Meta title="404 — Vit Bokisch" />
      <NotFound />
    </>
  );
}
