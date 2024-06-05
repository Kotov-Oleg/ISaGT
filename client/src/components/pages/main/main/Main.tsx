import React from 'react';

import Slider from "react-slick";

import * as cl from './Main.module.scss'
import {baseURL} from "src/api";
import {getPage} from "src/api/pageAPI";
import {useFetchData} from "src/scripts/fetchData";
import PageCollector from "src/components/react-blocks/page-collector/PageCollector";
import {Link, useParams} from "react-router-dom";
import {eventsRoute, kafedryRoute, newsRoute} from "src/routes/defaultRoutes";

const Main = () => {
  const {faculty} = useParams()

  const {data} = useFetchData(() => getPage('test', 1))
  return (
    <div>
      <div className={cl.grayBlock}>
        <div className={cl.infoBlock}>
          <div className={cl.newsBlock}>
            <div className={cl.blockTitle}>
              <Link className={cl.link} to={newsRoute}>Все новости</Link>
            </div>
            <div className={cl.newsCards}>
              <Link className={cl.newsCard} to={''}>
                <div>
                  <img
                    className={cl.newsImg}
                    src={baseURL + '24ead467-82b1-4d65-ac26-4790b4e5d2e9.jpg'}
                    alt=""
                  />
                </div>
                <div className={cl.newsTitle}>Заголовок новости номер один</div>
              </Link>
              <Link className={cl.newsCard} to={''}></Link>
              <Link className={cl.newsCard} to={''}></Link>
              <Link className={cl.newsCard} to={''}></Link>
            </div>
          </div>
          <div className={cl.eventsBlock}>
            <div className={cl.blockTitle}>
              <Link className={cl.link} to={eventsRoute}>Все мероприятия</Link>
            </div>
            <div className={cl.eventCards}>
              <div className={cl.eventCard}></div>
              <div className={cl.eventCard}></div>
              <div className={cl.eventCard}></div>
              <div className={cl.eventCard}></div>
              <div className={cl.eventCard}></div>
            </div>
          </div>
        </div>
      </div>

      {data && (
        <PageCollector document={data}/>
      )}
    </div>
  );
};

export default Main;