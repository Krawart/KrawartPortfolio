import React from 'react';
import { MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import theme from '../theme';

export default ({ element }: any) => (
  <MuiThemeProvider theme={responsiveFontSizes(theme)}>{element}</MuiThemeProvider>
);
