import React from 'react';
import PageCollector from "src/components/react-blocks/page-collector/PageCollector";
import {useFetchData} from "src/scripts/fetchData";
import {getPage} from "src/api/pagesAPI";

const Main = () => {

  const {data} = useFetchData(() => getPage('test'))

  return (
    <div>
      {data && (
        <PageCollector document={data.data}/>
      )}
    </div>
  );
};

export default Main;