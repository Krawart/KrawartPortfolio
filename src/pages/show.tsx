import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import links from '../utils/links';
import { Box, GridList, GridListTile, GridListTileBar, ListSubheader } from '@material-ui/core';
import { useShowPageStyles } from './styles/ShowPage';
import { programmerProjects } from '../data/programmerProjects';
import { architectProjects } from '../data/architectProjects';
import { artistProjects } from '../data/artistProjects';
import { graphql, PageProps } from 'gatsby';
import { ImageSharpFluid, Maybe, ShowPageProjectsQuery } from '../../graphql-types';
import { Project } from '../models/Project';
import GatsbyImage from 'gatsby-image';

const ShopPage: FC<PageProps<ShowPageProjectsQuery>> = ({ data }) => {
  const classes = useShowPageStyles();

  const getTile = (tile: Project, image: Maybe<ImageSharpFluid>) => {
    return (
      <>
        <Box height={'2rem'}>
          {/* @ts-ignore*/}
          {image ? <GatsbyImage fluid={image} alt={tile.title} /> : <></>}
        </Box>
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

  const getListOfTiles = (tiles: Project[]) => {
    return tiles.map((tile) => {
      // @ts-ignore
      const image: Maybe<ImageSharpFluid> =
        tile.img !== '' &&
        data.allFile.edges.find((item: any) => item.node.name === tile.img)?.node.childImageSharp
          ?.fluid;

      return (
        <GridListTile key={tile.img} className={classes.gridTile}>
          {tile.url !== '' ? (
            <a href={tile.url} target="_blank">
              {getTile(tile, image)}
            </a>
          ) : (
            getTile(tile, image)
          )}
        </GridListTile>
      );
    });
  };

  return (
    <>
      <Helmet title={links.show.title} />
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={6} spacing={0}>
          <GridListTile className={classes.programmingTile}>
            <ListSubheader color="inherit" style={{ fontSize: '1.5rem' }}>
              Programming
            </ListSubheader>
          </GridListTile>
          {getListOfTiles(programmerProjects)}

          <GridListTile className={classes.architectureTile}>
            <ListSubheader color="inherit" style={{ fontSize: '1.5rem' }}>
              Architecture
            </ListSubheader>
          </GridListTile>
          {getListOfTiles(architectProjects)}

          <GridListTile className={classes.artTile}>
            <ListSubheader color="inherit" style={{ fontSize: '1.5rem' }}>
              Art
            </ListSubheader>
          </GridListTile>
          {getListOfTiles(artistProjects)}
        </GridList>
      </div>
    </>
  );
};

export default ShopPage;

export const query = graphql`
  query ShowPageProjects {
    allFile(filter: { relativeDirectory: { eq: "images/projects" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          name
        }
      }
    }
  }
`;
