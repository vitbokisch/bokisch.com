import React from 'react'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import Heading from '~/components/base/Heading'
import Button from '~/components/base/Button'
import IconLogoList from '~/components/base/IconLogoList'
import data from './data'

const component = () => (
  <Background primary>
    <Section>
      <Header title="Work Experience">
        I am a freelancer with more than 6 years of experience in the business
        at various positions. I have participated on several mid-large
        applications and realized tens of websites from green field to
        production. My work has helped thousands of people around the world.
      </Header>

      <Heading level3>Companies I have collaborated with:</Heading>
      <IconLogoList data={data} itemProps={{ variant: 'box' }} />
      <Button primary inversed label="Show career timeline" />
    </Section>
  </Background>
)

component.displayName = 'sections/WorkExperience'
export default component
