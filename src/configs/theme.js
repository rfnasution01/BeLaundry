import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Open Sans"',
      ].join(','),
    fontWeightBold: 700,
    fontWeightSemiBold: 600,
    fontWeightMedium: 500,
    fontWeightSmall: 400,
    fontSizeLarge: 24,
    fontSizeMedium: 20,
    fontSizeSmall: 16,
  },
  palette: {
    primary: {
      main: '#3B97CB',
      light: '#80C688',
      contrastText: '#fff',
      black: '#171717',
      grey: '#C4C4C4',
      lightGrey: '#fafafa',
      delete: '#F33A3A',
    },
    secondary: {
      main: '#44C4A1',
      light: '#9E9D9D',
    },
    ternary: {
      main: '#0E1D44',
    },
    error: {
      main: '#F26C6D',
      contrastText: '#fff',
    },
    success: {
      main: '#51B15C',
    },
  },
});

export default theme;
