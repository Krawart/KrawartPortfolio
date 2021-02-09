import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: 1000,
    borderTopRightRadius: '2rem',
    borderBottomRightRadius: '2rem',
    left: 0,
    top: 0,
    height: '100vh',
    width: '4rem',
    padding: '1.5rem 0.5rem',
  },
});
