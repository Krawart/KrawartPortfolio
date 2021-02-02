import { Project } from '../../../../models/Project';
import React, { FC } from 'react';
import { useProjectTilesStyles } from '../../styles';
import { Box, GridListTileBar } from '@material-ui/core';
import GatsbyImage from 'gatsby-image';

import PlaceholderImage from '../../../../assets/svg/placeholder.svg';
import LinkWrapper from '../../../LinkWrapper';

interface GridTileProps {
  project: Project;
  fluid?: any;
}

const TileContent: FC<GridTileProps> = ({ project, fluid }) => {
  const classes = useProjectTilesStyles();
  return (
    <>
      <Box height={'100%'}>
        {fluid ? <GatsbyImage fluid={fluid} alt={project.title} /> : <PlaceholderImage />}
      </Box>

      <GridListTileBar
        subtitle={project.title}
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
      />
    </>
  );
};

const GridTile: FC<GridTileProps> = (props) => {
  const { project, fluid } = props;
  if (project.url == undefined || project.url == '') {
    return <TileContent project={project} fluid={fluid} />;
  }
  return (
    <LinkWrapper href={project.url}>
      <TileContent project={project} fluid={fluid} />
    </LinkWrapper>
  );
};

export default GridTile;
