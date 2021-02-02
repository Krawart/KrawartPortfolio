import { createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createPalette from '@material-ui/core/styles/createPalette';

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 500,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
});

const palette = createPalette({
  primary: {
    main: '#3ABFEE',
    dark: '#1191BC',
    light: '#3AE2B5',
  },
  text: {
    primary: '#CBCECD',
  },
  background: {
    default: '#151719',
    paper: '#1e2125',
  },
});

export default createMuiTheme({
  breakpoints: breakpoints,
  overrides: {
    MuiIcon: {
      root: {
        color: 'white',
      },
    },
    MuiButton: {
      containedPrimary: {
        color: palette.common.white,
      },
    },
  },
  typography: {
    fontFamily: ['Jost', 'sans-serif'].join(','),
    fontSize: 16,

    h2: {
      fontSize: '3.5rem',
      fontWeight: 500,
      marginBottom: '1rem',
      background: '-webkit-linear-gradient(0deg, #3ABFEE, #3AE2B5)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      [breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
    h4: {
      fontSize: '3rem',
      fontWeight: 500,
      marginBottom: '1rem',
      background: '-webkit-linear-gradient(0deg, #3ABFEE, #3AE2B5)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      [breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 500,
      background: '-webkit-linear-gradient(0deg, #3ABFEE, #3AE2B5)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    body1: {
      fontSize: '1rem',
      [breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    body2: {
      fontSize: '1.2rem',
      [breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
  },
  palette: {
    primary: {
      main: palette.primary.main,
      dark: palette.primary.dark,
      light: palette.primary.light,
    },
    text: {
      primary: '#CBCECD',
    },
    background: {
      default: '#151719',
      paper: '#1e2125',
    },
  },
});
