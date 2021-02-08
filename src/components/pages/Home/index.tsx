import React from 'react'
import Root from '~/components/base/skeleton/Root'
import MainMenu from '~/components/sections/MainMenu'
import Intro from '~/components/sections/Intro'
import Quote from '~/components/sections/Quote'
import Personality from '~/components/sections/Personality'
import Knowledge from '~/components/sections/Knowledge'
import Technologies from '~/components/sections/Technologies'
import WorkExperience from '~/components/sections/WorkExperience'
import Education from '~/components/sections/Education'
import CertificatesHobbies from '~/components/sections/CertificatesHobbies'
import CareerTimeline from '~/components/sections/CareerTimeline'

const component = () => (
  <Root>
    {/* <MainMenu /> */}
    <Intro />
    <Quote />
    <Personality />
    <Knowledge />
    <Technologies />
    <WorkExperience />
    <Education />
    <CertificatesHobbies />
    <CareerTimeline />
  </Root>
)

component.displayName = 'base/pages/Home'
export default component
