import React, {FC} from 'react';
import {useFormContext} from "react-hook-form";
import * as cl from "src/components/pages/admin/page-editor/PageEditor.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import {ComponentsPropsI} from "src/components/pages/admin/page-editor/PageEditor";

interface PropsI extends ComponentsPropsI {

}


const Subtitle: FC<PropsI> = ({index, deleteHandler}) => {
  const {register} = useFormContext()

  return (
    <div className={cl.editorComponent}>
      <div className={cl.componentTitle}>
        Подзаголовок
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

export default Subtitle;