import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

interface BackgroundAppenderProps {
  bg: ReactNode;
}

const useStyles = makeStyles({
  bg: {
    display: 'block',
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
});

const BackgroundAppender: FC<BackgroundAppenderProps> = ({ bg }) => {
  const classes = useStyles();
  return <>{bg && React.cloneElement(bg as any, { className: classes.bg, height: null })}</>;
};

export default BackgroundAppender;
