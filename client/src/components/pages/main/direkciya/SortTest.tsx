import React, {useEffect, useState} from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import * as cl from './SortTest.module.scss'

interface SortableItemProps {
  id: string;
}

const SortableItem: React.FC<SortableItemProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}  className={cl.sortableItem}>
      <div {...attributes} {...listeners} className={cl.sortButton}/>
      <div>{id}</div>
    </div>
  );
};

const SortableList: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3', 'Item 4','Item 5', 'Item 6', 'Item 7', 'Item 8','Item 9', 'Item 10', 'Item 11', 'Item 12','Item 13', 'Item 14', 'Item 15', 'Item 16','Item 17', 'Item 18', 'Item 19', 'Item 20']);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log('event', event)
    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over?.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  useEffect(() => {
    console.log('items', items)
  }, [items]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SortableList;
