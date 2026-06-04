import { routes } from "virtual:zero/routes";
import { createServer } from "@pyreon/zero/server";

export default createServer({
  routes,
  config: {
    ssr: { mode: "string" },
  },
});
