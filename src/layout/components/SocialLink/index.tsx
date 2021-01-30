import React, {FC, ReactNode} from "react";
import s from "./SocialLink.scss";

interface SocialLinkProps {
  icon: ReactNode;
  to: string;
  rel?: string;
}

const SocialLink: FC<SocialLinkProps> = ({icon, to, rel}) => {
  return <a href={to} target="_blank" rel={rel}>
    {icon && React.cloneElement(icon as any, {className: s.socialLink, height: '2rem', width: '2rem'})}
  </a>;
}

export default SocialLink;
