import React, {FC, useEffect, useState} from 'react';
import {createNews, getOneNews, NewsI, updateNews} from "src/api/newsAPI";
import {Controller, SubmitHandler, useForm} from 'react-hook-form'

import * as cl from './NewsForm.module.scss'
import dayjs, {Dayjs} from "dayjs";
import TextArea from "src/components/react-blocks/textarea/TextArea";
import DatePicker from "src/components/react-blocks/date-picker/DatePicker";

import {Modal, Upload} from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import {dateOnClient, dateOnServer} from "src/scripts/validation/change";
import {deleteImages} from "src/api/imageAPI";
import PageEditor from "src/components/pages/admin/page-editor/PageEditor";
import {ComponentI} from "src/types/pageEditor";

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
  document: {}
  fileList: UploadFile[]
  // removeList: string[]
}

const apiUrl = 'http://localhost:5000/'

const Form: FC<PropsI> = ({
  type,
  open,
  id,
  closeHandler,
  update
}) => {

  // Изображения
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [removeList, setRemoveList] = useState<string[]>([])

  const [editorImages, setEditorImages] = useState<string[]>([])
  const [editorComponents, setEditorComponents] = useState<ComponentI[]>([])

  const {control, handleSubmit, reset} = useForm<FormI>({
    defaultValues: async (): Promise<FormI> => {
      if (type === 'add') {
        return {
          title: '',
          date: null,
          document: {},
          fileList: []
        }
      } else {
        console.log('form render')
        await getOneNews(id)
          .then(res => {
            setFileList([{
              uid: '1',
              name: res.preview,
              status: 'done',
              url: apiUrl + res.preview
            }])
            reset({
              id: res.id,
              title: res.title,
              date: dayjs(res.date),
              fileList: [],
              document: {}
            })
          })
      }
    }

  })

  const onSubmit: SubmitHandler<FormI> = async (data): Promise<void> => {
    console.log('onSubmit')
    if (type === 'add') {
      await createNews({
        title: data.title,
        date: dateOnServer(data.date),
        document: JSON.stringify({}),
        fileName: fileList[0].name
      })
    } else {
      await updateNews({
        id: data.id,
        title: data.title,
        date: dateOnServer(data.date),
        document: JSON.stringify({}),
        fileName: fileList[0].name,
      })
      await deleteImages(removeList)
    }
    await update()
    closeHandler()
  }

  const uploadProps: UploadProps = {
    onChange: ({ fileList: newFileList, file }) => {
      console.log('change')
      if (file.status === 'done') {
        const list = fileList.map(f => {
          console.log(fileList.length)
          if (f.uid === file.uid) {
            let newFile = {...file}
            newFile.name = newFile.response.fileName
            return newFile
          }
          return f
        })
        setFileList(list)
        return
      }
      setFileList(newFileList)
    },
    fileList,
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        console.log('resolve', resolve)
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };


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
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={cl.form}>
          <div>Название</div>
          <Controller
            name={'title'}
            control={control}
            render={({field, fieldState}) => {
              const {value, onChange} = field
              return (
                <TextArea
                  value={value}
                  callback={onChange}
                />
              )
            }}
          />
          <div>Дата</div>
          <Controller
            name={'date'}
            control={control}
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
              name={'date'}
              control={control}
              render={({field}) => {
                const {value, onChange} = field
                return (
                  <ImgCrop
                    modalTitle={'Обрезка изображения'}
                    modalOk={'Сохранить'}
                    modalCancel={'Отмена'}
                    modalWidth={'100rem'}
                    aspect={1.5} // Ширина на высоту
                  >
                    <Upload
                      action={'http://localhost:5000/api/image'}
                      maxCount={1}
                      listType='picture-card'
                      onPreview={onPreview}
                      //{...uploadProps}
                      onRemove={(file) => {
                        setRemoveList(prev => [...prev, file.name])
                      }}
                      onChange={({ fileList: newFileList, file }) => {
                        console.log('change')
                        if (file.status === 'done') {
                          const list = fileList.map(f => {
                            console.log(fileList.length)
                            if (f.uid === file.uid) {
                              let newFile = {...file}
                              newFile.name = newFile.response.fileName
                              return newFile
                            }
                            return f
                          })
                          setFileList(list)
                          return
                        }
                        setFileList(newFileList)
                      }}
                      fileList={fileList}
                    >
                      {fileList.length < 5 && '+ Upload'}
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
        <PageEditor
          imageList={editorImages}
          componentsList={editorComponents}
          imageHandler={setEditorImages}
          componentsHandler={setEditorComponents}
        />
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
    </Modal>
  );
};

export default Form;