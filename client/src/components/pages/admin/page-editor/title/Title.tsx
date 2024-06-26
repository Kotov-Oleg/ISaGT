import React, {FC} from 'react';
import {ComponentsPropsI} from "src/components/pages/admin/page-editor/PageEditor";

import * as cl from '../PageEditor.module.scss'
import {TitleI} from "src/types/pageEditor";
import {useFormContext} from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

interface PropsI extends ComponentsPropsI {

}

const Title: FC<PropsI> = ({index, deleteHandler}) => {
  const {register} = useFormContext()

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
      <TextareaAutosize
        className={'input'}
        {...register(`editorComponents.${index}.document.text`)}
      />
    </div>
  );
};

export default Title;