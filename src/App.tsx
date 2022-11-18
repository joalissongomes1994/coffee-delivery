import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <h1>Hello, Coffee Delivery</h1>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
