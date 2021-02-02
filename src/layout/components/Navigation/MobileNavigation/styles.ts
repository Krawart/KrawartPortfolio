import { makeStyles, useTheme } from '@material-ui/core';

export const useStyles = () => {
  const theme = useTheme();
  return makeStyles({
    menuButton: {
      position: 'fixed',
      zIndex: 4000,
      top: 0,
      left: 0,
      padding: '1.2rem',
      borderRadius: '0 0 1.2rem 0',
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: 'all 0.1s',

      '&:hover': {
        cursor: 'pointer',
        background: theme.palette.background.default,
      },
    },
    active: {
      transform: 'translate(-100%, -100%)'
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1rem',
      minWidth: '18rem'
    },
    menuLogo: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem'
    }
  })();
};
