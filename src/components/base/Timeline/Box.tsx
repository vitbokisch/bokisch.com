import { FC, ReactText } from 'react'
import box, { Header as header, Body } from '../Box'
import Heading from '../Heading'
import Text from '../Text'
import List from '../List'

const Box = box.config({ name: 'base/Timeline/Box' }).theme({
  height: '',
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
  company: ReactText
  date: ReactText
  position: ReactText
  responsibilities: Array<ReactText>
}

const component: FC<Props> = ({
  company,
  date,
  position,
  responsibilities,
}) => (
  <Box medium tag="article">
    <Header contentDirection="inline" contentAlignX="spaceBetween">
      <Heading level5>{company}</Heading>
      <Text small neutral>
        {date}
      </Text>
    </Header>
    <Subheader contentAlignX="left">
      <Heading level4>{position}</Heading>
    </Subheader>
    <Body>
      <List
        itemProps={() => ({ contentAlignX: 'left', centered: false })}
        gap="medium"
        data={responsibilities}
        valueName="label"
      />
    </Body>
  </Box>
)

component.displayName = 'base/timeline/Box'
export default component
