import element from '~/components/core/element'

const Inner = element
  .config({
    name: 'base/Progress/Inner',
    // consumer: ({ state }) => {
    //   return { state }
    // },
  })
  .attrs({ tag: 'span', block: true })
  .theme({
    height: 'inherit',
    width: '50%',
  })
  .states((t) => ({
    primary: {
      backgroundColor: t.color.primary.base,
    },
    secondary: {
      backgroundColor: t.color.secondary.base,
    },
    tertiary: {
      backgroundColor: t.color.tertiary.base,
    },
    neutral: {
      backgroundColor: t.color.neutral.base,
    },
  }))
  .variants({
    '0': {
      width: 0,
    },
    '1': {
      width: '10%',
    },
    '2': {
      width: '20%',
    },
    '3': {
      width: '30%',
    },
  })

export default element
  .config({ name: 'base/Progress' })
  .attrs({
    block: true,
    tag: 'div',
    content: Inner,
    beforeContent: 'a',
  })
  .theme((t) => ({
    height: 2,
    width: '100%',
    backgroundColor: t.color.light.base,
  }))
  .states((t) => ({
    primary: {},
    secondary: {},
    tertiary: {},
    neutral: {},
  }))
