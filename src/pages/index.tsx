import TriangleIntro from 'components/TriangleIntro';
import React from 'react';
import {Helmet} from 'react-helmet';

import s from "./Index.scss";


export default () => (
  <>
    <Helmet title="Home"/>

    <div className={s.content}>
      <div/>
      <div className={s.intro}>
        <TriangleIntro/>
      </div>
      <div className={s.quote}>
        Live to learn, and you will really learn to live.
        <div className={s.quote__author}>
          John C. Maxwell
        </div>
      </div>
    </div>
  </>
);
