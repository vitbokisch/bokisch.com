import React from 'react'
import { Container } from '~/components/base/grid'
import Header from '~/components/fragments/section/Header'
import Background from '~/components/base/Background'
import BadgeList from '~/components/base/BadgeList'
import button from '~/components/base/Button'
import Text from '~/components/base/Text'
import Link from '~/components/base/Link'
import Section from '~/components/base/Section'
import TabList from '~/components/base/TabList'
import Tab from '~/components/base/Tab'
import data from './data'

const Button = button.theme((t) => ({
  marginTop: t.space.large,
}))

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

      <TabList gap="large" gapY="medium">
        <Tab primary label="In love with" />
        <Tab secondary label="Experience with" />
        <Tab tertiary label="A little experience" />
        <Tab neutral label="Things o the past" />
      </TabList>

      <Container>
        <BadgeList
          data={transformedData}
          gap="medium"
          gapY="medium"
          contentAlignX="center"
        />
      </Container>

      <Text centered>
        …and many more. Checkout my <Link href="">GitHub stars</Link> to see
        what an interesting stuff have caught my attention. <br />
        Uhm, what will come next?
      </Text>
      <Button label="Give me a new challenge" />
    </Section>
  </Background>
)

component.displayName = 'sections/Technologies'
export default component
