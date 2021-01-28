import React from 'react'
import Background from '~/components/base/Background'
import Section from '~/components/base/Section'
import Header from '~/components/fragments/section/Header'
import Timeline from '~/components/base/timeline'
import data from './data'

const component = () => (
  <Background secondary>
    <Section>
      <Header title="Career Timeline">
        Having a broaad knowledge from several fields is important to
        understand. Having a broad knowledge important to understand from
        several is.
      </Header>

      <Timeline data={data} />
    </Section>
  </Background>
)

component.displayName = 'sections/CertificatesHobbies'
export default component
