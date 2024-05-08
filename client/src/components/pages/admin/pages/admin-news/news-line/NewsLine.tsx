import React, {FC, useState} from 'react';

import * as cl from './NewsLine.module.scss'
import {NewsLineI} from "src/api/newsAPI";
import {dateOnClient} from "src/scripts/validation/change";
import NewsForm from "src/components/pages/admin/pages/admin-news/news-form/NewsForm";

interface PropsI extends NewsLineI {

}

const NewsLine: FC<PropsI> = ({
  id,
  title,
  date
}) => {
  const [dateString, setDate] = useState(() => dateOnClient(date))

  return (
    <tr>
      <td>{title}</td>
      <td className={'table__center'}>{dateString}</td>
      <td className={'table__between'}>
        <NewsForm type={'edit'} id={id}/>
        <button className={'delete-btn'}/>
      </td>
    </tr>
  );
};

export default NewsLine;