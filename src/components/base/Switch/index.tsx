import React, { FC } from 'react'
import element from '~/components/core/element'
import Icon from '~/components/base/Icon'

const base = element.attrs({
  tag: 'span',
})

const Wrapper = base.attrs<{ onClick?: () => void }>({}).theme((t, _, v) => ({
  width: 64,
  height: 24,
  borderRadius: t.borderRadius.extra,
  borderWidth: t.borderWidth.base,
  borderStyle: 'solid',
  backgroundColor: v(t.color.light[200], t.color.dark[200]),
  borderColor: v(t.color.light[200], t.color.dark[200]),
}))

const Inner = base
  .theme((t, _, v) => ({
    position: 'absolute',
    size: 36,
    borderRadius: t.borderRadius.extra,
    backgroundColor: v(t.color.light[100], t.color.dark[100]),
    color: v(t.color.dark[100], t.color.light[100]),
    left: -1,
  }))
  .variants({
    active: {
      left: 'calc(100% - 35px)',
    },
  })

type Props = {
  active: boolean
  onChange: () => void
}

const component: FC<Props> = ({ active, onChange }) => {
  const iconVariant = active ? 'moon' : 'sun'

  return (
    <Wrapper onClick={onChange}>
      <Inner
        active={active}
        content={<Icon name={iconVariant} />}
        contentAlignX="center"
      />
    </Wrapper>
  )
}

export default component
