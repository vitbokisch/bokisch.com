import { FC, ReactNode } from 'react'
import Box, { Header, Body } from '../Box'
import heading from '../Heading'
import Text from '../Text'
import List from '../List'
import Line from '../Line'
import Icon from '../Icon'
import IconLogo from '../IconLogo'

const Heading = heading.theme((t) => ({
  marginTop: t.space.large,
}))

const SubHeading = Text.theme((t) => ({
  marginBottom: t.space.medium,
  marginTop: t.space.xSmall,
}))

type Props = {
  title: string
  subtitle?: string
  note?: string
  icon?: string
  logo?: string
  children: ReactNode
  list?: Array<string>
}

const component: FC<Props> = ({
  title,
  subtitle,
  note,
  icon,
  logo,
  list,
  children,
}: Props) => (
  <Box large tag="article">
    <Header>
      {icon && <Icon xLarge name={icon} />}
      {logo && <IconLogo circle name={logo} />}
      <Heading tag="h1" level3 centered label={title} />
      {subtitle && <SubHeading centered label={subtitle} />}
      {note && (
        <Text small neutral>
          {note}
        </Text>
      )}
    </Header>

    <Line />

    <Body>
      {list && (
        <List
          data={list}
          valueName="label"
          gap="large"
          itemProps={{ contentAlignX: 'center', centered: true }}
        />
      )}

      {children && <Text paragraph>{children}</Text>}
    </Body>
  </Box>
)

component.displayName = 'base/Card'
export default component
