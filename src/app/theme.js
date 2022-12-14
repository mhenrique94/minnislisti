import { createTheme } from '@mui/material/'

const theme = createTheme ({
  palette: {
    type: 'dark',
    primary: {
      main: '#7260a8',
      light: '#744ec1',
      dark: '#2f1162',
    },
    secondary: {
      main: '#b267e4',
      dark: '#5b158a',
    },
    background: {
      default: '#141212',
      paper: '#1c1b1b',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(179,179,179,0.54)',
      hint: 'rgba(214,214,138,0.38)',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})

export default theme