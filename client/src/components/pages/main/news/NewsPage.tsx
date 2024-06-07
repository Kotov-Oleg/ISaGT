import React, {useEffect, useState} from 'react';

import * as cl from './NewsPage.module.scss'
import {getNews, NewsLineI} from "src/api/newsAPI";
import {Link} from "react-router-dom";
import {baseURL} from "src/api";
import dayjs from "dayjs";
import cn from "classnames";
import useDebounce from "src/scripts/useDebounce";
import {validateString} from "src/scripts/validation/change";

const NewsPage = () => {
  const [newsData, setNewsData] = useState<NewsLineI[]>([])
  const [query, setQuery] = useState<string>('')


  const loadNews = useDebounce(async (q: string) => {
    getNews({q: validateString(q), rowsPerPage: 20, page: 1, facultyId: 1, filter: 'today'})
      .then(res => setNewsData(res))
  }, 1000)

  useEffect(() => {
    loadNews(query)
  }, [query]);

  return (
    <>
      <div className={cl.titleContainer}>
        <div className={cl.title}>
          Новости
        </div>
        <input
          type="text"
          className={cn('input', cl.input)}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className={cl.newsSection}>
        {newsData.map(news => {
          const date = dayjs(news.date).format('DD.MM.YYYY')
          return (
            <Link
              key={news.id}
              className={cl.card}
              to={''}
            >
              <img
                className={cl.cardImg}
                src={baseURL + news.preview}
                alt={news.title}
              />
              <div className={cl.cardContent}>
                <span className={cl.cardTitle}>
                  {news.title}
                </span>
                <div className={cl.cardDate}>
                  {date}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
    ;
};

export default NewsPage;