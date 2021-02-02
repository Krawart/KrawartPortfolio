import React from 'react';
import { Helmet } from 'react-helmet';

import { helmet } from '../utils/helmet';
import Sidebar from './components/Sidebar';

import './Layout.scss';
import EmailButton from './components/EmailButton';
import Background from '../assets/svg/bg/bg.svg';
import BackgroundAppender from './components/BackgroundAppender';
import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core';
import theme from '../theme';

interface LayoutProps {
  children: any;
  location: Location;
}

const isDev = process.env.NODE_ENV === 'development';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
  content: {
    position: 'relative',
    marginLeft: '4rem',
    zIndex: 100,
    height: '100%',
    width: 'calc(100vw - 4rem)',
  },
});

export default ({ children, location }: LayoutProps) => {
  const classes = useStyles();

  let pathname = '/';
  if (typeof window !== `undefined`) {
    pathname = location.pathname;
  }

  return (
    <>
      <Helmet {...helmet} />

      <MuiThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <BackgroundAppender bg={<Background />} />

        <Sidebar pathname={pathname} />

        <Grid className={classes.root}>
          <Container maxWidth="xl" className={classes.content}>
            {children}
          </Container>
        </Grid>

        <EmailButton />
        {isDev && <></>}
      </MuiThemeProvider>
    </>
  );
};
