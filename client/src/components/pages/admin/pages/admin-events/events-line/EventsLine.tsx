import React, {FC, useState} from 'react';
import * as cl from './EventsLine.module.scss';
import {EventLineI} from "src/api/eventsAPI";
import {dateOnClient} from "src/scripts/validation/change";

interface PropsI extends EventLineI {

}

const EventsLine: FC<PropsI> = ({
  id,
  title,
  date,
  time,
  preview
}) => {

  const [dateStr, setDateStr] = useState<string>(() => dateOnClient(date))

  const deleteHandler = async () => {

  }

  return (
    <tr>
      <td>{title}</td>
      <td className={'table__center'}>{dateStr}</td>
      <td className={'table__center'}>{time}</td>
      <td className={'table__between'}>
        {/*<NewsForm type={'edit'} id={id} update={update}/>*/}
        <button
          onClick={deleteHandler}
          className={'delete-btn'}
        />
      </td>
    </tr>
  );
};

export default EventsLine;