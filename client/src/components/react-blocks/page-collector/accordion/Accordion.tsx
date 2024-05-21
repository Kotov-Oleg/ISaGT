import React, {FC, useState} from 'react';

import * as cl from './Accordeon.module.scss'
import {Collapse, CollapseProps} from "antd";
import AccordionTitle from "src/components/react-blocks/page-collector/accordion/accordion-title/AccordionTitle";
import AccordionBody from "src/components/react-blocks/page-collector/accordion/accordion-body/AccordionBody";


interface AccordionI {
  title: string
  tags: string[]
  body: string
}
interface PropsI {
  props: AccordionI[]
}

const Accordion: FC<PropsI> = ({props}) => {
  const [items, setItems] = useState<CollapseProps['items']>(() =>
    props.map((item, index) => {
      return {
        key: index,
        label: <AccordionTitle text={item.title} tags={item.tags}/>,
        children: <AccordionBody text={item.body}/>
      }
    })
  )

  return (
    <Collapse items={items}/>
  );
};

export default Accordion;