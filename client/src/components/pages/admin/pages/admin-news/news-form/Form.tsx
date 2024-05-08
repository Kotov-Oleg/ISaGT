import React, {FC, useEffect, useState} from 'react';
import {useFetchData} from "src/scripts/fetchData";
import {createNews, getOneNews, NewsI} from "src/api/newsAPI";
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import { UploadOutlined } from '@ant-design/icons';

import * as cl from './NewsForm.module.scss'
import dayjs, {Dayjs} from "dayjs";
import TextArea from "src/components/react-blocks/textarea/TextArea";
import DatePicker from "src/components/react-blocks/date-picker/DatePicker";
import {login} from "src/api/userAPI";
import {getStatic} from "src/api/staticAPI";

import {Modal, Upload} from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import {dateOnClient, dateOnServer} from "src/scripts/validation/change";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface PropsI {
  type: 'add' | 'edit'
  open: boolean
  id?: number
  closeHandler: () => void
}

interface FormI {
  title: string
  date: Dayjs | null
  document: {}
  preview: UploadFile[]
}

const apiUrl = 'http://localhost:5000/'

const Form: FC<PropsI> = ({
  type,
  open,
  id,
  closeHandler
}) => {

  // Изображения
  const [fileList, setFileList] = useState<UploadFile[]>([]);


  const {control, handleSubmit, reset} = useForm<FormI>({
    defaultValues: async (): Promise<FormI> => {
      if (type === 'add') {
        return {
          title: '',
          date: null,
          document: {},
          preview: []
        }
      } else {
        await getOneNews(id)
          .then(res => {
            setFileList([{
              uid: '1',
              name: res.preview,
              status: 'done',
              url: apiUrl + res.preview
            }])
            console.log('Получение данных с форме', {
              title: res.title,
              date: res.date,
              preview: [],
              document: {}
            })
            reset({
              title: res.title,
              date: dayjs(res.date),
              preview: [],
              document: {}
            })
          })
      }
    }

  })

  const onSubmit: SubmitHandler<FormI> = (data): void => {
    createNews({
      title: data.title,
      date: dateOnServer(data.date),
      document: {},
      preview: fileList[0]
    })
    closeHandler()
  }


  useEffect(() => {
    console.log('fileList', fileList)
  }, [fileList]);

  const uploadProps: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      console.log('beforeUpload', file)
      setFileList(prev => [...prev, file])
      return false
    },
    // onChange: ({ fileList: newFileList }) => {
    // },
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
              console.log('value', value)
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
            <ImgCrop
              modalTitle={'Обрезка изображения'}
              modalOk={'Сохранить'}
              modalCancel={'Отмена'}
              modalWidth={'100rem'}
              aspect={1.5} // Ширина на высоту
            >
              <Upload
                maxCount={1}
                listType='picture-card'
                onPreview={onPreview}
                {...uploadProps}
              >
                {fileList.length < 5 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </div>
        </div>
        <div className={cl.secondTitle}>
          Редактор страницы
        </div>
        <div style={{padding: '0 0 1rem 1rem', fontSize: '1.8rem'}}>В разработке...</div>
        <div style={{display: 'flex', justifyContent: 'end', padding: '0 1rem 1rem 0'}}>
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