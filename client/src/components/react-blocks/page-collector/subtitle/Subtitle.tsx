import React, {FC} from 'react';

import * as cl from './Subtitle.module.scss'

interface PropsI {
  props: {
    text: string
  }
}

const Subtitle: FC<PropsI> = ({props: {text}}) => {
  return (
    <div className={cl.subtitle}>
      {text}
    </div>
  );
};

export default Subtitle;