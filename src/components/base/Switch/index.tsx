import React, { FC } from 'react'
import element from '~/components/core/element'
import Icon from '~/components/base/Icon'

const base = element.attrs({
  tag: 'span',
})

const Wrapper = base
  .theme((t) => ({
    width: 64,
    height: 24,
    borderRadius: t.borderRadius.extra,
    borderWidth: t.borderWidth.base,
    borderStyle: 'solid',
  }))
  .variants((t) => ({
    light: {
      backgroundColor: '#f1f1f1',
      borderColor: '#f1f1f1',
    },
    dark: {
      backgroundColor: '#0D0D0D',
      borderColor: '#0D0D0D',
    },
  }))
  .config({
    provider: true,
  })

const Inner = base
  .theme((t) => ({
    position: 'absolute',
    size: 36,
    backgroundColor: '#FBFBFB',
    borderRadius: t.borderRadius.extra,
  }))
  .variants((t) => ({
    light: {
      backgroundColor: '#FBFBFB',
      color: '#000',
      left: -1,
      // transform: 'translateX(0)',
    },
    dark: {
      backgroundColor: '#0D0D0D',
      color: '#fff',
      left: 'calc(100% - 35px)',
      // transform: 'translateX(-100%)',
    },
  }))
  .config({
    consumer: (ctx) => ctx<typeof Wrapper>(({ variant }) => ({ variant })),
  })

type Props = {
  state: string
  onChange: () => void
}

const component: FC<Props> = ({ state = 'light', onChange }) => {
  const variant = state === 'dark' ? 'dark' : 'light'
  const iconVariant = state === 'dark' ? 'moon' : 'sun'

  return (
    <Wrapper onClick={onChange} variant={variant}>
      <Inner content={<Icon name={iconVariant} />} contentAlignX="center" />
    </Wrapper>
  )
}

export default component
