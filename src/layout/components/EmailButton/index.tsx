import React, { FC } from 'react';
import Email from '../../../assets/svg/icons/email.svg';
import s from './EmailButton.scss';

const EmailButton: FC = () => {
  return (
    <a href="mailto: contact@krawart.com?subject=Krawart%20-%20Get%20in%20touch">
      <div className={s.button}>
        <Email />
      </div>
    </a>
  );
};

export default EmailButton;
