import React, {FC} from 'react';

import * as cl from './PersonCard.module.scss'
import {baseURL} from "src/api";

interface PropsI {
  props: {
    fio: string
    position?: string // должность
    photo?: string
    stepen?: string // ученая степень
    zvanie?: string // ученое звание
    text?: string
  }
}

const PersonCard: FC<PropsI> = ({props : {
  fio,
  position,
  photo,
  stepen,
  zvanie,
  text
}}) => {
  return (
    <div className={cl.personCard}>
      {photo && (
        <img
          className={cl.avatar}
          src={baseURL + photo}
          alt=""
        />
      )}
      <div className={cl.cardBody}>
        <div className={cl.title}>{`${position} - ${fio}`}</div>
        <div className={cl.tags}>
          {stepen && (
            <div className={cl.tag}>{`Ученая степень: ${stepen}`}</div>
          )}
          {zvanie && (
            <div className={cl.tag}>{`Ученое звание: ${zvanie}`}</div>
          )}
        </div>
        {text && (
          <div>{text}</div>
        )}
      </div>
    </div>
  );
};

export default PersonCard;