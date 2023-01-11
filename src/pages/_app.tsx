import '~/config/rocketstyle'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider as StoreProvider } from 'mobx-react'
import { useStore, observer } from '~/store'
import { ThemeProvider } from '~/theme'
import useThemeListener from '~/hooks/useThemeListener'
import useWindowResizeListener from '~/hooks/useWindowResizeListener'
import Meta from '~/components/meta/Meta'
import Social from '~/components/meta/Social'
import Favicons from '~/components/meta/Favicons'

const Component = ({
  Component,
  pageProps,
}: AppProps<{ initialState: any }>) => {
  const store = useStore(pageProps.initialState)

  useWindowResizeListener({
    update: store.runtime.viewport.setSizes,
  })

  useThemeListener({
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
