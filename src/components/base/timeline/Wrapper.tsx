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
  .variants({
    odd: {
      paddingRight: 80,
    },
    even: {
      paddingLeft: 80,
    },
  })
  .states((t) => ({
    first: {
      marginTop: 160,
    },
    last: {
      marginBottom: 0,
    },
  }))

const Point = symbol
  .theme({
    position: 'absolute',
    top: 0,
    zIndex: 1,
  })
  .variants((t) => ({
    odd: {
      right: 0,
      transform: 'translateX(50%)',
    },
    even: {
      left: 0,
      transform: 'translateX(-50%)',
    },
  }))
  .config({
    consumer: (ctx) => ctx<typeof Wrapper>(({ variant }) => ({ variant })),
  })

const component = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Point large primary />
      {children}
    </Wrapper>
  )
}

export default component
