import type { FC } from 'react'
import type { ExtractProps } from '~/types'
import Link from '~/components/base/Link'
import Logo from '~/components/base/Logo'
import LogoHeading from '~/components/base/LogoHeading'

const component: FC<ExtractProps<typeof Link>> = (props) => (
  <Link href="/" contentDirection="rows" {...props}>
    <Logo />
    <LogoHeading label="Frontend Engineer | Architect | Innovator" />
  </Link>
)

component.displayName = 'sections/brand/Logo'
export default component
