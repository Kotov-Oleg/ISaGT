import React from 'react';

import * as cl from './AdminNews.module.scss'
import NewsHead from "src/components/pages/admin/pages/admin-news/news-head/NewsHead";

const AdminNews = () => {
  return (
    <div>
      <div className={cl.menu}>
        <div className={cl.title}>
          Редактирование новостей
        </div>
        <button className={'button button_accept'}>Создать новость</button>
      </div>
      <div>
        <NewsHead/>
        Таблица
        Название
        Дата
        Кнопки редактирования/удаления
      </div>
    </div>
  );
};

export default AdminNews;