import React, {FC} from 'react';

import * as cl from './Text.module.scss'

interface PropsI {
  props: {
    text: string
  }
}

const Text: FC<PropsI> = ({props: {text}}) => {
  return (
    <div className={cl.text}>
      {text}
    </div>
  );
};

export default Text;