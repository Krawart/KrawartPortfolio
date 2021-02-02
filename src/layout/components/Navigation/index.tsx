import React, { FC } from 'react';
import LargeSidebar from './LargeNavigation';
import { useWidth } from '../../../hooks/use-width';
import { isWidthUp } from '@material-ui/core';
import MobileNavigation from './MobileNavigation';

export interface SidebarProps {
  pathname: string;
  githubUrl: string;
}

const Sidebar: FC<SidebarProps> = ({ pathname, githubUrl }) => {
  const width = useWidth();

  if (isWidthUp('md', width)) {
    return <LargeSidebar pathname={pathname} githubUrl={githubUrl} />;
  }
  return <MobileNavigation pathname={pathname} githubUrl={githubUrl} />;
};

export default Sidebar;
