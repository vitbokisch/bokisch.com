import React from 'react'
import Root from '~/components/base/skeleton/Root'
import Intro from '~/components/sections/Intro'
import Personality from '~/components/sections/Personality'
import Knowledge from '~/components/sections/Knowledge'
import Technologies from '~/components/sections/Technologies'
import WorkExperience from '~/components/sections/WorkExperience'
import Education from '~/components/sections/Education'
import CertificatesHobbies from '~/components/sections/CertificatesHobbies'

const component = () => (
  <Root>
    <Intro />
    <Personality />
    <Knowledge />
    <Technologies />
    <WorkExperience />
    <Education />
    <CertificatesHobbies />
  </Root>
)

component.displayName = 'base/pages/Home'
export default component
