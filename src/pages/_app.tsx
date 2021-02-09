import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider as StoreProvider } from 'mobx-react'
import { useStore } from '~/store'
import { ThemeProvider } from '~/theme'
import GoogleFonts from '~/components/meta/GoogleFonts'

const component = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialState)

  return (
    <>
      <Head>
        <GoogleFonts />
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

export default component
