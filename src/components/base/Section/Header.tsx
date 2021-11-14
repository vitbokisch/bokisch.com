import { VFC, ReactNode } from 'react'
import { element } from '~/components/core'
import heading from '../Heading'
import Text from '../Text'

const Header = element
  .config({
    name: 'base/Section/Header',
  })
  .attrs<{ name?: string }>({
    tag: 'header',
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t, m) => ({
    marginBottom: { xs: t.space.large, md: t.space.xLarge },
    maxWidth: { xs: '90%', lg: '70%', xxl: 1100 },
    color: m(t.color.dark.base, t.color.light.base),
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
  name?: string
}

const component: VFC<Props> = ({ title, children, hidden, name }: Props) => (
  <Header hidden={hidden} name={name}>
    <Heading centered level2 label={title} />
    <Text large centered>
      {children}
    </Text>
  </Header>
)

component.displayName = 'fragments/section/Header'
export default component
