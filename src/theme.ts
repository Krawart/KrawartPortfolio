import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  overrides: {

  },
  typography: {
    fontFamily: [
      'Jost',
      'sans-serif',
    ].join(','),
  },
  palette: {
    text: {
      primary: '#CBCECD'
    },
    background: {
      default: '#151719',
      paper: '#1e2125',
    },
  }
});
