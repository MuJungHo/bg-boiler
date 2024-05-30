import React from 'react'
import AppRouter from './routers/AppRouter.js'
// import theme from './customTheme.js'
import { ThemeProvider } from '@material-ui/styles'
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalProvider } from "./contexts/GlobalContext";
import "./style/normalize.css"

const App = () => (
  <GlobalProvider>
    <AuthProvider >
      <AppRouter />
    </AuthProvider>
  </GlobalProvider>
)

export default App
