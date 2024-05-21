import React, {FC} from 'react';

import * as cl from './AccordionTitle.module.scss'

interface PropsI {
  text: string
  tags?: string[]
}

const AccordionTitle: FC<PropsI> = ({text, tags}) => {
  return (
    <div className={cl.container}>
      <div className={cl.title}>{text}</div>
      <div className={cl.tags}>
        {tags && (
          tags.map(tag => <div className={cl.tag}>{tag}</div>)
        )}
      </div>
    </div>
  );
};

export default AccordionTitle;