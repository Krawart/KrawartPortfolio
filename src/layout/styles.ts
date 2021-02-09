import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = (theme: Theme) =>
  makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      minHeight: '100vh',
      [theme.breakpoints.up('md')]: {
        marginLeft: '4rem',
      },
    },
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      padding: '3rem 2rem',
      [theme.breakpoints.up('md')]: {
        width: 'calc(100vw - 4rem)',
      },
      zIndex: 100,
      maxWidth: '75rem',
    },
  })();
