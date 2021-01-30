import React, {FC, ReactNode} from "react";
import {Link} from "gatsby";
import s from "./SidebarNavigation.scss";


interface SidebarNavigationItemProps {
  selected: boolean;
  to: string;
  icon: ReactNode;
  title: string;
}

const SidebarNavigationItem: FC<SidebarNavigationItemProps> = ({selected, to, icon, title}) => {
  return <Link to={to} className={`${s.item} ${selected && s.active}`}>
    {icon && React.cloneElement(icon as any, {className: s.item__icon, height: '1.5rem', width: '1.5rem'})}
    <span className={s.item__title}>{title}</span>
  </Link>
}

export default SidebarNavigationItem;
