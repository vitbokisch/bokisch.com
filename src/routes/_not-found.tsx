import { Meta } from "@pyreon/zero/meta";
import NotFound from "~/components/pages/NotFound";
import config from "~/config";

export default function NotFoundRoute() {
  return (
    <>
      <Meta title="404 — Vit Bokisch" canonical={config.url} />
      <NotFound />
    </>
  );
}
