import React, { FC } from 'react';
import { useStyles } from '../styles';
import { Paper } from '@material-ui/core';
import Logo from '../../../../components/Logo';
import SidebarNavigation from '../../SidebarNavigation';
import SidebarNavigationItem from '../../SidebarNavigation/SidebarNavigationItem';
import links from '../../../../utils/links';
import Portfolio from '../../../../assets/svg/icons/portfolio.svg';
import Profile from '../../../../assets/svg/icons/profile.svg';
import Love from '../../../../assets/svg/icons/love.svg';
import SocialLink from '../../SocialLink';
import Github from '../../../../assets/svg/icons/github.svg';

interface LargeSidebarProps {
  pathname: string;
  githubUrl: string;
}

const LargeSidebar: FC<LargeSidebarProps> = ({ pathname , githubUrl}) => {
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
      <SocialLink to={githubUrl} icon={<Github />} rel="GitHub" />
    </Paper>
  );
};

export default LargeSidebar;
