import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider as StoreProvider } from 'mobx-react'
// import styled, { css, ThemeProvider as StyledProvider } from 'styled-components'
// import { init } from '@vitus-labs/core'
import { useStore, observer } from '~/store'
import { ThemeProvider } from '~/theme'
import themeListener from '~/hooks/themeListener'
import Meta from '~/components/meta/Meta'
import Social from '~/components/meta/Social'
import Favicons from '~/components/meta/Favicons'

// init({ styled, css, context: StyledProvider })

const Component = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialState)

  themeListener({
    theme: store.runtime.theme.variant,
    setTheme: store.runtime.theme.setTheme,
  })

  return (
    <>
      <Head>
        <Meta />
        <Social />
        <Favicons />
      </Head>
      <StoreProvider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default observer(Component)
