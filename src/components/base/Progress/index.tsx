import { element } from '~/components/core'
import Text from '../Text'
import point from './Point'
import ProgressLine from './ProgressLine'

const Point = point.config({
  consumer: (ctx) => ctx<TProgress>(({ state }) => ({ state })),
})

const ProgressLineStatus = ProgressLine.config({
  name: 'base/Progress/ProgressLine',
  consumer: (ctx) => ctx<TProgress>(({ state, size }) => ({ state, size })),
}).attrs({
  content: Point,
})

type TProgress = typeof Progress
type TextType = typeof Text

const Progress = element
  .config({ name: 'base/Progress', provider: true })
  .attrs<{ label: TextType['$$allProps']['children'] }>(({ label }, t) => ({
    gap: t.space.small,
    block: true,
    tag: 'span',
    beforeContentCss: (css) => css`
      min-width: 120px;
    `,
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
