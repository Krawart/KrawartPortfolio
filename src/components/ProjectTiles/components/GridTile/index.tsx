import { Project } from '../../../../models/Project';
import React, { FC } from 'react';
import { useProjectTilesStyles } from '../../styles';
import { Box, GridListTileBar } from '@material-ui/core';
import GatsbyImage, {FluidObject} from 'gatsby-image';

interface GridTileProps {
  tile: Project;
  image: FluidObject;
}

const GridTile: FC<GridTileProps> = ({ tile, image }) => {
  const classes = useProjectTilesStyles();
  return (
    <>
      <Box height={'100%'}>{image ? <GatsbyImage fluid={image} alt={tile.title} /> : <></>}</Box>
      <GridListTileBar
        subtitle={tile.title}
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
      />
    </>
  );
};

export default GridTile;
