import { createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});
export default createMuiTheme({
  overrides: {},
  typography: {
    fontFamily: ['Jost', 'sans-serif'].join(','),
    fontSize: 16,
    h2: {
      width: '100%',
      fontSize: '3.5rem',
      fontWeight: 500,
      marginBottom: '1rem',
      background: '-webkit-linear-gradient(0deg, #3ABFEE, #3AE2B5)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      [breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    h4: {
      width: '100%',
      fontSize: '3rem',
      fontWeight: 500,
      marginBottom: '1rem',
      background: '-webkit-linear-gradient(0deg, #3ABFEE, #3AE2B5)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      [breakpoints.down('md')]: {
        textAlign: 'center',
      },
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
    text: {
      primary: '#CBCECD',
    },
    background: {
      default: '#151719',
      paper: '#1e2125',
    },
  },
});
