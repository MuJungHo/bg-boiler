import React, { useState, createContext } from 'react'
import Alert from '@material-ui/lab/Alert';
import {
  Snackbar,
} from '@material-ui/core'

import i18n from '../i18n'

const GlobalContext = createContext();

function GlobalProvider({ children, ...rest }) {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'zh-TW');
  const [snackBar, setSnackBar] = useState({
    isOpen: false,
    severity: 'info',
    message: ''
  })

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
  };

  return <GlobalContext.Provider
    value={value}
    {...rest}
  >
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
  </GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };