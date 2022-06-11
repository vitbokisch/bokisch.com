import { FC } from 'react'
import { element } from '~/components/core'
import Icon from '~/components/base/Icon'

const base = element.attrs({
  tag: 'span',
})

const Wrapper = base
  .config({ name: 'base/Switch/Wrapper' })
  .attrs<{ onClick?: () => void }>({})
  .theme((t, m) => ({
    width: { xs: 48, md: 64 },
    height: { xs: 16, md: 24 },
    borderRadius: t.borderRadius.extra,
    borderWidth: t.borderWidth.base,
    borderStyle: 'solid',
    backgroundColor: m(t.color.light[200], t.color.dark[200]),
    borderColor: m(t.color.light[200], t.color.dark[200]),
    transition: t.transition.base,
  }))

const Inner = base
  .config({ name: 'base/Switch/Inner' })
  .theme((t, m) => ({
    position: 'absolute',
    padding: 6,
    size: { xs: 24, md: 36 },
    borderRadius: t.borderRadius.extra,
    backgroundColor: m(t.color.light[100], t.color.dark[100]),
    color: m(t.color.dark[100], t.color.light[100]),
    left: -1,
    transition: t.transition.base,
  }))
  .variants({
    active: {
      transform: 'translateX(100%)',
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

component.displayName = 'base/Switch'
export default component
