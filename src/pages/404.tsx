import React from 'react';
import { Helmet } from 'react-helmet';

import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  notFound: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});
export default () => {
  const classes = useStyles();
  return (
    <>
      <Helmet title="404 Not Found" />

      <div className={classes.notFound}>
        <Paper elevation={3}>
          <Box flex justifyContent="center" alignItems="center" textAlign="center" px={3} py={2}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h2">Oops</Typography>
            <Typography variant="body1">I don't understand how you get here... let's go</Typography>
            <Box py="1rem">
              <Link to={'/'} style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>
                  HOME
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </div>
    </>
  );
};
