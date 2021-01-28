import React from 'react'
import element from '~/components/core/element'
import symbol from '../Symbol'

const Wrapper = element
  .config({
    provider: true,
  })
  .theme((t) => ({
    marginBottom: 80,
    height: '',
  }))
  .states((t) => ({
    first: {
      marginTop: 90,
    },
    last: {
      marginBottom: 0,
    },
  }))
  .variants((t) => ({
    odd: {
      paddingLeft: 40,
    },
    even: {
      paddingRight: 40,
    },
  }))

const Point = symbol
  .theme({
    position: 'absolute',
  })
  .variants((t) => ({
    odd: {
      position: 'absolute',
      top: 0,
      left: '100%',
      transform: 'translateX(58px)',
    },
    even: {
      position: 'absolute',
      top: 0,
      right: '100%',
      transform: 'translateX(-58px)',
    },
  }))
  .config({
    consumer: (ctx) => ctx<typeof Wrapper>(({ variant }) => ({ variant })),
  })

const component = ({ odd, even, children }) => (
  <Wrapper odd={odd} even={even}>
    <Point large primary />
    {children}
  </Wrapper>
)

export default component
