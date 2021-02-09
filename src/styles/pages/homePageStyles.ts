import { makeStyles } from '@material-ui/core';

export const useHomePageStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  intro: {
    width: '100%',
    maxWidth: '50rem',
  },
});
