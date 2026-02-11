import { createGlobalStyle, css } from '@vitus-labs/connector-styler'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-family: ${theme.fontFamily.base}
  }

  * {
    font-family: ${theme.fontFamily.base}
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // biome-ignore lint/suspicious/noExplicitAny: styled-components theme typing
    ${({ theme: t }: any) => css`
      background-color: ${t.color.light.base};
      font-size: ${t.rootSize}px;
    `};
  }
`

export default GlobalStyle
