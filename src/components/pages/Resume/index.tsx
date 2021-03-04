import Layout from '~/components/layouts/Base'
import Footer from '~/components/layouts/Footer'
import Intro from '~/components/sections/Intro'
import Quote from '~/components/sections/resume/Quote'
import Personality from '~/components/sections/resume/Personality'
import Knowledge from '~/components/sections/resume/Knowledge'
import Technologies from '~/components/sections/resume/Technologies'
import WorkExperience from '~/components/sections/resume/WorkExperience'
import Education from '~/components/sections/resume/Education'
import CertificatesHobbies from '~/components/sections/resume/CertificatesHobbies'
import CareerTimeline from '~/components/sections/resume/CareerTimeline'
import MainMenu from '~/components/sections/menu/MainMenu'

const data = [
  { label: 'About Me', href: '#about-me' },
  { label: 'Knowledge', href: '#knowledge' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Work Experience', href: '#work-experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates & Hobbies', href: '#certificates-and-hobbies' },
  { label: 'Career Timeline', href: '#career-timeline' },
]

const component = () => (
  <Layout>
    <Intro />
    <Quote />
    <Personality />
    <Knowledge />
    <Technologies />
    <WorkExperience />
    <Education />
    <CertificatesHobbies />
    <CareerTimeline />
    <Footer />
    <MainMenu menu={data} />
  </Layout>
)

component.displayName = 'components/pages/Resume'
export default component
