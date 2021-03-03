import { FC } from 'react'
import { element } from '~/components/core'
import symbol from '../Symbol'

const Wrapper = element
  .config({
    name: 'base/Timeline/Wrapper',
    provider: true,
  })
  .theme({
    marginBottom: 80,
    height: '',
  })
  .variants({
    odd: {
      paddingRight: 80,
    },
    even: {
      paddingLeft: 80,
    },
  })
  .states({
    first: {
      marginTop: 160,
    },
    last: {
      marginBottom: 0,
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
  .variants({
    odd: {
      right: 0,
      transform: 'translateX(50%)',
    },
    even: {
      left: 0,
      transform: 'translateX(-50%)',
    },
  })
  .config({
    consumer: (ctx) => ctx<typeof Wrapper>(({ variant }) => ({ variant })),
  })

const component: FC = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Point large primary />
      {children}
    </Wrapper>
  )
}

export default component
