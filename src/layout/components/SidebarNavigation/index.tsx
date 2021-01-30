import React, {FC} from 'react';

import s from "./SidebarNavigation.scss"

interface SidebarNavigationProps {
}

const SidebarNavigation: FC<SidebarNavigationProps> = ({children}) => {
  return <div className={s.navigation}>{children}</div>;
};

export default SidebarNavigation;
