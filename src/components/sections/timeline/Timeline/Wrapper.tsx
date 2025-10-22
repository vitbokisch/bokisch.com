import type { FC, ReactNode } from 'react'
import { element } from '~/components/core'
import symbol from '~/components/base/Symbol'

const Wrapper = element
  .config({
    name: 'base/Timeline/Wrapper',
    provider: true,
  })
  .theme({
    marginBottom: 80,
    height: null,
  })
  .multiple({
    first: {
      marginTop: 160,
    },
    last: {
      marginBottom: 0,
    },
    odd: {
      paddingRight: 80,
    },
    even: {
      paddingLeft: 80,
    },
  })

const Point = symbol
  .theme({
    position: 'absolute',
    top: 0,
    zIndex: 1,
    display: {
      xs: 'none',
      md: 'inline-flex',
    },
  })
  .multiple({
    odd: {
      right: 0,
      transform: 'translateX(50%)',
    },
    even: {
      left: 0,
      transform: 'translateX(-50%)',
    },
    first: true,
    last: true,
  })
  .config({
    consumer: (ctx) => ctx<typeof Wrapper>(({ multiple }) => ({ multiple })),
  })

type Props = {
  children: ReactNode
  state?: any
  odd?: boolean
  even?: boolean
  first?: boolean
  last?: boolean
}

const component: FC<Props> = ({
  children,
  state = 'primary',
  odd,
  even,
  first,
  last,
  ...props
}) => {
  // TODO: a hot fix, wrie it a better way
  const wrapperMultiple = [] as any
  if (odd) wrapperMultiple.push('odd')
  if (even) wrapperMultiple.push('even')
  if (first) wrapperMultiple.push('first')
  if (last) wrapperMultiple.push('last')

  return (
    <Wrapper {...props} multiple={wrapperMultiple}>
      <Point large state={state} />
      {children}
    </Wrapper>
  )
}

export default component
