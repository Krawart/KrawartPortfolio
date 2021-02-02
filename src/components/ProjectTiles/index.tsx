import React, { FC } from 'react';
import { useProjectTilesStyles } from './styles';
import { useWidth } from '../../hooks/use-width';
import { GridList, GridListTile, isWidthDown } from '@material-ui/core';
import { programmerProjects } from '../../data/programmerProjects';
import { architectProjects } from '../../data/architectProjects';
import { artistProjects } from '../../data/artistProjects';
import { Project } from '../../models/Project';
import { ShowPageProjectsQuery } from '../../../graphql-types';
import GridTile from './components/GridTile';
import GridCategory from './components/GridCategory';

interface ProjectTilesProps {
  data: ShowPageProjectsQuery;
}

const ProjectTiles: FC<ProjectTilesProps> = ({ data }) => {
  const classes = useProjectTilesStyles();
  const width = useWidth();

  const getGridListCols = () => {
    if (isWidthDown('xs', width)) return 1;
    if (isWidthDown('sm', width)) return 2;
    if (isWidthDown('md', width)) return 4;
    if (isWidthDown('lg', width)) return 6;
    if (isWidthDown('xl', width)) return 6;
    return 3;
  };

  const getListOfTiles = (tilesData: Project[]) => {
    return tilesData.map((tile) => {
      const image = data.allFile.edges.find((item: any) => item.node.name === tile.img);

      return (
        <GridListTile key={tile.img} className={classes.gridTile}>
          <GridTile project={tile} fluid={image?.node.childImageSharp?.fluid} />
        </GridListTile>
      );
    });
  };

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cellHeight={'auto'}
        cols={getGridListCols()}
        spacing={0}
      >
        <GridListTile key={'programming'}>
          <GridCategory title={'Programming'} className={classes.programmingTile} />
        </GridListTile>
        {getListOfTiles(programmerProjects)}

        <GridListTile key={'architecture'}>
          <GridCategory title={'Architecture'} className={classes.architectureTile} />
        </GridListTile>
        {getListOfTiles(architectProjects)}

        <GridListTile key={'art'}>
          <GridCategory title={'Art'} className={classes.artTile} />
        </GridListTile>
        {getListOfTiles(artistProjects)}
      </GridList>
    </div>
  );
};

export default ProjectTiles;
