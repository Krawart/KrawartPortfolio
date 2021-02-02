export const usePathname = (location: Location) => {
  let pathname = '/';
  if (typeof window !== `undefined`) {
    pathname = location.pathname;
  }
  return pathname;
};
