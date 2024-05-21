import React, {FC, useState} from 'react';

import * as cl from './NewsLine.module.scss'
import {deleteNews, NewsLineI} from "src/api/newsAPI";
import {dateOnClient} from "src/scripts/validation/change";
import NewsForm from "src/components/pages/admin/pages/admin-news/news-form/NewsForm";
import {deleteImages} from "src/api/imageAPI";

interface PropsI extends NewsLineI {
  update: () => void
}

const NewsLine: FC<PropsI> = ({
  id,
  title,
  date,
  preview,
  update
}) => {
  const [dateString, setDate] = useState(() => dateOnClient(date))

  const deleteHandler = async (): Promise<void> => {
    await deleteNews(id)
    await deleteImages([preview])
    await update()
  }

  return (
    <tr>
      <td>{title}</td>
      <td className={'table__center'}>{dateString}</td>
      <td className={'table__between'}>
        <NewsForm type={'edit'} id={id} update={update}/>
        <button
          onClick={deleteHandler}
          className={'delete-btn'}
        />
      </td>
    </tr>
  );
};

export default NewsLine;