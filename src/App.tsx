import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { IssueContextProvider } from './contexts/IssueContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssueContextProvider>
        <RouterProvider router={router}/>
        <GlobalStyle/>
      </IssueContextProvider>
    </ThemeProvider>
  )
}

export default App
