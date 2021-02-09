import { createGlobalStyle, css } from 'styled-components'
import type { Theme } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${({ theme: t }) => css`
      font-size: ${t.rootSize}px;
    `}
  }
`

export default GlobalStyle
