import Stack from '../components/Stack';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Box, Grid, Typography } from '@material-ui/core';
import { useStackPageStyles } from '../styles/pages/stackPageStyles';

export default () => {
  const classes = useStackPageStyles();
  return (
    <>
      <Helmet title={'Stack'} />
      <Box className={classes.root}>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Grid
            item
            container
            direction="column"
            justify="center"
            xs={12}
            lg={6}
            className={classes.text}
          >
            <Typography variant="h2">In love with</Typography>
            <Typography variant="body1">
              I have experience with plenty of software, frameworks, and tools. Being in university,
              I had to master 3D/2D graphic software. Besides study, I was passionate about web
              development. Finished my career in architecture, I engaged in WebApp development on
              160%. Now, I am diving into mystery corners of Spring family products.
              <br />
            </Typography>
          </Grid>
          <Grid container item justify="center" xs={12} lg={6} className={classes.infographic}>
            <Stack />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
