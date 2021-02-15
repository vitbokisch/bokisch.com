import React, { FC } from 'react'
import { Provider } from '@vitus-labs/unistyle'
import { IStore, useStore, observer } from '~/store'
import theme from './theme'
import GlobalStyle from './globalStyles'

type Props = {
  store?: IStore
}

// const createVariables = (theme, name) => {
//   let result = {}

//   Object.entries(theme).forEach(([key, value]) => {
//     const newKey = name ? `${name}-${key}` : `--${key}`
//     if (typeof value === 'object') {
//       result = { ...result, ...createVariables(value, newKey) }
//     } else {
//       result[newKey] = value
//     }
//   })

//   return result
// }

// const createTheme = (theme, name) => {
//   let result = {}

//   Object.entries(theme).forEach(([key, value]) => {
//     const newKey = name ? `${name}-${key}` : `--${key}`
//     if (typeof value === 'object') {
//       result = { ...result, ...createVariables(value, newKey) }
//     } else {
//       result[newKey] = value
//     }
//   })

//   return result
// }

const component: FC<Props> = ({ children }) => {
  const store = useStore('')

  const newTheme = { ...theme, isDark: store.runtime.theme.isDark }

  // const result = createVariables(newTheme)
  // const variableTheme = createTheme(newTheme)
  // createVariables(newTheme)

  // console.log(result)

  return (
    <Provider theme={newTheme}>
      <GlobalStyle theme={newTheme} blocked={store.runtime.menu.isOpen} />
      {children}
    </Provider>
  )
}

export default observer(component)
