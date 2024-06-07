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
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '0.5em',
    color: '#003366',
  },
  subheading: {
    fontSize: '1.5em',
    marginBottom: '0.5em',
    color: '#00509e',
  },
  section: {
    marginBottom: '1.5em',
  },
  paragraph: {
    marginBottom: '1em',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '0.5em',
  },
};

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
        </div>
      </div>

      {/*{data && (*/}
      {/*  <PageCollector document={data}/>*/}
      {/*)}*/}

      <div style={styles.container}>
        <h1 style={styles.heading}>Чем занимается Институт информационных систем и геотехнологий</h1>
        <p style={styles.paragraph}>
          Институт информационных систем и геотехнологий (ИСиГТ) — это ведущий образовательный и научный центр,
          специализирующийся на подготовке высококвалифицированных специалистов в области информационных технологий и
          систем. Наш институт объединяет фундаментальные знания и практические навыки, необходимые для успешной карьеры
          в сфере IT.
        </p>

        <div style={styles.section}>
          <h2 style={styles.subheading}>Основные направления деятельности ИСиГТ:</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Образование и подготовка специалистов:</strong><br/>
              <em>Бакалавриат и магистратура:</em> Программы обучения включают современные курсы по программированию,
              анализу данных, разработке программного обеспечения, кибербезопасности и управлению IT-проектами.<br/>
              <em>Дополнительное образование:</em> Курсы повышения квалификации и профессиональной переподготовки для
              специалистов, желающих углубить свои знания или сменить профессию.
            </li>
            <li style={styles.listItem}>
              <strong>Научные исследования и разработки:</strong><br/>
              <em>Инновационные проекты:</em> Научные сотрудники и студенты института активно участвуют в разработке
              передовых технологий и решений в области искусственного интеллекта, больших данных, интернета вещей и
              других перспективных направлений.<br/>
              <em>Публикации и конференции:</em> Институт регулярно организует и принимает участие в международных
              научных конференциях, публикует результаты исследований в престижных научных журналах.
            </li>
            <li style={styles.listItem}>
              <strong>Сотрудничество с индустрией:</strong><br/>
              <em>Партнерство с компаниями:</em> ИСиГТ тесно сотрудничает с ведущими IT-компаниями, обеспечивая
              студентам возможность прохождения стажировок и практик, а также участие в реальных проектах.<br/>
              <em>Технологические парки и инкубаторы:</em> На базе института действуют инкубаторы стартапов и
              технологические парки, где молодые предприниматели могут развивать свои идеи и получать поддержку на всех
              этапах реализации проектов.
            </li>
            <li style={styles.listItem}>
              <strong>Международное сотрудничество:</strong><br/>
              <em>Обмен и стажировки:</em> ИСиГТ активно развивает международные программы обмена студентами и
              преподавателями, организует стажировки в зарубежных университетах и компаниях.<br/>
              <em>Гранты и проекты:</em> Институт участвует в международных грантовых программах и проектах,
              направленных на развитие глобальных научных и образовательных инициатив.
            </li>
          </ul>
        </div>

        <p style={styles.paragraph}>
          Институт информационных систем и геотехнологий стремится быть на переднем крае научного и технологического
          прогресса, готовя специалистов, которые смогут решать самые сложные задачи современного мира. Мы гордимся
          нашими выпускниками, которые становятся лидерами в своих областях и вносят значительный вклад в развитие
          общества и технологий.
        </p>
      </div>
    </div>
  );
};

export default Main;