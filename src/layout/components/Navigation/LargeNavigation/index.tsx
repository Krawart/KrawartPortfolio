import React, { FC } from 'react';
import { useStyles } from '../styles';
import { Icon, Paper } from '@material-ui/core';
import Logo from '../../../../components/Logo';
import SidebarNavigation from '../../SidebarNavigation';
import SidebarNavigationItem from '../../SidebarNavigation/SidebarNavigationItem';
import SocialLink from '../../SocialLink';
import Github from '../../../../assets/svg/icons/github.svg';
import { SidebarProps } from '../index';
import { PageLink } from '../../../../utils/links';

interface NavigationItemProps {
  link: PageLink;
  pathname: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ link, pathname }) => {
  return (
    <SidebarNavigationItem
      selected={pathname === link.url}
      to={link.url}
      icon={<Icon>{link.icon}</Icon>}
      title={link.title}
    />
  );
};

const LargeSidebar: FC<SidebarProps> = ({ pathname, githubUrl, links }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.sidebar}>
      <Logo />
      <SidebarNavigation>
        {links.map((link) => (
          <NavigationItem link={link} pathname={pathname} />
        ))}
      </SidebarNavigation>
      <SocialLink to={githubUrl} icon={<Github />} rel="GitHub" />
    </Paper>
  );
};

export default LargeSidebar;
