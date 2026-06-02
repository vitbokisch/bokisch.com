import Layout from "~/components/layouts/Base";
import Footer from "~/components/layouts/Footer";
import Intro from "~/components/sections/Intro";
import Companies from "~/components/sections/resume/Companies";
import Education from "~/components/sections/resume/Education";
import OpenSource from "~/components/sections/resume/OpenSource";
import Quote from "~/components/sections/resume/Quote";
import Technologies from "~/components/sections/resume/Technologies";
import WorkExperience from "~/components/sections/resume/WorkExperience";

const Component = () => (
  <Layout>
    <Intro heading="Resume" />
    <Quote />
    <Companies />
    <OpenSource />
    <Technologies />
    <WorkExperience />
    <Education />
    <Footer />
  </Layout>
);

Component.displayName = "components/pages/Resume";
export default Component;
