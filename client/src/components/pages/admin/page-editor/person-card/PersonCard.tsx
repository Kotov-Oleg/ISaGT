import React, {FC} from 'react';
import {ComponentsPropsI} from "src/components/pages/admin/page-editor/PageEditor";
import {Controller, useFormContext} from "react-hook-form";
import * as cl from "src/components/pages/admin/page-editor/PageEditor.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import ImgCrop from "antd-img-crop";
import {Upload} from "antd";
import {uploadURL} from "src/api/imageAPI";
import {onPreview} from "src/scripts/upload/onPreview";
import {uploadFile} from "src/scripts/upload/uploadFile";

interface PropsI extends ComponentsPropsI {

}

const PersonCard: FC<PropsI> = ({index, deleteHandler}) => {
  const {register, control, setValue, getValues} = useFormContext()

  const deleteComponentHandler = () => {
    //@ts-ignore
    const fileNames: string[] = getValues(`editorComponents.${index}.document.photo`).map(file => file.name)
    const removeList = getValues('removeList')
    setValue('removeList', [...removeList, ...fileNames])
    deleteHandler(index)
  }

  return (
    <div className={cl.editorComponent}>
      <div className={cl.componentTitle}>
        Персональная карточка
      </div>
      <div className={cl.deleteBtnContainer}>
        <button
          type={'button'}
          className={'delete-btn'}
          onClick={deleteComponentHandler}
        />
      </div>
      <div>
        ФИО
      </div>
      <TextareaAutosize
        className={'input'}
        {...register(`editorComponents.${index}.document.fio`)}
      />
      <div>
        Должность
      </div>
      <TextareaAutosize
        className={'input'}
        {...register(`editorComponents.${index}.document.position`)}
      />
      <div>
        Фото
      </div>
      <div>
        <Controller
          name={`editorComponents.${index}.document.photo`}
          control={control}
          render={({field}) => {
            const {value: fileList, onChange: setFileList} = field
            const removeList = getValues('removeList')
            return (
              <ImgCrop
                modalTitle={'Обрезка изображения'}
                modalOk={'Сохранить'}
                modalCancel={'Отмена'}
                modalWidth={'100rem'}
                aspect={1} // Ширина на высоту
              >
                <Upload
                  action={uploadURL}
                  maxCount={1}
                  listType='picture-card'
                  onPreview={onPreview}
                  onRemove={(file) => {
                    setValue('removeList', [...removeList, file.name])
                  }}
                  onChange={({fileList: newFileList, file}) => {
                    setFileList(uploadFile(fileList, newFileList, file))
                  }}
                  fileList={fileList}
                >
                  {'Загрузить'}
                </Upload>
              </ImgCrop>
            )
          }}
        />
      </div>
      <div>
        Ученая степень
      </div>
      <TextareaAutosize
        className={'input'}
        {...register(`editorComponents.${index}.document.stepen`)}
      />
      <div>
        Ученое звание
      </div>
      <TextareaAutosize
        className={'input'}
        {...register(`editorComponents.${index}.document.zvanie`)}
      />
      <div>
        Описание
      </div>
      <TextareaAutosize
        className={'input'}
        {...register(`editorComponents.${index}.document.text`)}
      />
    </div>
  );
};

export default PersonCard;