import React, {FC} from 'react';
import Select from "react-select";
import {selectTheme} from "src/components/css-blocks/select/selectTheme";
import {selectStyles} from "src/components/css-blocks/select/selectStyles";
import {componentOptions} from "src/types/pageEditor";

import * as cl from '../PageEditor.module.scss'
import {ComponentsPropsI} from "src/components/pages/admin/page-editor/PageEditor";

interface PropsI extends ComponentsPropsI {
  selectHandler: (a: number, b: string) => void
}

const SelectComponent: FC<PropsI> = ({index, deleteHandler, selectHandler}) => {



  return (
    <div className={cl.editorComponent}>
      <Select
        noOptionsMessage={() => 'Пусто!'}
        styles={selectStyles}
        theme={selectTheme}
        options={componentOptions}
        placeholder={'Выберите компонент!'}
        onChange={(choice) => selectHandler(index, choice.value)}
      />
      <div className={cl.deleteBtnContainer}>
        <button
          type={'button'}
          className={'delete-btn'}
          onClick={() => deleteHandler(index)}
        />
      </div>
    </div>

  );
};

export default SelectComponent;