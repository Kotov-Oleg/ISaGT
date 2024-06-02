import React, {FC, ReactNode, useEffect, useState} from 'react';
import Title from "src/components/react-blocks/page-collector/title/Title";
import Subtitle from "src/components/react-blocks/page-collector/subtitle/Subtitle";

import * as cl from './PageCollector.module.scss'
import Text from "src/components/react-blocks/page-collector/text/Text";
import PersonCard from "src/components/react-blocks/page-collector/person-card/PersonCard";
import Accordion from "src/components/react-blocks/page-collector/accordion/Accordion";
import PageLink from "src/components/react-blocks/page-collector/page-link/PageLink";

export interface DocumentI {
  name: string
  document: any
}

interface PropsI {
  document: DocumentI[]
}
const PageCollector: FC<PropsI> = ({document}) => {

  const [componentsList, setComponentsList] = useState<ReactNode[]>([])

  useEffect(() => {
    const buildPage = (dataList: DocumentI[]): void => {
      let newList: ReactNode[] = []
      dataList.forEach(data => {
        if (data.name === 'title') {
          newList.push(<Title props={data.document}/>)
          return
        }
        if (data.name === 'subtitle') {
          newList.push(<Subtitle props={data.document}/>)
          return
        }
        if (data.name === 'text') {
          newList.push(<Text props={data.document}/>)
          return
        }
        if (data.name === 'person-card') {
          newList.push(<PersonCard props={data.document}/>)
          return
        }
        if (data.name === 'accordion') {
          newList.push(<Accordion props={data.document}/>)
          return
        }
        if (data.name === 'page-link') {
          newList.push(<PageLink props={data.document}/>)
          return
        }
      })
      setComponentsList(newList)
    }
    buildPage(document)
  }, []);

  return (
    <div className={cl.page}>
      {componentsList}
    </div>
  );
};

export default PageCollector;