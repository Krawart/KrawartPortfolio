import React, { FC, ReactNode } from 'react';
import { Link } from 'gatsby';
import { makeStyles, Theme, useTheme } from '@material-ui/core';

interface SidebarNavigationItemProps {
  selected: boolean;
  to: string;
  icon: ReactNode;
  title: string;
}

const useStyles = makeStyles({
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
    },

    '&:hover $icon, &$active $icon': {
      transform: 'scale(1.2)',
    },
  },
  title: {
    color: (props: Theme) => props.palette.text.primary,
    marginTop: '5px',
    fontSize: '0.6rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    transition: 'all 0.15s',
    opacity: 0
  },

  icon: {
    transition: 'all 0.1s',
  },

  active: {
    opacity: 1,
    animation: 'pulsing 3s infinite',
  },
});

const SidebarNavigationItem: FC<SidebarNavigationItemProps> = (
  { selected, to, icon, title }
) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Link to={to} className={`${classes.item} ${selected && classes.active}`}>
      {icon &&
        React.cloneElement(icon as any, {
          className: classes.icon,
          height: '1.5rem',
          width: '1.5rem',
        })}
      <span className={classes.title}>{title}</span>
    </Link>
  );
};

export default SidebarNavigationItem;
