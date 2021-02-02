export interface PageLink {
  title: string;
  icon: string;
  url: string;
}

const links: PageLink[] = [
  {
    title: 'Show',
    icon: 'dashboard',
    url: '/show',
  },
  {
    title: 'About',
    icon: 'account_circle',
    url: '/about',
  },
  {
    title: 'Stack',
    icon: 'build_circle',
    url: '/stack',
  },
];

export default links;
