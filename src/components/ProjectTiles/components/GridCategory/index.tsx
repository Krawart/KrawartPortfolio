import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

interface GridCategoryProps {
  title: string;
  className: string;
}

const GridCategory: FC<GridCategoryProps> = ({ title, className }) => {
  return (
    <Box height={'100%'} minHeight={'10rem'} width={'100%'} padding={3} className={className}>
      <Typography variant={'h6'}>{title}</Typography>
    </Box>
  );
};

export default GridCategory;
