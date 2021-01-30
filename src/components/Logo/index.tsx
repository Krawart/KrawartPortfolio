import React, {FC} from "react";
import s from "./Logo.scss";
import KrawartLogo from "../../assets/svg/logo.svg";
import {Link} from "../link/Link";

const Logo: FC = () => {
  return (
    <Link to={"/"}>
      <KrawartLogo className={s.logo}/>
    </Link>
  );
}

export default Logo;
