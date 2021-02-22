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
    marginBottom: { xs: t.space.large, md: t.space.xLarge },
    maxWidth: '70%',
  }))
  .variants({
    hidden: {
      display: 'none',
    },
  })

const Heading = heading.theme((t) => ({
  marginBottom: { xs: t.space.medium, md: t.space.large },
}))

type Props = {
  title: string
  children?: ReactNode
  hidden?: boolean
}

const component: FC<Props> = ({ title, children, hidden }: Props) => {
  return (
    <Header hidden={hidden}>
      <Heading centered level2 label={title} />
      <Text large centered>
        {children}
      </Text>
    </Header>
  )
}

component.displayName = 'fragments/section/Header'
export default component
