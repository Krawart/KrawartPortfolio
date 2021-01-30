import React, {ReactNode} from 'react';
import {Helmet} from 'react-helmet';

import {helmet} from '../utils/helmet';
import {Devtools} from '../components/devtools/Devtools';
import Sidebar from "./components/Sidebar";

import s from './Layout.scss';
import EmailButton from "./components/EmailButton";

interface LayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable no-default-export
export default ({children}: LayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />
    {/*<BackgroundAppender bg={<Background/>}/>*/}

    <Sidebar/>

    <div className={s.content}>
      {children}
      <EmailButton/>
    </div>

    {isDev && <Devtools/>}
  </div>
);
