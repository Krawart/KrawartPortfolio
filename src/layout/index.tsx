import React, {ReactNode} from 'react';
import {Helmet} from 'react-helmet';

import {helmet} from '../utils/helmet';
import {Devtools} from '../components/devtools/Devtools';
import Sidebar from "./components/Sidebar";

import s from './Layout.scss';
import EmailButton from "./components/EmailButton";
import Background from "../assets/svg/bg/bg.svg";
import BackgroundAppender from "./components/BackgroundAppender";

interface LayoutProps {
  children: ReactNode;
  location: Location;
}

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable no-default-export
export default (props:LayoutProps) => {
  return props ? (
    <div className={s.layout}>
      <Helmet {...helmet} />
      <BackgroundAppender bg={<Background/>}/>
      
      <Sidebar location={props.location}/>

      <div className={s.content}>
        {props.children}
      </div>
      <EmailButton/>
      {isDev && <Devtools/>}
    </div>
  ) : <></>;
}
