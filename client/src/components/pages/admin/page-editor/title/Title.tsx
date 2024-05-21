import React, {FC} from 'react';
import {ComponentsPropsI} from "src/components/pages/admin/page-editor/PageEditor";

import * as cl from '../PageEditor.module.scss'
import {TitleI} from "src/types/pageEditor";

interface PropsI extends ComponentsPropsI {
  data: TitleI
}

const Title: FC<PropsI> = ({index, deleteHandler}) => {
  return (
    <div className={cl.editorComponent}>
      <div className={cl.componentTitle}>
        Заголовок
      </div>
      <div className={cl.deleteBtnContainer}>
        <button
          type={'button'}
          className={'delete-btn'}
          onClick={() => deleteHandler(index)}
        />
      </div>
      <div>
        Текст
      </div>
      <input type="text"/>
    </div>
  );
};

export default Title;