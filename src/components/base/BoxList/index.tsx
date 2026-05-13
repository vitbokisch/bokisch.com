import type { ComponentProps, ComponentType } from 'react'
import type { ListProps } from '@vitus-labs/elements'
import { list } from '~/components/core'
import Box from '../Box'

export { Box }

const BoxList = list.config({ name: 'base/BoxList' }).attrs({
  component: Box,
  rootElement: false,
  contentDirection: 'inline',
})

type Props = Omit<ComponentProps<typeof BoxList>, 'component'> & {
  component?: ListProps['component']
}

export default BoxList as unknown as ComponentType<Props>
