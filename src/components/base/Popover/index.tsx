import { VFC } from 'react'
import { ExtractProps } from '~/types'
import element from '~/components/core/element'
import Overlay from '~/components/core/Overlay'

const Arrow = element
  .theme((t, _, v) => ({
    position: 'absolute',
    left: '50%',
    size: 16,
    backgroundColor: v(t.color.dark[100], t.color.light[100]),
  }))
  .variants({
    top: {
      bottom: 0,
      transform: 'translateX(-50%) translateY(50%) rotate(45deg)',
    },
    bottom: {
      top: 0,
      transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
    },
  })

const PopoverContent = element
  .config({ name: 'base/Popover/PopoverContent' })
  .attrs({
    contentDirection: 'inline',
    contentAlignX: 'block',
  })
  .theme((t, _, v) => ({
    position: 'relative',
    maxWidth: 360,
    minHeight: 64,
    backgroundColor: v(t.color.dark[100], t.color.light[100]),
    color: v(t.color.light[100], t.color.dark[100]),
    borderRadius: t.borderRadius.large,
    padding: t.space.small,
  }))

type OverlayTypes = ExtractProps<typeof Overlay>
type Props = {
  trigger: OverlayTypes['trigger']
  children: OverlayTypes['children']
}

type RenderType = { innerRef: any; align: 'top' | 'bottom' }

const component: VFC<Props> = ({ trigger, children }) => (
  <Overlay
    refName="innerRef"
    trigger={trigger}
    openOn="hover"
    closeOn="hover"
    align="top"
    alignX="center"
    offsetY={16}
    isOpen
  >
    {({ innerRef, align }: RenderType) => (
      <PopoverContent ref={innerRef} beforeContent={<Arrow variant={align} />}>
        {children}
      </PopoverContent>
    )}
  </Overlay>
)

export default component
