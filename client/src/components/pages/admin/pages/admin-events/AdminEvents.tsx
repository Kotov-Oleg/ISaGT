import React, {ReactNode, useEffect, useState} from 'react';
import * as cl from './AdminEvents.module.scss';
import EventsHead from "src/components/pages/admin/pages/admin-events/events-head/EventsHead";
import EventsLine from "src/components/pages/admin/pages/admin-events/events-line/EventsLine";
import AdminMenu from "src/components/pages/admin/admin-menu/AdminMenu";
import NewsForm from "src/components/pages/admin/pages/admin-news/news-form/NewsForm";
import cn from "classnames";
import NewsHead from "src/components/pages/admin/pages/admin-news/news-head/NewsHead";
import {useFetchData} from "src/scripts/fetchData";
import {getEvents} from "src/api/eventsAPI";


const AdminEvents = () => {
  const {data, update} = useFetchData(() => getEvents({page: 1, q: '', rowsPerPage: 50}))
  const [eventComponents, setEventComponents] = useState<ReactNode[]>([])

  useEffect(() => {
    if (data) {
      let newComponents: ReactNode[] = []
      data.forEach(event => {
        newComponents.push(<EventsLine
          {...event}
        />)
      })
      setEventComponents(newComponents)
    }
  }, [data]);

  return (
    <div>
      <AdminMenu
        title={'Редактирование мероприятий'}
        button={
          <button
            className={'button button_accept'}
          >
            Создать мероприятие
          </button>
        }
      />
      <div>
        <table className={cn('table', cl.table)}>
          <EventsHead/>
          <tbody>
            {eventComponents}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEvents;