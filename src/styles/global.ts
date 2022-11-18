import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color['base-text']};
    
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
`
