import type { ComponentProps, ComponentType } from 'react'
import type { ListProps } from '@vitus-labs/elements'
import { list } from '~/components/core'
import IconLogo from '../IconLogo'

export { IconLogo }

const IconLogoList = list.config({ name: 'base/IconLogoList' }).attrs({
  component: IconLogo,
  contentAlignX: 'center',
  contentDirection: 'inline',
})

type Props = Omit<ComponentProps<typeof IconLogoList>, 'component'> & {
  component?: ListProps['component']
}

export default IconLogoList as unknown as ComponentType<Props>
