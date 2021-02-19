import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider as StoreProvider } from 'mobx-react'
import { useStore, observer } from '~/store'
import { ThemeProvider } from '~/theme'
import themeListener from '~/hooks/themeListener'

const component = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialState)

  themeListener({
    theme: store.runtime.theme.variant,
    setTheme: store.runtime.theme.setTheme,
  })

  return (
    <>
      <Head>
        {/* <Meta />
      <Favicons />
      <Social />
      <Pwa /> */}
      </Head>
      <StoreProvider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default observer(component)
