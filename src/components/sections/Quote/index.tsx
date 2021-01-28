import React from 'react'
import { Container } from '~/components/base/grid'
import Quote from '~/components/base/Quote'
import Background from '~/components/base/Background'
import Section from '~/components/base/Section'

const component = () => (
  <Background primary>
    <Section>
      <Container width={980}>
        <Quote
          author="Albert Einstein"
          quote="“If I had an hour to solve a problem I'd spend 55 minutes thinking
          about the problem and 5 minutes thinking about solutions.”"
        ></Quote>
      </Container>
    </Section>
  </Background>
)

component.displayName = 'section/Quote'
export default component
