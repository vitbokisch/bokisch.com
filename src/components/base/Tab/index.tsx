import link from '../Link'
import symbol from '../Symbol'

const Symbol = symbol.config({
  consumer: (ctx) =>
    ctx<TabType>(({ state, pseudo }) => ({
      // @ts-ignore
      state,
      pseudo,
    })),
})

type TabType = typeof Tab
const Tab = link
  .config({
    name: 'base/Tab',
    provider: true,
  })
  .attrs({
    gap: 16,
    beforeContent: <Symbol primary />,
  })
  .theme({
    fontWeight: 500,
  })

export default Tab
