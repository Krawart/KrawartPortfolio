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
import { Link } from 'gatsby';

interface NavigationItemProps {
  link: PageLink;
}

const NavigationItem: FC<NavigationItemProps> = ({ link }) => {
  return (
    <Link to={link.url}>
      <ListItem button key={link.title}>
        <ListItemIcon>
          <Icon>{link.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={link.title} />
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
        className={`${classes.menuButton} ${opened ? classes.active : ''}`}
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
              <NavigationItem link={link} />
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default MobileNavigation;
