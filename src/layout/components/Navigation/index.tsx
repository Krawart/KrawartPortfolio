import React, { FC } from 'react';
import LargeSidebar from './LargeNavigation';
import { useWidth } from '../../../hooks/use-width';
import { isWidthUp } from '@material-ui/core';
import MobileNavigation from './MobileNavigation';
import {PageLink} from "../../../utils/links";

export interface SidebarProps {
  pathname: string;
  links: PageLink[];
  githubUrl: string;
}

const Sidebar: FC<SidebarProps> = ({ pathname, githubUrl, links }) => {
  const width = useWidth();

  if (isWidthUp('md', width)) {
    return <LargeSidebar links={links} pathname={pathname} githubUrl={githubUrl} />;
  }
  return <MobileNavigation links={links} pathname={pathname} githubUrl={githubUrl} />;
};

export default Sidebar;
