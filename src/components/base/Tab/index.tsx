import link from '../Link'
import symbol from '../Symbol'

const Symbol = symbol.config({
  consumer: (ctx) =>
    ctx<TabType>(({ state, pseudo }) => ({
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
  .theme((t) => ({
    fontWeight: 500,
    fontSize: t.fontSize.base,
  }))
  .states({
    transparent: null,
    light: null,
    dark: null,
  })

export default Tab
