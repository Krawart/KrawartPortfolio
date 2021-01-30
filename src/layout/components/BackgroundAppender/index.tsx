import React, {FC, ReactNode} from "react";
import s from "./BackgroundAppender.scss";

interface BackgroundAppenderProps {
  bg: ReactNode;
}

const BackgroundAppender:FC<BackgroundAppenderProps> = ({bg}) => {
  return <>    
    {bg && React.cloneElement(bg as any, {className: s.bg, height: null})}
  </>;
}

export default BackgroundAppender;
