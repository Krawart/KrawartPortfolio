import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import links from '../utils/links';
import { graphql, PageProps } from 'gatsby';
import { ShowPageProjectsQuery } from '../../graphql-types';
import ShowProjects from '../components/ProjectTiles';
import { Container } from '@material-ui/core';

const ShopPage: FC<PageProps<ShowPageProjectsQuery>> = ({ data }) => {
  return (
    <>
      <Helmet title={"Show"} />
      <Container maxWidth={'lg'}>
        <ShowProjects data={data} />
      </Container>
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
