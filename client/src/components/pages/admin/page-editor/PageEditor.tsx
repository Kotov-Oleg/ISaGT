import React, {FC, ReactNode, useEffect, useState} from 'react';

import * as cl from './PageEditor.module.scss'
import cn from "classnames";
import {ComponentI, defaultValues} from "src/types/pageEditor";
import SelectComponent from "src/components/pages/admin/page-editor/select-component/SelectComponent";
import Title from "src/components/pages/admin/page-editor/title/Title";

export interface ComponentsPropsI {
  index: number
  deleteHandler: (a: number) => void
}

interface PropsI {
  imageList: string[] // список страниц
  componentsList: ComponentI[] // данные компонентов
  imageHandler: (a: string[]) => void
  componentsHandler:  React.Dispatch<React.SetStateAction<ComponentI[]>>
}

const PageEditor: FC<PropsI> = ({imageList, componentsList, imageHandler, componentsHandler}) => {

  const [components, setComponents] = useState<ReactNode[]>([])

  // Создание нового компонента (селект)
  const addComponentHandler = (): void => {
    componentsHandler((prev) => {
      return [...prev, {name: 'select'}]
    })
  }

  // Удаление компонента
  const deleteHandler = (index: number): void => {
    componentsHandler(prev => {
      let newList = [...prev]
      newList.splice(index, 1)
      return newList
    })
  }

  // Выбор компонента
  const selectHandler = (index: number, value: string): void => {
    let data: ComponentI
    componentsHandler(prev => {
      let newList = [...prev]
      newList.splice(index, 1, defaultValues.filter(data => data.name === value)[0])
      console.log('newList', newList)
      return newList
    })
  }

  useEffect(() => {
    const createComponents = (list: ComponentI[]): void => {
      let newList: ReactNode[] = []
      list.forEach((data, index) => {
        if (data.name === 'select') {
          newList.push(<SelectComponent
            key={index}
            index={index}
            deleteHandler={deleteHandler}
            selectHandler={selectHandler}
          />)
        } else if (data.name === 'title') {
          newList.push(<Title
            key={index}
            index={index}
            deleteHandler={deleteHandler}
            // @ts-ignore
            data={data.document}
          />)
        }
      })
      setComponents(newList)
    }
    if (componentsList) {
      createComponents(componentsList)
    }

  }, [componentsList]);

  return (
    <div className={cl.pageEditor}>
      {components}
      <button
        type={'button'}
        className={cn('button button_accept', cl.addBtn)}
        onClick={addComponentHandler}
      >Добавить
      </button>
    </div>
  );
};

export default PageEditor;