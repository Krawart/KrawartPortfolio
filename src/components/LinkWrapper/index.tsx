import React, { FC } from 'react';

interface LinkWrapperProps {
  href: string;
  target?: string;
}

const LinkWrapper: FC<LinkWrapperProps> = ({ href, target, children }) => {
  return (
    <a href={href} target={target ? target : '_blank'}>
      {children}
    </a>
  );
};

export default LinkWrapper;
