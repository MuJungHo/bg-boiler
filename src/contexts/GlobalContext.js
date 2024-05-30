import React, { useState, createContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {
  Snackbar,
} from '@material-ui/core'

import { lighten_palette, dark_palette } from "../customTheme";

import i18n from '../i18n'

import "../style/normalize.css";

const light = createTheme({
  dark: false,
  palette: lighten_palette
})

const dark = createTheme({
  dark: true,
  palette: dark_palette
})

const GlobalContext = createContext();

function GlobalProvider({ children, ...rest }) {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'zh-TW');
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [snackBar, setSnackBar] = useState({
    isOpen: false,
    severity: 'info',
    message: ''
  })

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme)
  };

  const changeLocale = (locale) => {
    setLocale(locale);
    localStorage.setItem('locale', locale)
  };

  const showSnackbar = ({ severity = "info", message = "" }) => {
    setSnackBar({
      isOpen: true,
      severity,
      message
    })
  }

  const value = {
    showSnackbar,
    locale,
    t: i18n(locale),
    changeLocale,
    changeTheme,
    theme
  };

  return <GlobalContext.Provider
    value={value}
    {...rest}
  >
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackBar.isOpen}
        autoHideDuration={3000}
        onClose={() => setSnackBar({
          ...snackBar,
          isOpen: false,
        })}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={() => setSnackBar({
            ...snackBar,
            isOpen: false,
          })} severity={snackBar.severity}>
          {snackBar.message}
        </Alert>
      </Snackbar>
      {children}
    </ThemeProvider>
  </GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };