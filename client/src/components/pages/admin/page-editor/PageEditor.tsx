import React, {FC, ReactNode, useEffect, useState} from 'react';

import * as cl from './PageEditor.module.scss'
import cn from "classnames";
import {ComponentI, defaultValues} from "src/types/pageEditor";
import SelectComponent from "src/components/pages/admin/page-editor/select-component/SelectComponent";
import Title from "src/components/pages/admin/page-editor/title/Title";
import {Controller, FieldValues, useFieldArray, useFormContext} from "react-hook-form";
import Subtitle from "src/components/pages/admin/page-editor/subtitle/Subtitle";
import Text from "src/components/pages/admin/page-editor/text/Text";
import PageLink from "src/components/pages/admin/page-editor/page-link/PageLink";
import PersonCard from "src/components/pages/admin/page-editor/person-card/PersonCard";

export interface ComponentsPropsI {
  index: number
  deleteHandler: (a: number) => void
}

interface PropsI {

}

const PageEditor: FC<PropsI> = ({}) => {
  console.log('render editor')
  const {control, watch, register, setValue} = useFormContext()
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'editorComponents'
  })

  // Создание нового компонента (селект)
  const addComponentHandler = (): void => {
    append({name: 'select'})
  }

  // Удаление компонента
  const deleteHandler = (index: number): void => {
    remove(index)
  }

  // Выбор компонента
  const selectHandler = (index: number, value: string): void => {
    setValue(`editorComponents.${index}`, defaultValues.filter(data => data.name === value)[0])
  }

  return (
    <div className={cl.pageEditor}>
      {fields.map((field, index) => {
        return (
          <Controller
            key={field.id}
            name={`editorComponents.${index}`}
            control={control}
            render={({field: {value}}) => {
              if (value.name === 'select') {
                return (<SelectComponent
                  index={index}
                  deleteHandler={deleteHandler}
                  selectHandler={selectHandler}
                />)
              } else if (value.name === 'title') {
                return <Title index={index} deleteHandler={deleteHandler}/>
              } else if (value.name === 'subtitle') {
                return <Subtitle index={index} deleteHandler={deleteHandler}/>
              } else if (value.name === 'text') {
                return <Text index={index} deleteHandler={deleteHandler}/>
              } else if (value.name === 'person-card') {
                return <PersonCard index={index} deleteHandler={deleteHandler}/>
              } else if (value.name === 'accordion') {

              } else if (value.name === 'page-link') {
                return <PageLink index={index} deleteHandler={deleteHandler}/>
              }
            }}
          />
        )
      })}
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