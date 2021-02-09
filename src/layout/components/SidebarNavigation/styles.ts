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
        transform: 'translateX(0)',
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
      transform: 'translateX(-10rem)',
      opacity: 0,
    },

    icon: {
      transition: 'all 0.1s',
    },

    active: {
      opacity: 1,
      animation: 'pulsing 3s infinite',
    },
  })();
};
