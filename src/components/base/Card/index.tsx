import React, { FC, ReactNode } from 'react'
import Box, { Header, Body } from '~/components/base/Box'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import List from '~/components/base/List'
import Line from '~/components/base/Line'
import Icon from '~/components/base/Icon'
import IconLogo from '~/components/base/IconLogo'

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
  list?: Array<ReactNode>
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
      <Heading level3 centered label={title} />
      {subtitle && <SubHeading centered label={subtitle} />}
      {note && <Text small>{note}</Text>}
    </Header>

    <Line />

    <Body>
      {list && <List data={list} valueName="label" gap="large" />}

      {children && <Text paragraph>{children}</Text>}
    </Body>
  </Box>
)

component.displayName = 'base/Card'
export default component
