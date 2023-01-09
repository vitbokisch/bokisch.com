import { FC } from 'react'
import { ExtractProps } from '~/types'
import { element, Overlay } from '~/components/core'
import Text from '../Text'

const Arrow = element
  .theme((t, m) => ({
    position: 'absolute',
    left: '50%',
    size: 16,
    backgroundColor: m(t.color.dark[100], t.color.light[100]),
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
  .theme((t, m) => ({
    position: 'relative',
    maxWidth: 360,
    minHeight: 64,
    backgroundColor: m(t.color.dark[100], t.color.light[100]),
    color: m(t.color.light[100], t.color.dark[100]),
    borderRadius: t.borderRadius.large,
    padding: t.space.small,
  }))

type OverlayTypes = ExtractProps<typeof Overlay>
type TextTypes = ExtractProps<typeof Text>
type Props = {
  trigger: OverlayTypes['trigger']
  children: TextTypes['children']
}

// type RenderType = { innerRef: any; align: 'top' | 'bottom' }

const Component: FC<Props> = ({ trigger, children }) => (
  <Overlay
    triggerRefName="innerRef"
    contentRefName="innerRef"
    trigger={trigger}
    openOn="hover"
    closeOn="hover"
    align="top"
    alignX="center"
    offsetY={16}
  >
    {({ innerRef, align }: any) => (
      <PopoverContent ref={innerRef} beforeContent={<Arrow variant={align} />}>
        <Text small>{children}</Text>
      </PopoverContent>
    )}
  </Overlay>
)

export default Component
