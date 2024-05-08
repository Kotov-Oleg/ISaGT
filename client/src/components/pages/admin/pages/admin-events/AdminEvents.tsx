import React from 'react';
import * as cl from './AdminEvents.module.scss';
import EventsHead from "src/components/pages/admin/pages/admin-events/events-head/EventsHead";
import EventsLine from "src/components/pages/admin/pages/admin-events/events-line/EventsLine";
import AdminMenu from "src/components/pages/admin/admin-menu/AdminMenu";


const AdminEvents = () => {
  return (
    <div>
      <AdminMenu
        title={'Редактирование мероприятий'}
        button={<button className={'button button_accept'}>Создать мероприятие</button>}
      />
      <div>
        <EventsHead/>
        <EventsLine/>
      </div>
    </div>
  );
};

export default AdminEvents;