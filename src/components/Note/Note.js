import React from 'react';
import { HiOutlineInformationCircle } from 'react-icons//hi';
import * as s from './Note.module.css';

export const Note = ({ description }) => {
  return (
    <>
      {description && (
        <div className={s.wrapper}>
          <div className={s.iconWrapper}>
            <HiOutlineInformationCircle className={s.icon} alt="informations" />
          </div>
          <strong className={s.text}>{description}</strong>
        </div>
      )}
    </>
  );
};
