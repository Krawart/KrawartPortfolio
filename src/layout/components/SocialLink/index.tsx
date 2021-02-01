import React, { FC, ReactNode } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';

interface SocialLinkProps {
  icon: ReactNode;
  to: string;
  rel?: string;
}

const useStyles = makeStyles({
  link: {
    transition: 'all 0.1s',
    opacity: 0.5,

    '& > path': {
      width: '100%',
      fill: (props: Theme) => props.palette.text.primary,
    },

    '&:hover': {
      opacity: 1,
      transform: 'scale(1.1)',
    },
  },
});

const SocialLink: FC<SocialLinkProps> = ({ icon, to, rel }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <a href={to} target="_blank" rel={rel}>
      {icon &&
        React.cloneElement(icon as any, { className: classes.link, height: '2rem', width: '2rem' })}
    </a>
  );
};

export default SocialLink;
