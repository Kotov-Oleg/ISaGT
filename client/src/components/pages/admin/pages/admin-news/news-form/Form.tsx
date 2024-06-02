import React, {FC, useEffect, useState} from 'react';
import {createNews, getOneNews, NewsI, updateNews} from "src/api/newsAPI";
import {Controller, FormProvider, SubmitHandler, useForm} from 'react-hook-form'

import * as cl from './NewsForm.module.scss'
import dayjs, {Dayjs} from "dayjs";
import TextArea from "src/components/react-blocks/textarea/TextArea";
import DatePicker from "src/components/react-blocks/date-picker/DatePicker";

import {Modal, Upload} from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import {dateOnClient, dateOnServer} from "src/scripts/validation/change";
import {deleteImages, uploadURL} from "src/api/imageAPI";
import PageEditor from "src/components/pages/admin/page-editor/PageEditor";
import {ComponentI} from "src/types/pageEditor";
import TextareaAutosize from 'react-textarea-autosize';
import {onPreview} from "src/scripts/upload/onPreview";
import {uploadFile} from "src/scripts/upload/uploadFile";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface PropsI {
  type: 'add' | 'edit'
  open: boolean
  id?: number
  closeHandler: () => void
  update: () => void

}

interface FormI {
  id?: number
  title: string
  date: Dayjs | null
  fileList: UploadFile[]
  removeList: string[],
  editorImages: string[],
  editorComponents: ComponentI[]
}

const apiUrl = 'http://localhost:5000/'

const Form: FC<PropsI> = ({
  type,
  open,
  id,
  closeHandler,
  update
}) => {


  const form = useForm<FormI>({
    defaultValues: async (): Promise<FormI> => {
      if (type === 'add') {
        return {
          title: '',
          date: null,
          fileList: [],
          removeList: [],
          editorImages: [],
          editorComponents: []
        }
      } else {
        console.log('form render')
        await getOneNews(id)
          .then(res => {
            console.log('res', res)
            form.reset({
              id: res.id,
              title: res.title,
              date: dayjs(res.date),
              fileList: [{
                uid: '1',
                name: res.preview,
                status: 'done',
                url: apiUrl + res.preview
              }],
              removeList: [],
              // @ts-ignore
              editorImages: res.document.images, // TODO доделать типизацию
              // @ts-ignore
              editorComponents: res.document.components // TODO
            })
          })
      }
    }

  })

  const onSubmit: SubmitHandler<FormI> = async (data): Promise<void> => {
    console.log('onSubmit', data)
    if (type === 'add') {
      await createNews({
        title: data.title,
        date: dateOnServer(data.date),
        document: JSON.stringify({images: data.editorImages, components: data.editorComponents}),
        fileName: data.fileList[0].name,
        facultyId: 1
      })
    } else {
      await updateNews({
        id: data.id,
        title: data.title,
        date: dateOnServer(data.date),
        document: JSON.stringify({images: data.editorImages, components: data.editorComponents}),
        fileName: data.fileList[0].name
      })
      await deleteImages(data.removeList)
    }
    await update()
    closeHandler()
  }


  useEffect(() => {
    // Выход из формы по Esc
    const close = (e : any) => {
      if(e.code === 'Escape'){
        closeHandler()
      }
    }
    window.addEventListener('keydown', close, true)

    // Удаление слушателя
    return () => window.removeEventListener('keydown', close)
  }, []);

  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      onCancel={closeHandler}
      className={cl.modal}
      classNames={{wrapper: cl.wrapper}}
    >
      <div className={cl.title}>
        {`${type === 'add' ? 'Создание' : 'Редактирование'} новости`}
      </div>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className={cl.form}>
            <div>Название</div>
            <TextareaAutosize
              className={'input'}
              {...form.register('title')}
            />
            <div>Дата</div>
            <Controller
              name={'date'}
              control={form.control}
              render={({field}) => {
                const {value, onChange} = field
                return (
                  <DatePicker
                    value={value}
                    callback={onChange}
                    styleContainer={{padding: 0, width: '10rem'}}
                  />
                )
              }}
            />
            <div>Превью</div>
            <div>
              <Controller
                name={'fileList'}
                control={form.control}
                render={({field}) => {
                  const {value: fileList, onChange: setFileList} = field
                  const removeList = form.getValues('removeList')
                  return (
                    <ImgCrop
                      modalTitle={'Обрезка изображения'}
                      modalOk={'Сохранить'}
                      modalCancel={'Отмена'}
                      modalWidth={'100rem'}
                      aspect={1.5} // Ширина на высоту
                    >
                      <Upload
                        action={uploadURL}
                        maxCount={1}
                        listType='picture-card'
                        onPreview={onPreview}
                        onRemove={(file) => {
                          form.setValue('removeList', [...removeList, file.name])
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
          </div>
          <div className={cl.secondTitle}>
            Редактор страницы
          </div>
          <PageEditor/>
          <div style={{display: 'flex', justifyContent: 'end', padding: '0 1rem 1rem 0', gap: '1rem'}}>
            <button
              style={{width: '14rem'}}
              className={'button button_deny'}
              onClick={closeHandler}
            >
              Отменить
            </button>
            <button
              style={{width: '14rem'}}
              className={'button button_accept'}
              type={'submit'}
            >Сохранить
            </button>
          </div>
        </form>
      </FormProvider>

    </Modal>
  );
};

export default Form;