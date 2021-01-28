import { FC, ReactText } from 'react'
import box, { Header as header, Body } from '../Box'
import Heading from '../Heading'
import Text from '../Text'
import TextList from '../TextList'

const Box = box.theme((t) => ({
  height: '',
}))

const Header = header.theme((t) => ({
  marginBottom: t.space.large,
}))

const Subheader = header.theme((t) => ({
  marginBottom: t.space.medium,
}))

type Props = {
  company: ReactText
  date: ReactText
  position: ReactText
  responsibilities: Array<ReactText>
}

const component: FC<Props> = ({
  company = 'Cinnamon',
  date = 'Dc 2020 - Jan 2021',
  position = 'Vitus Labs',
  responsibilities = [
    'Designing a complete monorepo structure + documentation, including confuguration ESLint, Typescript, Rollup.js, Storybook,... ',
    'Designed automation processes and possible solutions for CI/CD Involved in UI design & developed UI library',
    'Responsible for collaboration with colleagues from an external agency',
    'Bulding new features & rewriting old app to a brand new web app',
    'Fixing bugs, code reviews, sharing knowledge, supporting colleagues and other common stuff',
  ],
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
      <TextList
        itemProps={() => ({ contentAlign: 'left', centered: false })}
        gap="medium"
        data={responsibilities}
        valueName="label"
      />
    </Body>
  </Box>
)

component.displayName = 'base/timeline/Box'
export default component
