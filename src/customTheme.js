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
    light: { main: '#ffffff' },
    boxShadow: ["unset", "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"],
    button: { background: '#fff', color: 'rgba(0, 0, 0, 0.87)', hover: 'rgba(0, 0, 0, 0.2)' },
    appbar: { background: '#fff', color: '#000', svg: '#000' },
    dialog: { background: '#fff', color: '#000' },

    siderbar: { background: '#5594c9', color: '#fff', active: "#3b86b1", hover: "rgba(59, 134, 177, .5)" },
}
export default createTheme({
    typography,
    blue,
    grey,
    palette
})