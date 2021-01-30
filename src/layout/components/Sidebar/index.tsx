import React, {FC} from 'react';
import Github from '../../../assets/svg/github.svg';
import s from '../../Layout.scss';
import Logo from '../../../components/Logo';
import SocialLink from '../SocialLink';
import SidebarNavigation from '../SidebarNavigation';
import SidebarNavigationItem from '../SidebarNavigation/SidebarNavigationItem';
import Portfolio from '../../../assets/svg/icons/portfolio.svg';
import Profile from '../../../assets/svg/icons/profile.svg';
import Love from '../../../assets/svg/icons/love.svg';
import links from '../../../utils/links';

const Index: FC = () => {
  const currentUrl =
    typeof window !== 'undefined' ? window.location.pathname + window.location.search : '';

  return (
    <div className={s.sidebar}>
      <Logo/>
      <SidebarNavigation>
        <SidebarNavigationItem
          selected={currentUrl === links.show.url}
          to={links.show.url}
          icon={<Portfolio/>}
          title="Show"
        />
        <SidebarNavigationItem
          selected={currentUrl === links.about.url}
          to={links.about.url}
          icon={<Profile/>}
          title="About"
        />
        <SidebarNavigationItem
          selected={currentUrl === links.stack.url}
          to={links.stack.url}
          icon={<Love/>}
          title="Stack"
        />
      </SidebarNavigation>
      <SocialLink to="https://github.com/krawart" icon={<Github/>} rel="GitHub"/>
    </div>
  );
};

export default Index;
