import Root from '~/components/base/skeleton/Root'
import Intro from '~/components/sections/Intro'
import Quote from '~/components/sections/Quote'
import Personality from '~/components/sections/Personality'
import Knowledge from '~/components/sections/Knowledge'
import Technologies from '~/components/sections/Technologies'
import WorkExperience from '~/components/sections/WorkExperience'
import Education from '~/components/sections/Education'
import CertificatesHobbies from '~/components/sections/CertificatesHobbies'
import Footer from '~/components/sections/Footer'
import MainMenu from '~/components/sections/menu/MainMenu'
import CareerTimeline from '~/components/sections/CareerTimeline'

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
  <Root>
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
  </Root>
)

component.displayName = 'components/pages/Resume'
export default component
