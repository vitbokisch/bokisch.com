import { createGlobalStyle } from '@pyreon/styler'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-family: ${theme.fontFamily.base};
  }

  * {
    font-family: ${theme.fontFamily.base};
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.color.light.base};
    font-size: ${theme.rootSize}px;
  }
`

export default GlobalStyle
