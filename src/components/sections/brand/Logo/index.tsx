import type { ExtractProps } from '~/types'
import Link from '~/components/base/Link'
import Logo from '~/components/base/Logo'
import LogoHeading from '~/components/base/LogoHeading'

type Props = ExtractProps<typeof Link>

const component = (props: Props) => (
  <Link href="/" contentDirection="rows" {...props}>
    <Logo />
    <LogoHeading label="Building things that ship | Engineer & Problem Solver" />
  </Link>
)

component.displayName = 'sections/brand/Logo'
export default component
