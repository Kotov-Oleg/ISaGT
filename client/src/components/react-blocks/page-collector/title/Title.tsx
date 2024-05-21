import React, {FC} from 'react';

import * as cl from './Title.module.scss'
import {TitleI} from "src/types/pageEditor";

export interface PropsI {
  props: TitleI
}

const Title: FC<PropsI> = ({props: {
  text
}}) => {
  return (
    <div className={cl.title}>
      {text}
    </div>
  );
};

export default Title;