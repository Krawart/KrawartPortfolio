import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Box, isWidthDown, Typography } from '@material-ui/core';
import Img from 'gatsby-image';
import { graphql, PageProps } from 'gatsby';
import { AboutPagePortraritQuery } from '../../graphql-types';
import { useAboutPageStyles } from '../styles/pages/aboutPageStyles';
import { useWidth } from '../hooks/use-width';

const AboutPage: FC<PageProps<AboutPagePortraritQuery>> = ({ data }) => {
  const classes = useAboutPageStyles();
  const width = useWidth();
  return (
    <>
      <Helmet title={'About'} />

      <div className={classes.root}>
        <Box zIndex={1}>
          <Typography variant="h3" align={'center'}>
            Something about me
          </Typography>
          <Typography variant="h4" align={'center'}>
            Just a few words
          </Typography>
        </Box>
        <Box
          padding={'0 1rem'}
          marginTop={isWidthDown('xs', width) ? '0' : '-8rem'}
          maxWidth="30rem"
          width="100%"
          justifyContent="center"
        >
          {/* @ts-ignore*/}
          <Img fluid={data.file.childImageSharp.fluid} fadeIn={false} />
        </Box>
        <Box pt={3} maxWidth="45rem">
          <Typography component={"p"}>
            My name is Filip. I love pizza and gladly travel to the USA. I like it when things are
            reliable, work right and make a good aesthetic impression. I was always close with
            technology.
          </Typography>
          <Typography component={"p"}>
            Throughout my school years, I trained myself in website making, learned to program,
            among other things I also taught as an external on a Professional Media College. The
            Technical University of Ostrava, particularly studying architecture gave me a wider
            perspective on finding solutions to different problems. I had to master design
            principles and train the ability to sell my idea to customers.
          </Typography>
          <Typography component={"p"}>
            Working in the international architecture company RMJM I had to deal with civil engineer
            specialists with different specializations and put things together. Today, I belong in a
            small team compound of 7 people working as a Fullstack developer.
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPagePortrarit {
    file(relativePath: { eq: "images/portrait.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
