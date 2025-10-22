import type { FC } from 'react'
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
  title: (typeof Heading)['$$types']['label']
  subtitle?: (typeof SubHeading)['$$types']['label']
  note?: (typeof Text)['$$types']['children']
  icon?: (typeof Icon)['$$types']['name']
  logo?: (typeof IconLogo)['$$types']['name']
  children: (typeof Text)['$$types']['children']
  list?: (typeof List)['$$types']['data']
}

const Component: FC<Props> = ({
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
      {logo && <IconLogo circle src={logo} />}
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

Component.displayName = 'base/Card'
export default Component
