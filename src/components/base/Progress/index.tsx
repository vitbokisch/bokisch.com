import element from '~/components/core/element'
import symbol from '../Symbol'
import Text from '../Text'

const Point = symbol
  .config({
    consumer: (ctx) =>
      ctx<typeof Progress>(({ state }) => {
        return { state }
      }),
  })
  .theme({
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
  })

const ProgressLine = element
  .config({ name: 'base/Progress/ProgressLine' })
  .attrs({ block: true, tag: 'span' })
  .theme((t) => ({
    width: '100%',
    height: 2,
    backgroundColor: t.color.light[200],
  }))
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
  .sizes({
    level0: {
      width: 0,
    },
    level1: {
      width: '10%',
    },
    level2: {
      width: '20%',
    },
    level3: {
      width: '30%',
    },
    level4: {
      width: '40%',
    },
    level5: {
      width: '50%',
    },
    level6: {
      width: '60%',
    },
    level7: {
      width: '70%',
    },
    level8: {
      width: '80%',
    },
    level9: {
      width: '90%',
    },
    level10: {
      width: '100%',
    },
  })

const ProgressLineStatus = ProgressLine.config({
  name: 'base/Progress/ProgressLine',
  consumer: (ctx) =>
    ctx<typeof Progress>(({ state, size }) => {
      return { state, size }
    }),
}).attrs({
  content: Point,
})

const Progress = element
  .config({ name: 'base/Progress', provider: true })
  .attrs(({ label }, t) => ({
    gap: t.space.xLarge,
    block: true,
    tag: 'span',
    beforeContent: <Text>{label}</Text>,
    content: () => (
      <ProgressLine>
        <ProgressLineStatus />
      </ProgressLine>
    ),
  }))
  .states({
    primary: true,
    secondary: true,
    tertiary: true,
    neutral: true,
  })
  .sizes({
    level0: true,
    level1: true,
    level2: true,
    level3: true,
    level4: true,
    level5: true,
    level6: true,
    level7: true,
    level8: true,
    level9: true,
    level10: true,
  })

export default Progress
