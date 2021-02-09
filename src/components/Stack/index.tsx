import React from 'react';
import Stack from '../../assets/svg/stack.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  base: {
    width: '100%',
    maxWidth: '30rem',
    animation: 'phaser 6s infinite',
  },
});
export default () => {
  const classes = useStyles();
  return (
    <div className={classes.base}>
      <Stack width='100%' height='100%' />
    </div>
  );
};
