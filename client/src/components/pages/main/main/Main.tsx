import React from 'react';
import PageCollector from "src/components/react-blocks/page-collector/PageCollector";
import {useFetchData} from "src/scripts/fetchData";
import {getPage} from "src/api/pageAPI";

const Main = () => {

  // const {data} = useFetchData(() => getPage('test', 1))

  return (
    <div>
      Главная страница
      {/*{data && (*/}
      {/*  <PageCollector document={data}/>*/}
      {/*)}*/}
    </div>
  );
};

export default Main;