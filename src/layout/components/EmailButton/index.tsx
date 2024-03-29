import React, { FC } from 'react';
import Email from '../../../assets/svg/icons/email.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    position: 'fixed',
    zIndex: 3000,
    bottom: '3rem',
    right: '3rem',
    height: '4rem',
    width: '4rem',
    animation: 'pulsing 2s infinite',
    borderRadius: '100%',
    boxShadow: '0 0 1rem rgba(0, 0, 0, 0.8)',
    transition: 'all .1s',

    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
});

const EmailButton: FC = () => {
  const classes = useStyles();
  return (
    <a href="mailto:filip.krawiec@gmail.com?subject=Krawart%20-%20Get%20in%20touch">
      <div className={classes.button}>
        <Email />
      </div>
    </a>
  );
};

export default EmailButton;
