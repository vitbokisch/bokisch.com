import '~/config/rocketstyle'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider as StoreProvider } from 'mobx-react'
import { type IStoreSnapshotIn, observer, useStore } from '~/store'
import { ThemeProvider } from '~/theme'
import Favicons from '~/components/meta/Favicons'
import Meta from '~/components/meta/Meta'
import Social from '~/components/meta/Social'
import useThemeListener from '~/hooks/useThemeListener'

const Component = ({
  Component,
  pageProps,
}: AppProps<{ initialState?: IStoreSnapshotIn }>) => {
  const store = useStore(pageProps.initialState)

  useThemeListener({
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
