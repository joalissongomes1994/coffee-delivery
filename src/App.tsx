import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Toast } from './components/Toast'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
          <Toast />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
