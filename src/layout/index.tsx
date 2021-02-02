import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { helmet } from '../utils/helmet';
import Navigation from './components/Navigation';

import './Layout.scss';
import EmailButton from './components/EmailButton';
import Background from '../assets/svg/bg/bg.svg';
import BackgroundAppender from './components/BackgroundAppender';
import { Container, CssBaseline, Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { usePathname } from './hooks/use-pathname';

interface LayoutProps {
  children: any;
  location: Location;
}

const isDev = process.env.NODE_ENV === 'development';

const useStyles = (theme: Theme) =>
  makeStyles({
    root: {
      minHeight: '100vh',
    },
    content: {
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        marginLeft: '4rem',
      },
      zIndex: 100,
      height: '100%',
      width: 'calc(100vw - 4rem)',
    },
  });

const Layout: FC<LayoutProps> = ({ children, location }) => {
  const theme = useTheme();
  const classes = useStyles(theme)();
  const pathname = usePathname(location);

  return (
    <>
      <Helmet {...helmet} />

      <CssBaseline />
      <BackgroundAppender bg={<Background />} />

      <Navigation pathname={pathname} githubUrl={'https://github.com/krawart'} />

      <Grid className={classes.root}>
        <Container maxWidth="xl" className={classes.content}>
          {children}
        </Container>
      </Grid>

      <EmailButton />
      {isDev && <></>}
    </>
  );
};

export default Layout;
