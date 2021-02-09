import TriangleIntro from '../components/TriangleIntro';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Box, Typography } from '@material-ui/core';
import { useHomePageStyles } from '../styles/pages/homePageStyles';

export default () => {
  const classes = useHomePageStyles();
  return (
    <>
      <Helmet title="Home" />

      <Box className={classes.root}>
        <Box />
        <Box className={classes.intro}>
          <TriangleIntro />
        </Box>
        <Box flexDirection="column">
          <Typography variant={'h6'}>Live to learn, and you will really learn to live.</Typography>
          <Typography variant={'caption'}>John C. Maxwell</Typography>
        </Box>
      </Box>
    </>
  );
};
