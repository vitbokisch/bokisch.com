import { VFC, ReactNode } from 'react'
import element from '~/components/core/element'
import Overlay from '~/components/core/Overlay'

const PopoverContent = element
  .config({ name: 'base/Popover/PopoverContent', component: 'div' })
  .attrs({ contentDirection: 'rows', contentAlignX: 'block' })
  .theme((t, _, v) => ({
    width: 305,
    minHeight: 64,
    backgroundColor: v(t.color.dark[100], t.color.light[100]),
    color: v(t.color.light[100], t.color.dark[100]),
    borderRadius: t.borderRadius.large,
    padding: t.space.small,
  }))

type Props = {
  trigger: any
  children: ReactNode
}

const component: VFC<Props> = ({ trigger, children }) => (
  // <Overlay
  //   refName="innerRef"
  //   trigger={trigger}
  //   openOn="hover"
  //   closeOn="hover"
  //   align="top"
  //   alignX="center"
  //   offsetY={16}
  // >
  <PopoverContent>{children}</PopoverContent>
  // </Overlay>
)

export default component
