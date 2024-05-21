import React, {FC} from 'react';

import * as cl from './PageLink.module.scss'

interface PropsI {
  props: {
    text: string
    link: string
    isNewPage: boolean
  }
}
const PageLink: FC<PropsI> = ({props: {text, link, isNewPage}}) => {
  return (
    <a
      className={cl.link}
      href={link}
      target={isNewPage ? '_blank' : ''}
    >
      {text}
    </a>
  );
};

export default PageLink;