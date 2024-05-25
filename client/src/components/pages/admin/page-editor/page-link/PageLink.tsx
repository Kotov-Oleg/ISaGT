import React, {FC} from 'react';
import {ComponentsPropsI} from "src/components/pages/admin/page-editor/PageEditor";
import * as cl from "src/components/pages/admin/page-editor/PageEditor.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import {useFormContext} from "react-hook-form";

interface PropsI extends ComponentsPropsI {

}
const PageLink: FC<PropsI> = ({index, deleteHandler}) => {
  const {register} = useFormContext()

  return (
    <div className={cl.editorComponent}>
      <div className={cl.componentTitle}>
        Ссылка
      </div>
      <div className={cl.deleteBtnContainer}>
        <button
          type={'button'}
          className={'delete-btn'}
          onClick={() => deleteHandler(index)}
        />
      </div>
      <div>
        Текст ссылки
      </div>
      <TextareaAutosize
        className={'input'}
        {...register(`editorComponents.${index}.document.text`)}
      />
      <div>
        Ссылка
      </div>
      <TextareaAutosize
        className={'input'}
        {...register(`editorComponents.${index}.document.link`)}
      />
      <div>
        Открывать в новом окне?
      </div>
      <input
        type={'checkbox'}
        className={'checkbox'}
        {...register(`editorComponents.${index}.document.isNewPage`)}
      />
    </div>
  );
};

export default PageLink;