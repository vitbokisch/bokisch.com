import type { FC } from 'react'
import Background from '~/components/base/Background'
import { Container } from '~/components/base/grid'
import Quote from '~/components/base/Quote'
import Section from '~/components/base/Section'

const component: FC = () => (
  <Background primary>
    <Section>
      <Container width={({ lg }) => ({ xs: '90%', lg })}>
        <Quote quote="I turn complex problems into simple, working solutions, focusing on systems that scale and actually get used. I think deeply, plan carefully, and execute relentlessly — leveraging modern tools and workflows to move faster without compromising quality." />
      </Container>
    </Section>
  </Background>
)

component.displayName = 'section/Quote'
export default component
