import React from 'react';
import { Helmet } from 'react-helmet';

import {Container} from "@material-ui/core";

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="404 Not Found" />

    <Container>
      <h1>Page was not found</h1>
    </Container>
  </>
);
