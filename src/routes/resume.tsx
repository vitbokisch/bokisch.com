import { Meta } from "@pyreon/zero/meta";
import Resume from "~/components/pages/Resume";
import config from "~/config";

export default function ResumePage() {
  return (
    <>
      <Meta
        title="[Resume] Vit Bokisch"
        description={config.description}
        canonical="https://bokisch.com/resume"
        siteName="Vit Bokisch"
        twitterCard="summary_large_image"
      />
      <Resume />
    </>
  );
}
