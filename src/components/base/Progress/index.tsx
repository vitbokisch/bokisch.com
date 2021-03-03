import { element } from '~/components/core'
import Text from '../Text'
import point from './Point'
import ProgressLine from './ProgressLine'

const Point = point.config({
  consumer: (ctx) =>
    ctx<typeof Progress>(({ state }) => {
      return { state }
    }),
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
