import React, { FC } from 'react';
import Github from '../../../assets/svg/icons/github.svg';
import Logo from '../../../components/Logo';
import SocialLink from '../SocialLink';
import SidebarNavigation from '../SidebarNavigation';
import SidebarNavigationItem from '../SidebarNavigation/SidebarNavigationItem';
import Portfolio from '../../../assets/svg/icons/portfolio.svg';
import Profile from '../../../assets/svg/icons/profile.svg';
import Love from '../../../assets/svg/icons/love.svg';
import links from '../../../utils/links';
import {makeStyles, Paper} from '@material-ui/core';

interface SidebarProps {
  location: Location;
}

const useStyles = makeStyles({
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

const Sidebar: FC<SidebarProps> = ({ location }) => {
  const pathname = location.pathname;
  const classes = useStyles();
  return (
    <Paper className={classes.sidebar}>
      <Logo />
      <SidebarNavigation>
        <SidebarNavigationItem
          selected={pathname === links.show.url}
          to={links.show.url}
          icon={<Portfolio />}
          title={links.show.title}
        />
        <SidebarNavigationItem
          selected={pathname === links.about.url}
          to={links.about.url}
          icon={<Profile />}
          title={links.about.title}
        />
        <SidebarNavigationItem
          selected={pathname === links.stack.url}
          to={links.stack.url}
          icon={<Love />}
          title={links.stack.title}
        />
      </SidebarNavigation>
      <SocialLink to="https://github.com/krawart" icon={<Github />} rel="GitHub" />
    </Paper>
  );
};

export default Sidebar;
