import Head from 'next/head'
import { Provider } from '@vitus-labs/unistyle'
import GlobalStyle from '~/config/globalStyles'
import theme from '~/config/theme'
// import Meta from '~/components/meta/Meta'
import GoogleFonts from '~/components/meta/GoogleFonts'
// import Favicons from '~/components/seo/Favicons'
// import Social from '~/components/seo/Social'
// import Pwa from '~/components/seo/Pwa'

const component = ({ Component, pageProps }) => (
  <>
    <Head>
      <GoogleFonts />
      {/* <Meta />
      <Favicons />
      <Social />
      <Pwa /> */}
    </Head>

    <Provider theme={theme}>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </Provider>
  </>
)

export default component
