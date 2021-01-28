import React, { FC, ReactNode } from 'react'
import element from '~/components/core/element'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'

const Header = element
  .config({
    name: 'base/Section/Header',
  })
  .attrs({
    tag: 'header',
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    marginBottom: t.space.xLarge,
    maxWidth: '70%',
  }))

const Heading = heading.theme((t) => ({
  marginBottom: t.space.large,
}))

type Props = {
  title: string
  children: ReactNode
}

const component: FC<Props> = ({ title, children }: Props) => (
  <Header>
    <Heading level2 label={title} />
    <Text large centered>
      {children}
    </Text>
  </Header>
)

component.displayName = 'fragments/section/Header'
export default component
