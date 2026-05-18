import { Meta } from "@pyreon/zero/meta";
import background from "~/components/base/Background";
import Layout from "~/components/layouts/Base";
import Intro from "~/components/sections/Intro";
import config from "~/config";

const Background = background.theme({
  minHeight: "100vh",
  background: `linear-gradient(
      180deg,
      #a5aead 0%,
      #b1bab9 52.08%,
      #b0b8b7 100%
    )`,
});

export default function NotFound() {
  return (
    <>
      <Meta title="404 — Vit Bokisch" canonical={config.url} />
      <Layout>
        <Background>
          <Intro heading="404" variant="fullScreen" />
        </Background>
      </Layout>
    </>
  );
}
