import React from 'react'
import Root from '~/components/base/skeleton/Root'
import MainMenu from '~/components/sections/menu/MainMenu'
import Intro from '~/components/sections/Intro'
import Quote from '~/components/sections/Quote'
import Personality from '~/components/sections/Personality'
import Knowledge from '~/components/sections/Knowledge'
import Technologies from '~/components/sections/Technologies'
import WorkExperience from '~/components/sections/WorkExperience'
import Education from '~/components/sections/Education'
import CertificatesHobbies from '~/components/sections/CertificatesHobbies'
import CareerTimeline from '~/components/sections/CareerTimeline'
import Footer from '~/components/sections/Footer'

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
    <MainMenu />
  </Root>
)

component.displayName = 'components/pages/Resume'
export default component
