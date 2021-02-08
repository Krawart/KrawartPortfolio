import React, { FC, ReactNode } from 'react';
import { Link } from 'gatsby';
import { useStyles } from './styles';

interface SidebarNavigationItemProps {
  selected: boolean;
  to: string;
  icon: ReactNode;
  title: string;
}

const SidebarNavigationItem: FC<SidebarNavigationItemProps> = ({ selected, to, icon, title }) => {
  const classes = useStyles();
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
