import React, { FC } from 'react';

interface SidebarNavigationProps {}

const SidebarNavigation: FC<SidebarNavigationProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SidebarNavigation;
