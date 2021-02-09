import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

const Index = ({ children, to, ...props }: LinkProps) => (
  <GatsbyLink to={to} {...props} style={{ color: 'inherit', textDecoration: 'none' }}>
    {children}
  </GatsbyLink>
);

export default Index;
