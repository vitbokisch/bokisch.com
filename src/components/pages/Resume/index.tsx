import React from 'react'
import dynamic from 'next/dynamic'
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

const MainMenu = dynamic(() => import('~/components/sections/menu/MainMenu'))

const CareerTimeline = dynamic(
  () => import('~/components/sections/CareerTimeline')
)

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
