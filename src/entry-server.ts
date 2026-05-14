import { routes } from "virtual:zero/routes";
import { createServer } from "@pyreon/zero";

export default createServer({
  routes,
  config: {
    ssr: { mode: "string" },
  },
});
