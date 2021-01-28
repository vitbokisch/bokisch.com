import React, { FC, ReactNode } from 'react'
import Box, { Header, Body } from '~/components/base/Box'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import TextList from '~/components/base/TextList'
import Line from '~/components/base/Line'
import Icon from '~/components/base/Icon'

const Heading = heading.variants((t) => ({
  space: {
    marginTop: t.space.large,
  },
}))

const SubHeading = Text.theme((t) => ({
  marginBottom: t.space.medium,
  marginTop: t.space.xSmall,
}))

type Props = {
  title: string
  subtitle?: string
  note?: string
  icon: string
  children: ReactNode
  list?: Array<ReactNode>
}

const component: FC<Props> = ({
  title,
  subtitle,
  note,
  icon,
  list,
  children,
}: Props) => (
  <Box large tag="article">
    <Header>
      <Icon xLarge name={icon} />
      <Heading level3 space={!subtitle && !note} label={title} />
      {subtitle && <SubHeading label={subtitle} centered />}
      {note && <Text small>{note}</Text>}
    </Header>

    <Line />

    <Body>
      {list && <TextList data={list} valueName="label" gap="large" />}

      {children && <Text paragraph>{children}</Text>}
    </Body>
  </Box>
)

component.displayName = 'fragments/section/Box'
export default component
