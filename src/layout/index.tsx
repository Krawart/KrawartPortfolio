import React from 'react';
import { Helmet } from 'react-helmet';

import { helmet } from '../utils/helmet';
import Sidebar from './components/Sidebar';

import './Layout.scss';
import EmailButton from './components/EmailButton';
import Background from '../assets/svg/bg/bg.svg';
import BackgroundAppender from './components/BackgroundAppender';
import { Container, CssBaseline, makeStyles, MuiThemeProvider } from '@material-ui/core';
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
    padding: '2rem',
    marginLeft: '4rem',
    zIndex: 100,
    height: '100vh',
    width: 'calc(100vw - 4rem)'
  },
});

// tslint:disable no-default-export
export default ({ children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <>
      <Helmet {...helmet} />

      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <BackgroundAppender bg={<Background />} />

          <Sidebar location={location} />

          <Container maxWidth="xl" className={classes.content}>
            {children}
          </Container>

          <EmailButton />
          {isDev && <></>}
        </div>
      </MuiThemeProvider>
    </>
  );
};
