import React from 'react';
import { Helmet } from 'react-helmet';
import links from '../utils/links';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const useStyles = makeStyles({
  about: {
    minHeight: '100vh',
    paddingBottom: '5rem'
  },
  content: {},
});

export default ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <Helmet title={links.about.title} />
        <Grid
          container
          direction="column"
          alignItems="center"
          justify={'center'}
          className={classes.about}
        >
          <Box zIndex={1}>
            <Typography variant="h3" align={'center'}>
              Something about me
            </Typography>
            <Typography variant="h4" align={'center'}>
              Just a few words
            </Typography>
          </Box>
          <Box flex marginTop="-8rem" maxWidth="30rem" width="100%" justifyContent="center">
            <Img fluid={data.base.childImageSharp.fluid} fadeIn={false} />
          </Box>
          <Box pt={3} maxWidth="45rem">
            <Typography variant="body1" align="center">
              My name is Filip. I love pizza and gladly travel to the USA. I like it when things are
              reliable, work right and make a good aesthetic impression. I was always close with
              technology. <br />
              Throughout my school years, I trained myself in website making, learned to program,
              among other things I also taught as an external on a Professional Media College. The
              Technical University of Ostrava, particularly studying architecture gave me a wider
              perspective on finding solutions to different problems. I had to master design
              principles and train the ability to sell my idea to customers. <br />
              Working in the international architecture company RMJM I had to deal with civil
              engineer specialists with different specializations and put things together. Today, I
              belong to a small team compound of 7 people working as a Fullstack developer.
            </Typography>
          </Box>
        </Grid>
    </>
  );
};

export const query = graphql`
  query {
    base: file(relativePath: { eq: "images/portrait.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
