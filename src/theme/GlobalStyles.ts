import { createGlobalStyle, css } from 'styled-components'
import type { Theme } from './theme'
import theme from './theme'

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
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

    ${({ theme: t }) => css`
      font-size: ${t.rootSize}px;
    `};
  }
`

export default GlobalStyle
