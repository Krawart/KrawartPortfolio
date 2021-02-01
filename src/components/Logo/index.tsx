import React, { FC } from 'react';
import KrawartLogo from '../../assets/svg/logo.svg';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  logo: {
    display: 'block',
    width: '2rem',
    transition: 'all 0.1s',
    animation: 'pulsing 9s infinite',

    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
});

const Logo: FC = () => {
  const classes = useStyles();
  return (
    <Link to={'/'} className={classes.logo}>
      <Box width="2rem">
        <KrawartLogo />
      </Box>
    </Link>
  );
};

export default Logo;
