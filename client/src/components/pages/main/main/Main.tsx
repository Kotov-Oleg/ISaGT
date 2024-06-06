import React, {useEffect, useState} from 'react';


import * as cl from './Main.module.scss'
import {baseURL} from "src/api";
import {getPage} from "src/api/pageAPI";
import {useFetchData} from "src/scripts/fetchData";
import PageCollector from "src/components/react-blocks/page-collector/PageCollector";
import {Link, useParams} from "react-router-dom";
import {eventsRoute, kafedryRoute, newsRoute} from "src/routes/defaultRoutes";
import {getNews, NewsLineI} from "src/api/newsAPI";
import {EventLineI, getEvents} from "src/api/eventAPI";
import {dateOnClient} from "src/scripts/validation/change";
import dayjs, {Dayjs} from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);
dayjs.extend(updateLocale)

dayjs.updateLocale('ru', {
  months: [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ]
});

const Main = () => {
  const {faculty} = useParams()

  const {data} = useFetchData(() => getPage('test', 1))

  const [newsData, setNewsData] = useState<NewsLineI[]>([])
  const [eventData, setEventData] = useState<EventLineI[]>([])

  useEffect(() => {
    getNews({q: '', rowsPerPage: 4, page: 1, facultyId: 1, filter: 'today'})
      .then(res => setNewsData(res))

    getEvents({q: '', rowsPerPage: 4, page: 1, facultyId: 1, filter: 'today'})
      .then(res => setEventData(res))

  }, []);

  return (
    <div>
      <div className={cl.blueBlock}>
        <div className={cl.infoBlock}>
          <div>
            <Link
              className={cl.link}
              to={newsRoute}
            >
              Все новости
            </Link>
            <div className={cl.cardSection}>
              {newsData.map(news => {
                let date: Dayjs | string = dayjs(news.date).locale('ru')
                date = date.format('DD.MM.YYYY')
                return (
                  <Link
                    className={cl.card}
                    key={news.id}
                    to={''}
                  >
                    <img
                      src={baseURL + news.preview}
                      className={cl.cardImage}
                      alt={news.title}
                    />
                    <div className={cl.cardContent}>
                      <span className={cl.cardDate}>{date}</span>
                      <span className={cl.cardTitle}>{news.title}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div>
            <Link
              className={cl.link}
              to={eventsRoute}
            >
              Все мероприятия
            </Link>
            <div className={cl.cardSection}>
              {eventData.map(event => {
                let date: string = dayjs(event.date).format('DD.MM.YYYY')
                return (
                  <Link
                    className={cl.card}
                    key={event.id}
                    to={''}
                  >
                    <img
                      src={baseURL + event.preview}
                      className={cl.cardImage}
                      alt={event.title}
                    />
                    <div className={cl.cardContent}>
                      <span className={cl.cardDate}>{date}</span>
                      <span className={cl.cardTitle}>{event.title}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/*<div className={cl.newsBlock}>*/}
          {/*  <div className={cl.blockTitle}>*/}
          {/*    <Link className={cl.link} to={newsRoute}>Все новости</Link>*/}
          {/*  </div>*/}
          {/*  <div className={cl.newsCards}>*/}
          {/*    <Link className={cl.newsCard} to={''}>*/}
          {/*      <div>*/}
          {/*        <img*/}
          {/*          className={cl.newsImg}*/}
          {/*          src={baseURL + '24ead467-82b1-4d65-ac26-4790b4e5d2e9.jpg'}*/}
          {/*          alt=""*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <div className={cl.newsTitle}>Заголовок новости номер один</div>*/}
          {/*    </Link>*/}
          {/*    <Link className={cl.newsCard} to={''}></Link>*/}
          {/*    <Link className={cl.newsCard} to={''}></Link>*/}
          {/*    <Link className={cl.newsCard} to={''}></Link>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className={cl.newsBlock}>*/}
          {/*  <div className={cl.blockTitle}>*/}
          {/*    <Link className={cl.link} to={newsRoute}>Все новости</Link>*/}
          {/*  </div>*/}
          {/*  <div className={cl.newsCards}>*/}
          {/*    {newsData.map(news => {*/}
          {/*      const date = dateOnClient(news.date)*/}
          {/*      return (*/}
          {/*        <div key={news.id} className={cl.newsCard}>*/}
          {/*          <img src={baseURL + news.preview} alt={news.title} className={cl.newsImage}/>*/}
          {/*          <div className={cl.newsDate}>{date}</div>*/}
          {/*          <div className={cl.newsTitle}>{news.title}</div>*/}
          {/*        </div>*/}
          {/*      )*/}
          {/*    })}*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className={cl.eventsBlock}>*/}
          {/*  <div className={cl.blockTitle}>*/}
          {/*    <Link className={cl.link} to={eventsRoute}>Все мероприятия</Link>*/}
          {/*  </div>*/}
          {/*  <div className={cl.eventCards}>*/}
          {/*    {eventData.map(event => {*/}
          {/*      return (*/}
          {/*        <div*/}
          {/*          key={event.id}*/}
          {/*          className={cl.eventCard}*/}
          {/*        >*/}
          {/*          <div>*/}

          {/*          </div>*/}
          {/*          <div>*/}

          {/*          </div>*/}
          {/*        </div>*/}
          {/*      )*/}
          {/*    })}*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>

      {/*{data && (*/}
      {/*  <PageCollector document={data}/>*/}
      {/*)}*/}
    </div>
  );
};

export default Main;