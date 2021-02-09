import React, { FC, useState } from 'react';
import { SidebarProps } from '../index';
import { useStyles } from './styles';
import {
  Box,
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Logo from '../../../../components/Logo';
import { PageLink } from '../../../../utils/links';
import Link from '../../../../components/Link';
import SocialLink from '../../SocialLink';
import Github from '../../../../assets/svg/icons/github.svg';

interface NavigationItemProps {
  link: PageLink;
  selected: boolean;
}

const NavigationItem: FC<NavigationItemProps> = ({ link, selected }) => {
  const classes = useStyles();
  return (
      <Link to={link.url} className={`${classes.item} ${selected && classes.active}`}>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <Icon>{link.icon}</Icon>
          </ListItemIcon>
          <ListItemText className={classes.title}>{link.title}</ListItemText>
        </ListItem>
      </Link>
  );
};

const MobileNavigation: FC<SidebarProps> = ({ githubUrl, links, pathname }) => {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);

  const toggleDrawer = (drawerOpened: boolean) => setOpened(drawerOpened);

  return (
    <>
      <Button
        variant={'contained'}
        className={`${classes.menuButton} ${opened ? classes.activeMenu : ''}`}
        onClick={() => toggleDrawer(!opened)}
      >
        <Menu />
      </Button>

      <SwipeableDrawer
        open={opened}
        onClick={() => toggleDrawer(!opened)}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <Box className={classes.menu}>
          <Box className={classes.menuLogo}>
            <Logo />
          </Box>
          <Divider />
          <List>
            {links.map((link) => (
              <NavigationItem key={link.title} link={link} selected={pathname == link.url} />
            ))}
          </List>
          <Box className={classes.socialIcons} alignSelf={'flex-end'}>
            <SocialLink to={githubUrl} icon={<Github />} rel="GitHub" />
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default MobileNavigation;
