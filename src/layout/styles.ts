import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = (theme: Theme) =>
  makeStyles({
    root: {
      minHeight: '100vh',
    },
    content: {
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        marginLeft: '4rem',
      },
      zIndex: 100,
      height: '100%',
      width: 'calc(100vw - 4rem)',
    },
  })();
