import Head from 'next/head'
import { Provider as StoreProvider } from 'mobx-react'
import ThemeProvider from '~/config/ThemeProvider'
import { useStore } from '~/store'
// import Meta from '~/components/meta/Meta'
import GoogleFonts from '~/components/meta/GoogleFonts'
// import Favicons from '~/components/seo/Favicons'
// import Social from '~/components/seo/Social'
// import Pwa from '~/components/seo/Pwa'
import type { AppProps } from 'next/app'

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
