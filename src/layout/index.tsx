import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { helmet } from '../utils/helmet';
import Navigation from './components/Navigation';

import './Layout.scss';
import EmailButton from './components/EmailButton';
import Background from '../assets/svg/bg/bg.svg';
import BackgroundAppender from './components/BackgroundAppender';
import { Container, CssBaseline, Grid, useTheme } from '@material-ui/core';
import { usePathname } from './hooks/use-pathname';
import { useStyles } from './styles';
import links from "../utils/links";

interface LayoutProps {
  children: any;
  location: Location;
}

const isDev = process.env.NODE_ENV === 'development';

const Layout: FC<LayoutProps> = ({ children, location }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const pathname = usePathname(location);

  return (
    <>
      <Helmet {...helmet} />

      <CssBaseline />
      <BackgroundAppender bg={<Background />} />

      <Navigation links={links} pathname={pathname} githubUrl={'https://github.com/krawart'} />

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
