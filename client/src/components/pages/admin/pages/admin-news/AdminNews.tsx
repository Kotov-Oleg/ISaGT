import React, {ReactNode, useEffect, useState} from 'react';

import * as cl from './AdminNews.module.scss'
import NewsHead from "src/components/pages/admin/pages/admin-news/news-head/NewsHead";
import NewsLine from "src/components/pages/admin/pages/admin-news/news-line/NewsLine";
import cn from "classnames";
import AdminMenu from "src/components/pages/admin/admin-menu/AdminMenu";
import {useFetchData} from "src/scripts/fetchData";
import {getNews} from "src/api/newsAPI";
import NewsForm from "src/components/pages/admin/pages/admin-news/news-form/NewsForm";



const AdminNews = () => {
  const {data, update} = useFetchData(() => getNews({page: 1, q: '', rowsPerPage: 50, filter: 'all', facultyId: 1}))

  const [newsComponents, setNewsComponents] = useState<ReactNode[]>([])

  useEffect(() => {
    if (data) {
      let newComponents: ReactNode[] = []
      data.forEach(n => {
        newComponents.push(<NewsLine
          key={n.id}
          update={update}
          {...n}
        />)
      })
      setNewsComponents(newComponents)
    }
  }, [data]);


  return (
    <div>
      <AdminMenu
        title={'Редактирование новостей'}
        button={
          <NewsForm type={'add'} update={update}/>
        }
      />
      <table className={cn('table', cl.table)}>
        <NewsHead/>
        <tbody>
          {newsComponents}
        </tbody>
      </table>
    </div>

  );
};

export default AdminNews;