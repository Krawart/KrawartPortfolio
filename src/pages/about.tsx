import React from 'react';
import {Helmet} from 'react-helmet';
import links from "../utils/links";

export default () => (
  <>
    <Helmet title={links.about.title}/>
  </>
);
