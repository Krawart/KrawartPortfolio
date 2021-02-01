import React, { FC } from 'react';
import Email from '../../../assets/svg/icons/email.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    position: 'fixed',
    bottom: '3rem',
    right: '3rem',
    height: '4rem',
    width: '4rem',
    animation: 'pulsing 2s infinite',
    transition: 'all .1s',
    zIndex: 2000,

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});

const EmailButton: FC = () => {
  const classes = useStyles();
  return (
    <a href="mailto:contact@krawart.com?subject=Krawart%20-%20Get%20in%20touch">
      <div className={classes.button}>
        <Email />
      </div>
    </a>
  );
};

export default EmailButton;
