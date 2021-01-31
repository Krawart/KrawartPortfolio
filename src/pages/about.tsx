import React from 'react';
import { Helmet } from 'react-helmet';
import links from '../utils/links';
import { Typography } from '@material-ui/core';

export default () => (
  <>
    <Helmet title={links.about.title} />
    <Typography variant="body1">
      My name is Filip. I love pizza and gladly travel to the USA. I like it when things are
      reliable, work right and make a good aesthetic impression. I was always close with technology.
      Throughout my school years, I trained myself in website making, learned to program, among
      other things I also taught as an external on a Professional Media College. The Technical
      University of Ostrava, particularly studying architecture gave me a wider perspective on
      finding solutions to different problems. I had to master design principles and train the
      ability to sell my idea to customers. Working in the international architecture company RMJM I
      had to deal with civil engineer specialists with different specializations and put things
      together. Today, I belong to a small team compound of 7 people working as a Fullstack
      developer.
    </Typography>
  </>
);
