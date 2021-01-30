import Stack from 'components/Stack';
import React from 'react';
import {Helmet} from 'react-helmet';
import links from "../utils/links";

import s from "./Stack.scss";
import {Box, Container, Grid} from "@material-ui/core";

export default () => (
  <>
    <Helmet title={links.stack.title}/>
    <Container style={{height: '100%', display: 'flex', alignItems: 'center'}} maxWidth="lg">
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid container item direction="column" justify="center" alignItems="flex-start" lg={5} className={s.text}>
          <h2>In love with</h2>
          <p>My name is Filip. I love pizza and gladly travel to the USA. I like when things are reliable, work right
            and
            make a good aesthetic impression. I was always close with technology. Throughout my school years I trained
            myself in website making, learned to program, among other things I also taught as an externist on a
            Professional Media College. The Technical University of Ostrava, particulary studying architecture gave me
            a
            wider perspective on finding solutions of different problems.</p>
        </Grid>
        <Grid item lg={7}>
          <Box width={"100%"}>
            <Stack/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </>
);
