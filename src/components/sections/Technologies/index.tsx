import React from 'react'
import Header from '~/components/fragments/section/Header'
import Background from '~/components/base/Background'
import BadgeList from '~/components/base/BadgeList'
import Button from '~/components/base/Button'
import Text from '~/components/base/Text'
import Link from '~/components/base/Link'
import Section from '~/components/base/Section'
import data from './data'

const states = {
  1: 'primary',
  2: 'secondary',
  3: 'tertiary',
  4: 'neutral',
}

const transformedData = data.map((item) => ({
  label: item.title,
  state: states[item.level],
  href: item.link,
}))

const component = () => (
  <Background secondary>
    <Section>
      <Header title="Technologies">
        Choosing the right tools might be overhelming. By continuous learning,
        endless experimenting and following new trends and best practices help
        making the right choice easier.
      </Header>
      {/* <Container> */}
      <BadgeList data={transformedData} gap="medium" contentAlignX="center" />
      {/* </Container> */}
      <Text>
        …and many more. Checkout my <Link href="">GitHub stars</Link> to see
        what an interesting stuff have caught my attention. Uhm, what will come
        next?
      </Text>
      <Button label="Give me a new challenge" />
    </Section>
  </Background>
)

component.displayName = 'sections/Technologies'
export default component
