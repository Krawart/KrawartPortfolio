import { makeStyles, useTheme } from '@material-ui/core';

export const useStyles = () => {
  const theme = useTheme();
  return makeStyles({
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.5,
      color: '$color-font',
      transition: 'all 0.2s',
      textDecoration: 'none',
      paddingTop: '0.5rem',
      marginTop: '0.5rem',

      '&:hover': {
        opacity: 1,
      },

      '&:hover $title, &$active $title': {
        opacity: 1,
        transform: 'translateX(0.5rem)',
      },

      '&:hover $icon, &$active $icon': {
        transform: 'scale(1.2)',
      },
    },
    title: {
      color: theme.palette.text.primary,
      marginTop: '5px',
      fontSize: '0.6rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      transition: 'all 0.15s',
    },
    icon: {
      transition: 'all 0.1s',
    },
    active: {
      opacity: 1,
      animation: 'pulsing 3s infinite',
    },

    menuButton: {
      position: 'fixed',
      zIndex: 4000,
      top: 0,
      left: 0,
      padding: '0.6rem',
      borderRadius: '0 0 1.2rem 0',
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: 'all 0.1s',

      '&:hover': {
        cursor: 'pointer',
        background: theme.palette.background.default,
      },
    },
    activeMenu: {
      transform: 'translate(-100%, -100%)',
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      minWidth: '12rem',
      height: '100%',
    },
    menuLogo: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
    },
    socialIcons: {
      marginTop: 'auto',
      alignSelf: 'center',
      padding: '1rem',
    },
  })();
};
