import { FC } from 'react'
import box, { Header as header, Body } from '~/components/base/Box'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import List from '~/components/base/List'

const Box = box.config({ name: 'base/Timeline/Box' }).theme({
  height: null,
})

const Header = header.config({ name: 'base/Timeline/Header' }).theme((t) => ({
  marginBottom: t.space.large,
}))

const Subheader = header
  .config({ name: 'base/Timeline/Subheader' })
  .theme((t) => ({
    marginBottom: t.space.medium,
  }))

type Props = {
  company: string | number
  date: string | number
  position: string | number
  responsibilities: Array<string | number>
}

const Component: FC<Props> = ({
  company,
  date,
  position,
  responsibilities,
}) => (
  <Box medium tag="article">
    <Header contentDirection="inline" contentAlignX="spaceBetween">
      <Heading tag="span" level5>
        {company}
      </Heading>
      <Text small neutral>
        {date}
      </Text>
    </Header>
    <Subheader contentAlignX="left">
      <Heading tag="h1" level4>
        {position}
      </Heading>
    </Subheader>
    <Body>
      <List
        itemProps={{ contentAlignX: 'left', centered: false }}
        gap="medium"
        data={responsibilities}
        valueName="label"
      />
    </Body>
  </Box>
)

Component.displayName = 'base/timeline/Box'
export default Component
