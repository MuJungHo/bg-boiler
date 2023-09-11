import { createTheme } from '@material-ui/core/styles'

const blue = {
    light: '#5295FF',
    dark: '#00288c',
    delta: '#0087dc'
}
const grey = {
    light: '#f8f8f8',
    medium: '#bebebe',
    dark: '#888888'
}
const typography = {
    fontFamily: [
        'Roboto',
        'PingFang TC',
        'Noto Sans TC',
    ].join(',')
}
export const palette = {
    primary: { main: '#0087dc', contrastText: '#fff' },
    secondary: { main: '#4ACAAD', contrastText: '#fff' },
    error: { main: '#F57182', contrastText: '#fff' },
    warning: { main: '#F6B03C', contrastText: '#fff' },
    light: { main: '#ffffff' }
}
export default createTheme({
    typography,
    blue,
    grey,
    palette
})