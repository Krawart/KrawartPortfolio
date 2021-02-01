import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useShowPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '5rem',
    },
    gridList: {
      width: '100%',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      overflow: 'visible',
    },
    gridTile: {
      position: 'relative',
      transition: 'all 0.2s',
      background: theme.palette.background.paper,

      '&:hover': {
        zIndex: 10000,
        transform: 'scale(1.5)',
      },

      '&:hover $titleBar': {
        opacity: 1,
        background:
          'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
    },
    programmingTile: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
      background: 'linear-gradient(to bottom right, rgba(63,231,165) 0%, rgba(83,252,97) 100%)',
    },
    architectureTile: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
      background: 'linear-gradient(to bottom right, rgba(206,79,290) 0%, rgba(127,139,226) 100%)',
    },
    artTile: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
      background: 'linear-gradient(to bottom right, rgba(50,217,208) 0%, rgba(63,231,165) 100%)',
    },
    title: {
      color: theme.palette.primary.main,
    },
    titleBar: {
      height: '3rem',
      textAlign: 'center',
      transition: 'all 0.1s',
      opacity: 0,
    },
  }),
);