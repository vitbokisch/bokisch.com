import React, { FC, ReactNode } from 'react'
import { Header as header } from '~/components/base/Section'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'

type Props = {
  title: string
  children: ReactNode
}

const Header = header.theme({
  maxWidth: '70%',
})

const Heading = heading.theme((t) => ({
  marginBottom: t.space.large,
}))

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
