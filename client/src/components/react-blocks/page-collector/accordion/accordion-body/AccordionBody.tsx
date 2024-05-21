import React, {FC} from 'react';

import * as cl from './AccordionBody.module.scss'

interface PropsI {
  text: string
}

const AccordionBody: FC<PropsI> = ({text}) => {
  return (
    <div className={cl.text}>
      {text}
    </div>
  );
};

export default AccordionBody;