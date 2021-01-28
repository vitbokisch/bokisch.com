import element from '~/components/core/element'
import text from '../Text'
import symbol from '../Symbol'

type TabType = typeof Tab
const Tab = element
  .config({
    name: 'base/Tab',
    provider: true,
  })
  .attrs(({ label }) => ({
    gap: 16,
    beforeContent: <Symbol primary />,
    content: <Text primary>{label}</Text>,
  }))
  .states({
    primary: true,
    secondary: true,
    tertiary: true,
    neutral: true,
  })

const Symbol = symbol.config({
  consumer: (ctx) =>
    ctx<TabType>(({ state, pseudo }) => ({
      state,
      pseudo,
    })),
})

const Text = text.config({
  consumer: (ctx) =>
    ctx<TabType>(({ state, pseudo }) => ({
      state,
      pseudo,
    })),
})

export default Tab
