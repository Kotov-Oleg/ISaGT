import React, {FC, ReactNode, useState} from 'react';
import ParentComponent from "src/components/pages/main/direkciya/ParentComponent";
import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core';
import {SortableContext} from "@dnd-kit/sortable";
import SortableList from "src/components/pages/main/direkciya/SortTest";


interface PropsI {

}
const Direkciya: FC<PropsI> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [items] = useState([1, 2, 3]);
  return (
    <>
      {/*<div>Отображение: {isOpen}</div>*/}
      {/*<div>*/}
      {/*  <button onClick={() => setIsOpen(prev => !prev)}>Open</button>*/}
      {/*</div>*/}
      {/*{isOpen && (*/}
      {/*  <ParentComponent/>*/}
      {/*)}*/}

      <h1>Sortable List</h1>
      <SortableList />

    </>

  );
};

export default Direkciya;