import Stack from '../components/Stack';
import React from 'react';
import { Helmet } from 'react-helmet';
import links from '../utils/links';

import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  stack: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  text: {},
  infographic: {},
});

export default () => {
  const classes = useStyles();
  return (
    <>
      <Helmet title={"Stack"} />
      <Container maxWidth="lg" className={classes.stack}>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="flex-start"
            xs={12}
            lg={5}
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
          <Grid container item justify="center" xs={12} lg={7} className={classes.infographic}>
            <Stack />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
