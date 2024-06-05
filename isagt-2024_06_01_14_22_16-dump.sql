--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: json_access; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.json_access AS (
	super boolean,
	slider boolean,
	news boolean,
	pages boolean,
	events boolean,
	faq boolean
);


ALTER TYPE public.json_access OWNER TO postgres;

--
-- Name: json_reorder; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.json_reorder AS (
	id integer,
	number integer
);


ALTER TYPE public.json_reorder OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: access; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.access (
    id integer NOT NULL,
    super boolean DEFAULT false NOT NULL,
    slider boolean DEFAULT false NOT NULL,
    news boolean DEFAULT false NOT NULL,
    pages boolean DEFAULT false NOT NULL,
    events boolean DEFAULT false NOT NULL,
    faq boolean DEFAULT false NOT NULL
);


ALTER TABLE public.access OWNER TO postgres;

--
-- Name: admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_id_seq OWNER TO postgres;

--
-- Name: admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin (
    id integer DEFAULT nextval('public.admin_id_seq'::regclass) NOT NULL,
    login character varying(50) NOT NULL,
    password character varying NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    patronymic character varying(50)
);


ALTER TABLE public.admin OWNER TO postgres;

--
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    id integer NOT NULL,
    title character varying NOT NULL,
    date date NOT NULL,
    "time" character varying(5),
    document json,
    preview character varying
);


ALTER TABLE public.events OWNER TO postgres;

--
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.event_id_seq OWNER TO postgres;

--
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.events.id;


--
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id integer NOT NULL,
    date date NOT NULL,
    title character varying(150) NOT NULL,
    preview character varying,
    document json
);


ALTER TABLE public.news OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.news_id_seq OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- Name: news_tag_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_tag_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.news_tag_id_seq OWNER TO postgres;

--
-- Name: pages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages (
    id integer NOT NULL,
    name character varying NOT NULL,
    data json DEFAULT '{}'::json NOT NULL
);


ALTER TABLE public.pages OWNER TO postgres;

--
-- Name: pages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_id_seq OWNER TO postgres;

--
-- Name: pages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pages_id_seq OWNED BY public.pages.id;


--
-- Name: slider; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.slider (
    id integer NOT NULL,
    title character varying NOT NULL,
    body character varying NOT NULL,
    img character varying,
    link character varying,
    number integer
);


ALTER TABLE public.slider OWNER TO postgres;

--
-- Name: slider_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.slider_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.slider_id_seq OWNER TO postgres;

--
-- Name: slider_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.slider_id_seq OWNED BY public.slider.id;


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Name: pages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages ALTER COLUMN id SET DEFAULT nextval('public.pages_id_seq'::regclass);


--
-- Name: slider id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slider ALTER COLUMN id SET DEFAULT nextval('public.slider_id_seq'::regclass);


--
-- Data for Name: access; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.access VALUES (1, true, true, true, true, false, false);
INSERT INTO public.access VALUES (2, false, false, true, false, false, false);
INSERT INTO public.access VALUES (3, false, false, false, false, true, false);


--
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.admin VALUES (2, 'admin_news', 'U2FsdGVkX18UGl2txyJyvs2Wv287OhpA13dRULgddnU=', 'Админ', 'Новостей', NULL);
INSERT INTO public.admin VALUES (3, 'admin_events', 'U2FsdGVkX18UGl2txyJyvs2Wv287OhpA13dRULgddnU=', 'Админ', 'Мероприятий', NULL);
INSERT INTO public.admin VALUES (1, 'admin', 'U2FsdGVkX18UGl2txyJyvs2Wv287OhpA13dRULgddnU=', 'Админ', 'Главный', NULL);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.events VALUES (1, 'test', '2024-04-29', '17:00', '[]', NULL);


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.news VALUES (2, '2024-04-30', 'В мае пройдет чемпионат вузов по Dota 3', '18d56f7e-edb0-4f3f-8f87-df6d00d5c3a3.jpg', '{}');
INSERT INTO public.news VALUES (13, '2024-02-06', 'Старая новость', '5acd2f01-dd0b-4d66-8223-64f5178a9627.jpg', '{}');
INSERT INTO public.news VALUES (14, '2024-05-17', 'Открыт набор в студенческий совет ИИСиГТ', 'c90f8b22-5cf4-4f46-b217-c8628cf83854.jpg', '{}');
INSERT INTO public.news VALUES (11, '2024-05-15', 'Награждение призеров олимпиады по программированию', '24ead467-82b1-4d65-ac26-4790b4e5d2e9.jpg', '{}');


--
-- Data for Name: pages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pages VALUES (1, 'test', '[{"name":"title","document":{"text":"Заголовок 1"}},{"name":"subtitle","document":{"text":"Заголовок 2"}},{"name":"text","document":{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut. Et malesuada fames ac turpis egestas maecenas pharetra. Aliquet risus feugiat in ante metus dictum at tempor commodo. Massa vitae tortor condimentum lacinia quis vel eros. Quis lectus nulla at volutpat diam ut venenatis. Amet justo donec enim diam vulputate ut pharetra sit. "}},{"name":"person-card","document":{"fio":"Фамилия Имя Отчество","position":"Должность","photo":"24ead467-82b1-4d65-ac26-4790b4e5d2e9.jpg","stepen":"Степень","zvanie":"Звание","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut. Et malesuada fames ac turpis egestas maecenas pharetra. Aliquet risus feugiat in ante metus dictum at tempor commodo. Massa vitae tortor condimentum lacinia quis vel eros. Quis lectus nulla at volutpat diam ut venenatis. Amet justo donec enim diam vulputate ut pharetra sit. "}},{"name":"accordion","document":[{"title":"Прикладная информатика","tags":["Очная","4 года"],"body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut. Et malesuada fames ac turpis egestas maecenas pharetra. Aliquet risus feugiat in ante metus dictum at tempor commodo. Massa vitae tortor condimentum lacinia quis vel eros. Quis lectus nulla at volutpat diam ut venenatis. Amet justo donec enim diam vulputate ut pharetra sit. "},{"title":"Математика","tags":["Очная","4 года"],"body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut. Et malesuada fames ac turpis egestas maecenas pharetra. Aliquet risus feugiat in ante metus dictum at tempor commodo. Massa vitae tortor condimentum lacinia quis vel eros. Quis lectus nulla at volutpat diam ut venenatis. Amet justo donec enim diam vulputate ut pharetra sit. "}]},{"name":"page-link","document":{"link":"https://ant.design/components/upload","text":"Записаться","isNewPage":false}}]');


--
-- Data for Name: slider; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.slider VALUES (1, 'test 1', 'test 1', 'https://cdn.bfm.ru/news/photopreviewextralarge/2019/12/06/banana.jpg', NULL, 3);
INSERT INTO public.slider VALUES (2, 'test 2', 'test 2', 'https://kor.ill.in.ua/m/1260x900/2441686.jpg', NULL, 1);
INSERT INTO public.slider VALUES (3, 'test 3', 'test 3', 'https://images.unian.net/photos/2019_12/thumb_files/1200_0_1575979061-6226.png', NULL, 2);


--
-- Name: admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_id_seq', 14, true);


--
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.event_id_seq', 1, true);


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_id_seq', 14, true);


--
-- Name: news_tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_tag_id_seq', 2, true);


--
-- Name: pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_id_seq', 1, true);


--
-- Name: slider_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.slider_id_seq', 3, true);


--
-- Name: access access_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.access
    ADD CONSTRAINT access_pkey PRIMARY KEY (id);


--
-- Name: admin admin_login_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_login_key UNIQUE (login);


--
-- Name: events event_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- Name: news news_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pk UNIQUE (id);


--
-- Name: pages pages_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_name_key UNIQUE (name);


--
-- Name: pages pages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_pkey PRIMARY KEY (id);


--
-- Name: slider slider_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slider
    ADD CONSTRAINT slider_pkey PRIMARY KEY (id);


--
-- Name: admin user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: access access_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.access
    ADD CONSTRAINT access_id_fkey FOREIGN KEY (id) REFERENCES public.admin(id);


--
-- PostgreSQL database dump complete
--

