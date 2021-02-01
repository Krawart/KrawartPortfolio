import TriangleIntro from '../components/TriangleIntro';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  landing: {
    minHeight: '100vh',
  },
  intro: {
    width: '100%',
    maxWidth: '65rem',
  },
  quote: {
    color: '#666666',
    fontWeight: 400,
    fontSize: '1.4rem',
    textAlign: 'center',
  },
  author: {
    fontWeight: 300,
    fontSize: '1rem',

    '&::before': {
      content: "'-- '",
    },
  },
});

export default () => {
  const classes = useStyles();
  return (
    <>
      <Helmet title="Home" />

      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.landing}
      >
        <Grid item />
        <Grid item className={classes.intro}>
          <TriangleIntro />
        </Grid>
        <Grid container direction="column" item className={classes.quote}>
          <Grid item>Live to learn, and you will really learn to live.</Grid>
          <Grid item className={classes.author}>
            John C. Maxwell
          </Grid>
        </Grid>
      </Grid>

      {/*<div className={s.content}>*/}
      {/*  <div/>*/}
      {/*  <div className={s.intro}>*/}
      {/*    <TriangleIntro/>*/}
      {/*  </div>*/}
      {/*  <div className={s.quote}>*/}
      {/*    Live to learn, and you will really learn to live.*/}
      {/*    <div className={s.quote__author}>*/}
      {/*      John C. Maxwell*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};
