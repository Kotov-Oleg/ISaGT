--
-- PostgreSQL database dump
--

-- Dumped from database version 10.21
-- Dumped by pg_dump version 10.21

-- Started on 2023-08-30 15:49:30

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
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 3857 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 198 (class 1259 OID 17119)
-- Name: auditoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auditoria (
    id integer NOT NULL,
    auditorium_number character varying(255) NOT NULL,
    floor integer,
    building integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.auditoria OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 17117)
-- Name: auditoria_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auditoria_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auditoria_id_seq OWNER TO postgres;

--
-- TOC entry 3858 (class 0 OID 0)
-- Dependencies: 197
-- Name: auditoria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auditoria_id_seq OWNED BY public.auditoria.id;


--
-- TOC entry 196 (class 1259 OID 17112)
-- Name: buildings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.buildings (
    id integer NOT NULL,
    adress character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.buildings OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 17251)
-- Name: class_names; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.class_names (
    id integer NOT NULL,
    start_time date NOT NULL,
    end_time date NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.class_names OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 17132)
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 17130)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.courses_id_seq OWNER TO postgres;

--
-- TOC entry 3859 (class 0 OID 0)
-- Dependencies: 199
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- TOC entry 225 (class 1259 OID 17369)
-- Name: dep_specilaties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dep_specilaties (
    id integer NOT NULL,
    dep integer NOT NULL,
    spec integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.dep_specilaties OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 17367)
-- Name: dep_specilaties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dep_specilaties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dep_specilaties_id_seq OWNER TO postgres;

--
-- TOC entry 3860 (class 0 OID 0)
-- Dependencies: 224
-- Name: dep_specilaties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dep_specilaties_id_seq OWNED BY public.dep_specilaties.id;


--
-- TOC entry 223 (class 1259 OID 17351)
-- Name: dep_stuffs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dep_stuffs (
    id integer NOT NULL,
    dep integer NOT NULL,
    employee integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.dep_stuffs OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 17349)
-- Name: dep_stuffs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dep_stuffs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dep_stuffs_id_seq OWNER TO postgres;

--
-- TOC entry 3861 (class 0 OID 0)
-- Dependencies: 222
-- Name: dep_stuffs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dep_stuffs_id_seq OWNED BY public.dep_stuffs.id;


--
-- TOC entry 212 (class 1259 OID 17201)
-- Name: departments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departments (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    subject text NOT NULL,
    "headOfDep" integer NOT NULL,
    "headOfUMR" integer NOT NULL,
    "headOfUVR" integer NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    adress integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.departments OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 17199)
-- Name: departments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.departments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.departments_id_seq OWNER TO postgres;

--
-- TOC entry 3862 (class 0 OID 0)
-- Dependencies: 211
-- Name: departments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.departments_id_seq OWNED BY public.departments.id;


--
-- TOC entry 202 (class 1259 OID 17142)
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    text character varying(255) NOT NULL,
    cover_path character varying(255) NOT NULL,
    description text,
    event_date date NOT NULL,
    auditorium character varying(255),
    "limit" integer,
    creator integer,
    media_path character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.events OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 17140)
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO postgres;

--
-- TOC entry 3863 (class 0 OID 0)
-- Dependencies: 201
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- TOC entry 219 (class 1259 OID 17315)
-- Name: events_tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events_tags (
    id integer NOT NULL,
    event integer NOT NULL,
    tag integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.events_tags OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 17313)
-- Name: events_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_tags_id_seq OWNER TO postgres;

--
-- TOC entry 3864 (class 0 OID 0)
-- Dependencies: 218
-- Name: events_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.events_tags_id_seq OWNED BY public.events_tags.id;


--
-- TOC entry 217 (class 1259 OID 17258)
-- Name: groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groups (
    id integer NOT NULL,
    group_number character varying(255) NOT NULL,
    department integer NOT NULL,
    specialty integer NOT NULL,
    level character varying(255) NOT NULL,
    ed_year integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.groups OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 17256)
-- Name: groups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.groups_id_seq OWNER TO postgres;

--
-- TOC entry 3865 (class 0 OID 0)
-- Dependencies: 216
-- Name: groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.groups_id_seq OWNED BY public.groups.id;


--
-- TOC entry 230 (class 1259 OID 93378)
-- Name: login; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.login (
    id integer NOT NULL,
    surname character(25) NOT NULL,
    name character(25) NOT NULL,
    patronymic character(25) NOT NULL,
    role character varying NOT NULL,
    email character(40) NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public.login OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 95578)
-- Name: new_departments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.new_departments (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    logo character(255),
    id_head integer
);


ALTER TABLE public.new_departments OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 95576)
-- Name: new_departments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.new_departments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.new_departments_id_seq OWNER TO postgres;

--
-- TOC entry 3866 (class 0 OID 0)
-- Dependencies: 231
-- Name: new_departments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.new_departments_id_seq OWNED BY public.new_departments.id;


--
-- TOC entry 236 (class 1259 OID 95610)
-- Name: new_direction_of_training; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.new_direction_of_training (
    id integer NOT NULL,
    code character(30) NOT NULL,
    name character(255) NOT NULL,
    description character varying,
    form_learning character(30),
    duration character(30),
    telephone character(20),
    email character(50),
    id_head integer,
    id_department integer
);


ALTER TABLE public.new_direction_of_training OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 95608)
-- Name: new_direction_of_training_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.new_direction_of_training_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.new_direction_of_training_id_seq OWNER TO postgres;

--
-- TOC entry 3867 (class 0 OID 0)
-- Dependencies: 235
-- Name: new_direction_of_training_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.new_direction_of_training_id_seq OWNED BY public.new_direction_of_training.id;


--
-- TOC entry 238 (class 1259 OID 95631)
-- Name: new_professions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.new_professions (
    id integer NOT NULL,
    name character(70) NOT NULL,
    id_direction integer
);


ALTER TABLE public.new_professions OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 95629)
-- Name: new_professions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.new_professions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.new_professions_id_seq OWNER TO postgres;

--
-- TOC entry 3868 (class 0 OID 0)
-- Dependencies: 237
-- Name: new_professions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.new_professions_id_seq OWNED BY public.new_professions.id;


--
-- TOC entry 240 (class 1259 OID 95652)
-- Name: new_subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.new_subjects (
    id integer NOT NULL,
    name character(255),
    id_direction integer
);


ALTER TABLE public.new_subjects OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 95650)
-- Name: new_subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.new_subjects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.new_subjects_id_seq OWNER TO postgres;

--
-- TOC entry 3869 (class 0 OID 0)
-- Dependencies: 239
-- Name: new_subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.new_subjects_id_seq OWNED BY public.new_subjects.id;


--
-- TOC entry 234 (class 1259 OID 95589)
-- Name: new_teacher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.new_teacher (
    id integer NOT NULL,
    surname character(25) NOT NULL,
    name character(25) NOT NULL,
    patronymic character(25) NOT NULL,
    post character(255) NOT NULL,
    photo character(255),
    description character varying,
    id_department integer
);


ALTER TABLE public.new_teacher OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 95587)
-- Name: new_teacher_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.new_teacher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.new_teacher_id_seq OWNER TO postgres;

--
-- TOC entry 3870 (class 0 OID 0)
-- Dependencies: 233
-- Name: new_teacher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.new_teacher_id_seq OWNED BY public.new_teacher.id;


--
-- TOC entry 204 (class 1259 OID 17153)
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    text character varying(255) NOT NULL,
    cover_path character varying(255) NOT NULL,
    description text,
    media_path character varying(255)
);


ALTER TABLE public.news OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 17151)
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.news_id_seq OWNER TO postgres;

--
-- TOC entry 3871 (class 0 OID 0)
-- Dependencies: 203
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- TOC entry 221 (class 1259 OID 17333)
-- Name: news_tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_tags (
    id integer NOT NULL,
    news integer NOT NULL,
    tag integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.news_tags OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 17331)
-- Name: news_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.news_tags_id_seq OWNER TO postgres;

--
-- TOC entry 3872 (class 0 OID 0)
-- Dependencies: 220
-- Name: news_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_tags_id_seq OWNED BY public.news_tags.id;


--
-- TOC entry 214 (class 1259 OID 17232)
-- Name: scienceLabs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."scienceLabs" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    head integer NOT NULL,
    description text NOT NULL,
    adress integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."scienceLabs" OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 17230)
-- Name: scienceLabs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."scienceLabs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."scienceLabs_id_seq" OWNER TO postgres;

--
-- TOC entry 3873 (class 0 OID 0)
-- Dependencies: 213
-- Name: scienceLabs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."scienceLabs_id_seq" OWNED BY public."scienceLabs".id;


--
-- TOC entry 227 (class 1259 OID 17387)
-- Name: spec_courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.spec_courses (
    id integer NOT NULL,
    spec integer NOT NULL,
    course integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.spec_courses OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 17385)
-- Name: spec_courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.spec_courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spec_courses_id_seq OWNER TO postgres;

--
-- TOC entry 3874 (class 0 OID 0)
-- Dependencies: 226
-- Name: spec_courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.spec_courses_id_seq OWNED BY public.spec_courses.id;


--
-- TOC entry 210 (class 1259 OID 17190)
-- Name: specialties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.specialties (
    id integer NOT NULL,
    code integer NOT NULL,
    "mainTitle" character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    format character varying(255) NOT NULL,
    level character varying(255) NOT NULL,
    duration integer NOT NULL,
    lang character varying(255),
    description text,
    "profList" character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.specialties OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 17188)
-- Name: specialties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.specialties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.specialties_id_seq OWNER TO postgres;

--
-- TOC entry 3875 (class 0 OID 0)
-- Dependencies: 209
-- Name: specialties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.specialties_id_seq OWNED BY public.specialties.id;


--
-- TOC entry 208 (class 1259 OID 17179)
-- Name: stuff; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stuff (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    patronymic character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    "position" character varying(255) NOT NULL,
    qualification character varying(255) NOT NULL,
    "academicDegree" character varying(255),
    "academicTitle" character varying(255),
    "profExpirience" integer,
    email character varying(255),
    phone character varying(255),
    photo_path character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.stuff OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 17177)
-- Name: stuff_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stuff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stuff_id_seq OWNER TO postgres;

--
-- TOC entry 3876 (class 0 OID 0)
-- Dependencies: 207
-- Name: stuff_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stuff_id_seq OWNED BY public.stuff.id;


--
-- TOC entry 206 (class 1259 OID 17164)
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    tag character varying(255) NOT NULL,
    color character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 17162)
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO postgres;

--
-- TOC entry 3877 (class 0 OID 0)
-- Dependencies: 205
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- TOC entry 229 (class 1259 OID 17919)
-- Name: timetables; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.timetables (
    id integer NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    class_number integer NOT NULL,
    "group" integer NOT NULL,
    class_type character varying(255) NOT NULL,
    course integer NOT NULL,
    lecturer integer NOT NULL,
    auditorium integer NOT NULL,
    subgroup integer,
    week character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.timetables OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 17917)
-- Name: timetables_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.timetables_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.timetables_id_seq OWNER TO postgres;

--
-- TOC entry 3878 (class 0 OID 0)
-- Dependencies: 228
-- Name: timetables_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.timetables_id_seq OWNED BY public.timetables.id;


--
-- TOC entry 2815 (class 2604 OID 17122)
-- Name: auditoria id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auditoria ALTER COLUMN id SET DEFAULT nextval('public.auditoria_id_seq'::regclass);


--
-- TOC entry 2816 (class 2604 OID 17135)
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- TOC entry 2828 (class 2604 OID 17372)
-- Name: dep_specilaties id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dep_specilaties ALTER COLUMN id SET DEFAULT nextval('public.dep_specilaties_id_seq'::regclass);


--
-- TOC entry 2827 (class 2604 OID 17354)
-- Name: dep_stuffs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dep_stuffs ALTER COLUMN id SET DEFAULT nextval('public.dep_stuffs_id_seq'::regclass);


--
-- TOC entry 2822 (class 2604 OID 17204)
-- Name: departments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments ALTER COLUMN id SET DEFAULT nextval('public.departments_id_seq'::regclass);


--
-- TOC entry 2817 (class 2604 OID 17145)
-- Name: events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- TOC entry 2825 (class 2604 OID 17318)
-- Name: events_tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events_tags ALTER COLUMN id SET DEFAULT nextval('public.events_tags_id_seq'::regclass);


--
-- TOC entry 2824 (class 2604 OID 17261)
-- Name: groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups ALTER COLUMN id SET DEFAULT nextval('public.groups_id_seq'::regclass);


--
-- TOC entry 2831 (class 2604 OID 95581)
-- Name: new_departments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_departments ALTER COLUMN id SET DEFAULT nextval('public.new_departments_id_seq'::regclass);


--
-- TOC entry 2833 (class 2604 OID 95613)
-- Name: new_direction_of_training id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_direction_of_training ALTER COLUMN id SET DEFAULT nextval('public.new_direction_of_training_id_seq'::regclass);


--
-- TOC entry 2834 (class 2604 OID 95634)
-- Name: new_professions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_professions ALTER COLUMN id SET DEFAULT nextval('public.new_professions_id_seq'::regclass);


--
-- TOC entry 2835 (class 2604 OID 95655)
-- Name: new_subjects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_subjects ALTER COLUMN id SET DEFAULT nextval('public.new_subjects_id_seq'::regclass);


--
-- TOC entry 2832 (class 2604 OID 95592)
-- Name: new_teacher id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_teacher ALTER COLUMN id SET DEFAULT nextval('public.new_teacher_id_seq'::regclass);


--
-- TOC entry 2818 (class 2604 OID 17156)
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- TOC entry 2826 (class 2604 OID 17336)
-- Name: news_tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_tags ALTER COLUMN id SET DEFAULT nextval('public.news_tags_id_seq'::regclass);


--
-- TOC entry 2823 (class 2604 OID 17235)
-- Name: scienceLabs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."scienceLabs" ALTER COLUMN id SET DEFAULT nextval('public."scienceLabs_id_seq"'::regclass);


--
-- TOC entry 2829 (class 2604 OID 17390)
-- Name: spec_courses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spec_courses ALTER COLUMN id SET DEFAULT nextval('public.spec_courses_id_seq'::regclass);


--
-- TOC entry 2821 (class 2604 OID 17193)
-- Name: specialties id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialties ALTER COLUMN id SET DEFAULT nextval('public.specialties_id_seq'::regclass);


--
-- TOC entry 2820 (class 2604 OID 17182)
-- Name: stuff id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stuff ALTER COLUMN id SET DEFAULT nextval('public.stuff_id_seq'::regclass);


--
-- TOC entry 2819 (class 2604 OID 17167)
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- TOC entry 2830 (class 2604 OID 17922)
-- Name: timetables id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timetables ALTER COLUMN id SET DEFAULT nextval('public.timetables_id_seq'::regclass);


--
-- TOC entry 3807 (class 0 OID 17119)
-- Dependencies: 198
-- Data for Name: auditoria; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3805 (class 0 OID 17112)
-- Dependencies: 196
-- Data for Name: buildings; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3824 (class 0 OID 17251)
-- Dependencies: 215
-- Data for Name: class_names; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3809 (class 0 OID 17132)
-- Dependencies: 200
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3834 (class 0 OID 17369)
-- Dependencies: 225
-- Data for Name: dep_specilaties; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3832 (class 0 OID 17351)
-- Dependencies: 223
-- Data for Name: dep_stuffs; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3821 (class 0 OID 17201)
-- Dependencies: 212
-- Data for Name: departments; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3811 (class 0 OID 17142)
-- Dependencies: 202
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.events (id, title, text, cover_path, description, event_date, auditorium, "limit", creator, media_path, "createdAt", "updatedAt") VALUES (2, 'Название 2', 'Описание', 'Описание', 'Описание', '2022-09-02', '1000', 10, 1, 'медиа', '2022-09-01 00:00:00+03', '2022-09-01 00:00:00+03');
INSERT INTO public.events (id, title, text, cover_path, description, event_date, auditorium, "limit", creator, media_path, "createdAt", "updatedAt") VALUES (1, 'Название1', 'Описание
', 'Описание', 'Описание
', '2022-09-01', '1007', 10, 1, 'static/b7f3fd30-c3bf-4377-a36f-9a0414e8581c.jpg', '2022-09-01 00:00:00+03', '2022-09-01 00:00:00+03');


--
-- TOC entry 3828 (class 0 OID 17315)
-- Dependencies: 219
-- Data for Name: events_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3826 (class 0 OID 17258)
-- Dependencies: 217
-- Data for Name: groups; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3839 (class 0 OID 93378)
-- Dependencies: 230
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.login (id, surname, name, patronymic, role, email, password) VALUES (1, 'Котов                    ', 'Олег                     ', 'Михайлович               ', 'main admin', 'kotov                                   ', '12345');


--
-- TOC entry 3841 (class 0 OID 95578)
-- Dependencies: 232
-- Data for Name: new_departments; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3845 (class 0 OID 95610)
-- Dependencies: 236
-- Data for Name: new_direction_of_training; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3847 (class 0 OID 95631)
-- Dependencies: 238
-- Data for Name: new_professions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3849 (class 0 OID 95652)
-- Dependencies: 240
-- Data for Name: new_subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3843 (class 0 OID 95589)
-- Dependencies: 234
-- Data for Name: new_teacher; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3813 (class 0 OID 17153)
-- Dependencies: 204
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.news (id, title, text, cover_path, description, media_path) VALUES (1, 'Название1', 'Текст', 'Текст', 'Описание', 'медиа');
INSERT INTO public.news (id, title, text, cover_path, description, media_path) VALUES (2, 'Название 2', 'Текст', 'Текст', 'Описание', 'медиа');
INSERT INTO public.news (id, title, text, cover_path, description, media_path) VALUES (3, 'Название3', 'Текст', 'Текст', 'Описание', 'медиа');
INSERT INTO public.news (id, title, text, cover_path, description, media_path) VALUES (4, 'Название 4', 'текст', 'path', 'descr', 'path');
INSERT INTO public.news (id, title, text, cover_path, description, media_path) VALUES (5, 'wefwef', 'wefwef', 'wefwef', 'wefwe', 'wefwe');
INSERT INTO public.news (id, title, text, cover_path, description, media_path) VALUES (6, '4346', '34правр', '45е56', 'укррукр', 'куруое');
INSERT INTO public.news (id, title, text, cover_path, description, media_path) VALUES (7, '23к23', '3к23к', '3к23к', '23к23к', '3к23к');


--
-- TOC entry 3830 (class 0 OID 17333)
-- Dependencies: 221
-- Data for Name: news_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3823 (class 0 OID 17232)
-- Dependencies: 214
-- Data for Name: scienceLabs; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3836 (class 0 OID 17387)
-- Dependencies: 227
-- Data for Name: spec_courses; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3819 (class 0 OID 17190)
-- Dependencies: 210
-- Data for Name: specialties; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3817 (class 0 OID 17179)
-- Dependencies: 208
-- Data for Name: stuff; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3815 (class 0 OID 17164)
-- Dependencies: 206
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3838 (class 0 OID 17919)
-- Dependencies: 229
-- Data for Name: timetables; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3879 (class 0 OID 0)
-- Dependencies: 197
-- Name: auditoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auditoria_id_seq', 1, false);


--
-- TOC entry 3880 (class 0 OID 0)
-- Dependencies: 199
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 1, false);


--
-- TOC entry 3881 (class 0 OID 0)
-- Dependencies: 224
-- Name: dep_specilaties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dep_specilaties_id_seq', 1, false);


--
-- TOC entry 3882 (class 0 OID 0)
-- Dependencies: 222
-- Name: dep_stuffs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dep_stuffs_id_seq', 1, false);


--
-- TOC entry 3883 (class 0 OID 0)
-- Dependencies: 211
-- Name: departments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departments_id_seq', 1, false);


--
-- TOC entry 3884 (class 0 OID 0)
-- Dependencies: 201
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_id_seq', 1, false);


--
-- TOC entry 3885 (class 0 OID 0)
-- Dependencies: 218
-- Name: events_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_tags_id_seq', 1, false);


--
-- TOC entry 3886 (class 0 OID 0)
-- Dependencies: 216
-- Name: groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.groups_id_seq', 1, false);


--
-- TOC entry 3887 (class 0 OID 0)
-- Dependencies: 231
-- Name: new_departments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.new_departments_id_seq', 1, false);


--
-- TOC entry 3888 (class 0 OID 0)
-- Dependencies: 235
-- Name: new_direction_of_training_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.new_direction_of_training_id_seq', 1, false);


--
-- TOC entry 3889 (class 0 OID 0)
-- Dependencies: 237
-- Name: new_professions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.new_professions_id_seq', 1, false);


--
-- TOC entry 3890 (class 0 OID 0)
-- Dependencies: 239
-- Name: new_subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.new_subjects_id_seq', 1, false);


--
-- TOC entry 3891 (class 0 OID 0)
-- Dependencies: 233
-- Name: new_teacher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.new_teacher_id_seq', 1, false);


--
-- TOC entry 3892 (class 0 OID 0)
-- Dependencies: 203
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_id_seq', 7, true);


--
-- TOC entry 3893 (class 0 OID 0)
-- Dependencies: 220
-- Name: news_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_tags_id_seq', 1, false);


--
-- TOC entry 3894 (class 0 OID 0)
-- Dependencies: 213
-- Name: scienceLabs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."scienceLabs_id_seq"', 1, false);


--
-- TOC entry 3895 (class 0 OID 0)
-- Dependencies: 226
-- Name: spec_courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.spec_courses_id_seq', 1, false);


--
-- TOC entry 3896 (class 0 OID 0)
-- Dependencies: 209
-- Name: specialties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.specialties_id_seq', 1, false);


--
-- TOC entry 3897 (class 0 OID 0)
-- Dependencies: 207
-- Name: stuff_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stuff_id_seq', 1, false);


--
-- TOC entry 3898 (class 0 OID 0)
-- Dependencies: 205
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tags_id_seq', 1, false);


--
-- TOC entry 3899 (class 0 OID 0)
-- Dependencies: 228
-- Name: timetables_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.timetables_id_seq', 1, false);


--
-- TOC entry 2839 (class 2606 OID 17124)
-- Name: auditoria auditoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auditoria
    ADD CONSTRAINT auditoria_pkey PRIMARY KEY (id);


--
-- TOC entry 2837 (class 2606 OID 17116)
-- Name: buildings buildings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buildings
    ADD CONSTRAINT buildings_pkey PRIMARY KEY (id);


--
-- TOC entry 3627 (class 2606 OID 17255)
-- Name: class_names class_names_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.class_names
    ADD CONSTRAINT class_names_pkey PRIMARY KEY (id);


--
-- TOC entry 2841 (class 2606 OID 17137)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 2843 (class 2606 OID 95371)
-- Name: courses courses_title_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key UNIQUE (title);


--
-- TOC entry 2845 (class 2606 OID 95373)
-- Name: courses courses_title_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key1 UNIQUE (title);


--
-- TOC entry 2847 (class 2606 OID 95361)
-- Name: courses courses_title_key10; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key10 UNIQUE (title);


--
-- TOC entry 2849 (class 2606 OID 95271)
-- Name: courses courses_title_key100; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key100 UNIQUE (title);


--
-- TOC entry 2851 (class 2606 OID 95473)
-- Name: courses courses_title_key101; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key101 UNIQUE (title);


--
-- TOC entry 2853 (class 2606 OID 95269)
-- Name: courses courses_title_key102; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key102 UNIQUE (title);


--
-- TOC entry 2855 (class 2606 OID 95475)
-- Name: courses courses_title_key103; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key103 UNIQUE (title);


--
-- TOC entry 2857 (class 2606 OID 95267)
-- Name: courses courses_title_key104; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key104 UNIQUE (title);


--
-- TOC entry 2859 (class 2606 OID 95477)
-- Name: courses courses_title_key105; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key105 UNIQUE (title);


--
-- TOC entry 2861 (class 2606 OID 95265)
-- Name: courses courses_title_key106; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key106 UNIQUE (title);


--
-- TOC entry 2863 (class 2606 OID 95479)
-- Name: courses courses_title_key107; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key107 UNIQUE (title);


--
-- TOC entry 2865 (class 2606 OID 95263)
-- Name: courses courses_title_key108; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key108 UNIQUE (title);


--
-- TOC entry 2867 (class 2606 OID 95481)
-- Name: courses courses_title_key109; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key109 UNIQUE (title);


--
-- TOC entry 2869 (class 2606 OID 95383)
-- Name: courses courses_title_key11; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key11 UNIQUE (title);


--
-- TOC entry 2871 (class 2606 OID 95261)
-- Name: courses courses_title_key110; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key110 UNIQUE (title);


--
-- TOC entry 2873 (class 2606 OID 95483)
-- Name: courses courses_title_key111; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key111 UNIQUE (title);


--
-- TOC entry 2875 (class 2606 OID 95259)
-- Name: courses courses_title_key112; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key112 UNIQUE (title);


--
-- TOC entry 2877 (class 2606 OID 95485)
-- Name: courses courses_title_key113; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key113 UNIQUE (title);


--
-- TOC entry 2879 (class 2606 OID 95257)
-- Name: courses courses_title_key114; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key114 UNIQUE (title);


--
-- TOC entry 2881 (class 2606 OID 95487)
-- Name: courses courses_title_key115; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key115 UNIQUE (title);


--
-- TOC entry 2883 (class 2606 OID 95255)
-- Name: courses courses_title_key116; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key116 UNIQUE (title);


--
-- TOC entry 2885 (class 2606 OID 95489)
-- Name: courses courses_title_key117; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key117 UNIQUE (title);


--
-- TOC entry 2887 (class 2606 OID 95253)
-- Name: courses courses_title_key118; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key118 UNIQUE (title);


--
-- TOC entry 2889 (class 2606 OID 95491)
-- Name: courses courses_title_key119; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key119 UNIQUE (title);


--
-- TOC entry 2891 (class 2606 OID 95359)
-- Name: courses courses_title_key12; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key12 UNIQUE (title);


--
-- TOC entry 2893 (class 2606 OID 95251)
-- Name: courses courses_title_key120; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key120 UNIQUE (title);


--
-- TOC entry 2895 (class 2606 OID 95493)
-- Name: courses courses_title_key121; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key121 UNIQUE (title);


--
-- TOC entry 2897 (class 2606 OID 95249)
-- Name: courses courses_title_key122; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key122 UNIQUE (title);


--
-- TOC entry 2899 (class 2606 OID 95495)
-- Name: courses courses_title_key123; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key123 UNIQUE (title);


--
-- TOC entry 2901 (class 2606 OID 95247)
-- Name: courses courses_title_key124; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key124 UNIQUE (title);


--
-- TOC entry 2903 (class 2606 OID 95497)
-- Name: courses courses_title_key125; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key125 UNIQUE (title);


--
-- TOC entry 2905 (class 2606 OID 95245)
-- Name: courses courses_title_key126; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key126 UNIQUE (title);


--
-- TOC entry 2907 (class 2606 OID 95499)
-- Name: courses courses_title_key127; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key127 UNIQUE (title);


--
-- TOC entry 2909 (class 2606 OID 95243)
-- Name: courses courses_title_key128; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key128 UNIQUE (title);


--
-- TOC entry 2911 (class 2606 OID 95501)
-- Name: courses courses_title_key129; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key129 UNIQUE (title);


--
-- TOC entry 2913 (class 2606 OID 95385)
-- Name: courses courses_title_key13; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key13 UNIQUE (title);


--
-- TOC entry 2915 (class 2606 OID 95241)
-- Name: courses courses_title_key130; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key130 UNIQUE (title);


--
-- TOC entry 2917 (class 2606 OID 95503)
-- Name: courses courses_title_key131; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key131 UNIQUE (title);


--
-- TOC entry 2919 (class 2606 OID 95239)
-- Name: courses courses_title_key132; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key132 UNIQUE (title);


--
-- TOC entry 2921 (class 2606 OID 95357)
-- Name: courses courses_title_key14; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key14 UNIQUE (title);


--
-- TOC entry 2923 (class 2606 OID 95387)
-- Name: courses courses_title_key15; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key15 UNIQUE (title);


--
-- TOC entry 2925 (class 2606 OID 95355)
-- Name: courses courses_title_key16; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key16 UNIQUE (title);


--
-- TOC entry 2927 (class 2606 OID 95389)
-- Name: courses courses_title_key17; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key17 UNIQUE (title);


--
-- TOC entry 2929 (class 2606 OID 95353)
-- Name: courses courses_title_key18; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key18 UNIQUE (title);


--
-- TOC entry 2931 (class 2606 OID 95391)
-- Name: courses courses_title_key19; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key19 UNIQUE (title);


--
-- TOC entry 2933 (class 2606 OID 95369)
-- Name: courses courses_title_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key2 UNIQUE (title);


--
-- TOC entry 2935 (class 2606 OID 95351)
-- Name: courses courses_title_key20; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key20 UNIQUE (title);


--
-- TOC entry 2937 (class 2606 OID 95393)
-- Name: courses courses_title_key21; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key21 UNIQUE (title);


--
-- TOC entry 2939 (class 2606 OID 95349)
-- Name: courses courses_title_key22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key22 UNIQUE (title);


--
-- TOC entry 2941 (class 2606 OID 95395)
-- Name: courses courses_title_key23; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key23 UNIQUE (title);


--
-- TOC entry 2943 (class 2606 OID 95347)
-- Name: courses courses_title_key24; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key24 UNIQUE (title);


--
-- TOC entry 2945 (class 2606 OID 95397)
-- Name: courses courses_title_key25; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key25 UNIQUE (title);


--
-- TOC entry 2947 (class 2606 OID 95345)
-- Name: courses courses_title_key26; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key26 UNIQUE (title);


--
-- TOC entry 2949 (class 2606 OID 95399)
-- Name: courses courses_title_key27; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key27 UNIQUE (title);


--
-- TOC entry 2951 (class 2606 OID 95343)
-- Name: courses courses_title_key28; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key28 UNIQUE (title);


--
-- TOC entry 2953 (class 2606 OID 95401)
-- Name: courses courses_title_key29; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key29 UNIQUE (title);


--
-- TOC entry 2955 (class 2606 OID 95375)
-- Name: courses courses_title_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key3 UNIQUE (title);


--
-- TOC entry 2957 (class 2606 OID 95341)
-- Name: courses courses_title_key30; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key30 UNIQUE (title);


--
-- TOC entry 2959 (class 2606 OID 95403)
-- Name: courses courses_title_key31; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key31 UNIQUE (title);


--
-- TOC entry 2961 (class 2606 OID 95339)
-- Name: courses courses_title_key32; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key32 UNIQUE (title);


--
-- TOC entry 2963 (class 2606 OID 95405)
-- Name: courses courses_title_key33; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key33 UNIQUE (title);


--
-- TOC entry 2965 (class 2606 OID 95337)
-- Name: courses courses_title_key34; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key34 UNIQUE (title);


--
-- TOC entry 2967 (class 2606 OID 95407)
-- Name: courses courses_title_key35; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key35 UNIQUE (title);


--
-- TOC entry 2969 (class 2606 OID 95335)
-- Name: courses courses_title_key36; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key36 UNIQUE (title);


--
-- TOC entry 2971 (class 2606 OID 95409)
-- Name: courses courses_title_key37; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key37 UNIQUE (title);


--
-- TOC entry 2973 (class 2606 OID 95333)
-- Name: courses courses_title_key38; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key38 UNIQUE (title);


--
-- TOC entry 2975 (class 2606 OID 95411)
-- Name: courses courses_title_key39; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key39 UNIQUE (title);


--
-- TOC entry 2977 (class 2606 OID 95367)
-- Name: courses courses_title_key4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key4 UNIQUE (title);


--
-- TOC entry 2979 (class 2606 OID 95331)
-- Name: courses courses_title_key40; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key40 UNIQUE (title);


--
-- TOC entry 2981 (class 2606 OID 95413)
-- Name: courses courses_title_key41; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key41 UNIQUE (title);


--
-- TOC entry 2983 (class 2606 OID 95329)
-- Name: courses courses_title_key42; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key42 UNIQUE (title);


--
-- TOC entry 2985 (class 2606 OID 95415)
-- Name: courses courses_title_key43; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key43 UNIQUE (title);


--
-- TOC entry 2987 (class 2606 OID 95327)
-- Name: courses courses_title_key44; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key44 UNIQUE (title);


--
-- TOC entry 2989 (class 2606 OID 95417)
-- Name: courses courses_title_key45; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key45 UNIQUE (title);


--
-- TOC entry 2991 (class 2606 OID 95325)
-- Name: courses courses_title_key46; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key46 UNIQUE (title);


--
-- TOC entry 2993 (class 2606 OID 95419)
-- Name: courses courses_title_key47; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key47 UNIQUE (title);


--
-- TOC entry 2995 (class 2606 OID 95323)
-- Name: courses courses_title_key48; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key48 UNIQUE (title);


--
-- TOC entry 2997 (class 2606 OID 95421)
-- Name: courses courses_title_key49; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key49 UNIQUE (title);


--
-- TOC entry 2999 (class 2606 OID 95377)
-- Name: courses courses_title_key5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key5 UNIQUE (title);


--
-- TOC entry 3001 (class 2606 OID 95321)
-- Name: courses courses_title_key50; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key50 UNIQUE (title);


--
-- TOC entry 3003 (class 2606 OID 95423)
-- Name: courses courses_title_key51; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key51 UNIQUE (title);


--
-- TOC entry 3005 (class 2606 OID 95319)
-- Name: courses courses_title_key52; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key52 UNIQUE (title);


--
-- TOC entry 3007 (class 2606 OID 95425)
-- Name: courses courses_title_key53; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key53 UNIQUE (title);


--
-- TOC entry 3009 (class 2606 OID 95317)
-- Name: courses courses_title_key54; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key54 UNIQUE (title);


--
-- TOC entry 3011 (class 2606 OID 95427)
-- Name: courses courses_title_key55; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key55 UNIQUE (title);


--
-- TOC entry 3013 (class 2606 OID 95315)
-- Name: courses courses_title_key56; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key56 UNIQUE (title);


--
-- TOC entry 3015 (class 2606 OID 95429)
-- Name: courses courses_title_key57; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key57 UNIQUE (title);


--
-- TOC entry 3017 (class 2606 OID 95313)
-- Name: courses courses_title_key58; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key58 UNIQUE (title);


--
-- TOC entry 3019 (class 2606 OID 95431)
-- Name: courses courses_title_key59; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key59 UNIQUE (title);


--
-- TOC entry 3021 (class 2606 OID 95365)
-- Name: courses courses_title_key6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key6 UNIQUE (title);


--
-- TOC entry 3023 (class 2606 OID 95311)
-- Name: courses courses_title_key60; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key60 UNIQUE (title);


--
-- TOC entry 3025 (class 2606 OID 95433)
-- Name: courses courses_title_key61; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key61 UNIQUE (title);


--
-- TOC entry 3027 (class 2606 OID 95309)
-- Name: courses courses_title_key62; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key62 UNIQUE (title);


--
-- TOC entry 3029 (class 2606 OID 95435)
-- Name: courses courses_title_key63; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key63 UNIQUE (title);


--
-- TOC entry 3031 (class 2606 OID 95307)
-- Name: courses courses_title_key64; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key64 UNIQUE (title);


--
-- TOC entry 3033 (class 2606 OID 95437)
-- Name: courses courses_title_key65; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key65 UNIQUE (title);


--
-- TOC entry 3035 (class 2606 OID 95305)
-- Name: courses courses_title_key66; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key66 UNIQUE (title);


--
-- TOC entry 3037 (class 2606 OID 95439)
-- Name: courses courses_title_key67; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key67 UNIQUE (title);


--
-- TOC entry 3039 (class 2606 OID 95303)
-- Name: courses courses_title_key68; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key68 UNIQUE (title);


--
-- TOC entry 3041 (class 2606 OID 95441)
-- Name: courses courses_title_key69; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key69 UNIQUE (title);


--
-- TOC entry 3043 (class 2606 OID 95379)
-- Name: courses courses_title_key7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key7 UNIQUE (title);


--
-- TOC entry 3045 (class 2606 OID 95301)
-- Name: courses courses_title_key70; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key70 UNIQUE (title);


--
-- TOC entry 3047 (class 2606 OID 95443)
-- Name: courses courses_title_key71; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key71 UNIQUE (title);


--
-- TOC entry 3049 (class 2606 OID 95299)
-- Name: courses courses_title_key72; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key72 UNIQUE (title);


--
-- TOC entry 3051 (class 2606 OID 95445)
-- Name: courses courses_title_key73; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key73 UNIQUE (title);


--
-- TOC entry 3053 (class 2606 OID 95297)
-- Name: courses courses_title_key74; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key74 UNIQUE (title);


--
-- TOC entry 3055 (class 2606 OID 95447)
-- Name: courses courses_title_key75; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key75 UNIQUE (title);


--
-- TOC entry 3057 (class 2606 OID 95295)
-- Name: courses courses_title_key76; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key76 UNIQUE (title);


--
-- TOC entry 3059 (class 2606 OID 95449)
-- Name: courses courses_title_key77; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key77 UNIQUE (title);


--
-- TOC entry 3061 (class 2606 OID 95293)
-- Name: courses courses_title_key78; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key78 UNIQUE (title);


--
-- TOC entry 3063 (class 2606 OID 95451)
-- Name: courses courses_title_key79; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key79 UNIQUE (title);


--
-- TOC entry 3065 (class 2606 OID 95363)
-- Name: courses courses_title_key8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key8 UNIQUE (title);


--
-- TOC entry 3067 (class 2606 OID 95291)
-- Name: courses courses_title_key80; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key80 UNIQUE (title);


--
-- TOC entry 3069 (class 2606 OID 95453)
-- Name: courses courses_title_key81; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key81 UNIQUE (title);


--
-- TOC entry 3071 (class 2606 OID 95289)
-- Name: courses courses_title_key82; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key82 UNIQUE (title);


--
-- TOC entry 3073 (class 2606 OID 95455)
-- Name: courses courses_title_key83; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key83 UNIQUE (title);


--
-- TOC entry 3075 (class 2606 OID 95287)
-- Name: courses courses_title_key84; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key84 UNIQUE (title);


--
-- TOC entry 3077 (class 2606 OID 95457)
-- Name: courses courses_title_key85; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key85 UNIQUE (title);


--
-- TOC entry 3079 (class 2606 OID 95285)
-- Name: courses courses_title_key86; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key86 UNIQUE (title);


--
-- TOC entry 3081 (class 2606 OID 95459)
-- Name: courses courses_title_key87; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key87 UNIQUE (title);


--
-- TOC entry 3083 (class 2606 OID 95283)
-- Name: courses courses_title_key88; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key88 UNIQUE (title);


--
-- TOC entry 3085 (class 2606 OID 95461)
-- Name: courses courses_title_key89; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key89 UNIQUE (title);


--
-- TOC entry 3087 (class 2606 OID 95381)
-- Name: courses courses_title_key9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key9 UNIQUE (title);


--
-- TOC entry 3089 (class 2606 OID 95281)
-- Name: courses courses_title_key90; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key90 UNIQUE (title);


--
-- TOC entry 3091 (class 2606 OID 95463)
-- Name: courses courses_title_key91; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key91 UNIQUE (title);


--
-- TOC entry 3093 (class 2606 OID 95279)
-- Name: courses courses_title_key92; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key92 UNIQUE (title);


--
-- TOC entry 3095 (class 2606 OID 95465)
-- Name: courses courses_title_key93; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key93 UNIQUE (title);


--
-- TOC entry 3097 (class 2606 OID 95277)
-- Name: courses courses_title_key94; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key94 UNIQUE (title);


--
-- TOC entry 3099 (class 2606 OID 95467)
-- Name: courses courses_title_key95; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key95 UNIQUE (title);


--
-- TOC entry 3101 (class 2606 OID 95275)
-- Name: courses courses_title_key96; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key96 UNIQUE (title);


--
-- TOC entry 3103 (class 2606 OID 95469)
-- Name: courses courses_title_key97; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key97 UNIQUE (title);


--
-- TOC entry 3105 (class 2606 OID 95273)
-- Name: courses courses_title_key98; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key98 UNIQUE (title);


--
-- TOC entry 3107 (class 2606 OID 95471)
-- Name: courses courses_title_key99; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_title_key99 UNIQUE (title);


--
-- TOC entry 3637 (class 2606 OID 17374)
-- Name: dep_specilaties dep_specilaties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dep_specilaties
    ADD CONSTRAINT dep_specilaties_pkey PRIMARY KEY (id);


--
-- TOC entry 3635 (class 2606 OID 17356)
-- Name: dep_stuffs dep_stuffs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dep_stuffs
    ADD CONSTRAINT dep_stuffs_pkey PRIMARY KEY (id);


--
-- TOC entry 3623 (class 2606 OID 17209)
-- Name: departments departments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (id);


--
-- TOC entry 3109 (class 2606 OID 17150)
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- TOC entry 3631 (class 2606 OID 17320)
-- Name: events_tags events_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events_tags
    ADD CONSTRAINT events_tags_pkey PRIMARY KEY (id);


--
-- TOC entry 3629 (class 2606 OID 17266)
-- Name: groups groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id);


--
-- TOC entry 3643 (class 2606 OID 93385)
-- Name: login login_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY (id);


--
-- TOC entry 3645 (class 2606 OID 95586)
-- Name: new_departments new_departments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_departments
    ADD CONSTRAINT new_departments_pkey PRIMARY KEY (id);


--
-- TOC entry 3649 (class 2606 OID 95618)
-- Name: new_direction_of_training new_direction_of_training_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_direction_of_training
    ADD CONSTRAINT new_direction_of_training_pkey PRIMARY KEY (id);


--
-- TOC entry 3651 (class 2606 OID 95636)
-- Name: new_professions new_professions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_professions
    ADD CONSTRAINT new_professions_pkey PRIMARY KEY (id);


--
-- TOC entry 3653 (class 2606 OID 95657)
-- Name: new_subjects new_subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_subjects
    ADD CONSTRAINT new_subjects_pkey PRIMARY KEY (id);


--
-- TOC entry 3647 (class 2606 OID 95597)
-- Name: new_teacher new_teacher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_teacher
    ADD CONSTRAINT new_teacher_pkey PRIMARY KEY (id);


--
-- TOC entry 3111 (class 2606 OID 17161)
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- TOC entry 3633 (class 2606 OID 17338)
-- Name: news_tags news_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_tags
    ADD CONSTRAINT news_tags_pkey PRIMARY KEY (id);


--
-- TOC entry 3625 (class 2606 OID 17240)
-- Name: scienceLabs scienceLabs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."scienceLabs"
    ADD CONSTRAINT "scienceLabs_pkey" PRIMARY KEY (id);


--
-- TOC entry 3639 (class 2606 OID 17392)
-- Name: spec_courses spec_courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spec_courses
    ADD CONSTRAINT spec_courses_pkey PRIMARY KEY (id);


--
-- TOC entry 3621 (class 2606 OID 17198)
-- Name: specialties specialties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialties
    ADD CONSTRAINT specialties_pkey PRIMARY KEY (id);


--
-- TOC entry 3619 (class 2606 OID 17187)
-- Name: stuff stuff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stuff
    ADD CONSTRAINT stuff_pkey PRIMARY KEY (id);


--
-- TOC entry 3113 (class 2606 OID 92690)
-- Name: tags tags_color_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key UNIQUE (color);


--
-- TOC entry 3115 (class 2606 OID 92692)
-- Name: tags tags_color_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key1 UNIQUE (color);


--
-- TOC entry 3117 (class 2606 OID 92680)
-- Name: tags tags_color_key10; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key10 UNIQUE (color);


--
-- TOC entry 3119 (class 2606 OID 92594)
-- Name: tags tags_color_key100; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key100 UNIQUE (color);


--
-- TOC entry 3121 (class 2606 OID 92796)
-- Name: tags tags_color_key101; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key101 UNIQUE (color);


--
-- TOC entry 3123 (class 2606 OID 92592)
-- Name: tags tags_color_key102; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key102 UNIQUE (color);


--
-- TOC entry 3125 (class 2606 OID 92798)
-- Name: tags tags_color_key103; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key103 UNIQUE (color);


--
-- TOC entry 3127 (class 2606 OID 92590)
-- Name: tags tags_color_key104; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key104 UNIQUE (color);


--
-- TOC entry 3129 (class 2606 OID 92800)
-- Name: tags tags_color_key105; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key105 UNIQUE (color);


--
-- TOC entry 3131 (class 2606 OID 92588)
-- Name: tags tags_color_key106; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key106 UNIQUE (color);


--
-- TOC entry 3133 (class 2606 OID 92802)
-- Name: tags tags_color_key107; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key107 UNIQUE (color);


--
-- TOC entry 3135 (class 2606 OID 92586)
-- Name: tags tags_color_key108; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key108 UNIQUE (color);


--
-- TOC entry 3137 (class 2606 OID 92804)
-- Name: tags tags_color_key109; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key109 UNIQUE (color);


--
-- TOC entry 3139 (class 2606 OID 92702)
-- Name: tags tags_color_key11; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key11 UNIQUE (color);


--
-- TOC entry 3141 (class 2606 OID 92584)
-- Name: tags tags_color_key110; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key110 UNIQUE (color);


--
-- TOC entry 3143 (class 2606 OID 92806)
-- Name: tags tags_color_key111; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key111 UNIQUE (color);


--
-- TOC entry 3145 (class 2606 OID 92582)
-- Name: tags tags_color_key112; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key112 UNIQUE (color);


--
-- TOC entry 3147 (class 2606 OID 92808)
-- Name: tags tags_color_key113; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key113 UNIQUE (color);


--
-- TOC entry 3149 (class 2606 OID 92580)
-- Name: tags tags_color_key114; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key114 UNIQUE (color);


--
-- TOC entry 3151 (class 2606 OID 92810)
-- Name: tags tags_color_key115; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key115 UNIQUE (color);


--
-- TOC entry 3153 (class 2606 OID 92578)
-- Name: tags tags_color_key116; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key116 UNIQUE (color);


--
-- TOC entry 3155 (class 2606 OID 92812)
-- Name: tags tags_color_key117; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key117 UNIQUE (color);


--
-- TOC entry 3157 (class 2606 OID 92576)
-- Name: tags tags_color_key118; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key118 UNIQUE (color);


--
-- TOC entry 3159 (class 2606 OID 92814)
-- Name: tags tags_color_key119; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key119 UNIQUE (color);


--
-- TOC entry 3161 (class 2606 OID 92678)
-- Name: tags tags_color_key12; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key12 UNIQUE (color);


--
-- TOC entry 3163 (class 2606 OID 92574)
-- Name: tags tags_color_key120; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key120 UNIQUE (color);


--
-- TOC entry 3165 (class 2606 OID 92816)
-- Name: tags tags_color_key121; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key121 UNIQUE (color);


--
-- TOC entry 3167 (class 2606 OID 92572)
-- Name: tags tags_color_key122; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key122 UNIQUE (color);


--
-- TOC entry 3169 (class 2606 OID 92818)
-- Name: tags tags_color_key123; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key123 UNIQUE (color);


--
-- TOC entry 3171 (class 2606 OID 92570)
-- Name: tags tags_color_key124; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key124 UNIQUE (color);


--
-- TOC entry 3173 (class 2606 OID 92704)
-- Name: tags tags_color_key13; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key13 UNIQUE (color);


--
-- TOC entry 3175 (class 2606 OID 92676)
-- Name: tags tags_color_key14; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key14 UNIQUE (color);


--
-- TOC entry 3177 (class 2606 OID 92706)
-- Name: tags tags_color_key15; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key15 UNIQUE (color);


--
-- TOC entry 3179 (class 2606 OID 92674)
-- Name: tags tags_color_key16; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key16 UNIQUE (color);


--
-- TOC entry 3181 (class 2606 OID 92708)
-- Name: tags tags_color_key17; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key17 UNIQUE (color);


--
-- TOC entry 3183 (class 2606 OID 92672)
-- Name: tags tags_color_key18; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key18 UNIQUE (color);


--
-- TOC entry 3185 (class 2606 OID 92710)
-- Name: tags tags_color_key19; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key19 UNIQUE (color);


--
-- TOC entry 3187 (class 2606 OID 92688)
-- Name: tags tags_color_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key2 UNIQUE (color);


--
-- TOC entry 3189 (class 2606 OID 92670)
-- Name: tags tags_color_key20; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key20 UNIQUE (color);


--
-- TOC entry 3191 (class 2606 OID 92712)
-- Name: tags tags_color_key21; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key21 UNIQUE (color);


--
-- TOC entry 3193 (class 2606 OID 92668)
-- Name: tags tags_color_key22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key22 UNIQUE (color);


--
-- TOC entry 3195 (class 2606 OID 92714)
-- Name: tags tags_color_key23; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key23 UNIQUE (color);


--
-- TOC entry 3197 (class 2606 OID 92666)
-- Name: tags tags_color_key24; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key24 UNIQUE (color);


--
-- TOC entry 3199 (class 2606 OID 92716)
-- Name: tags tags_color_key25; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key25 UNIQUE (color);


--
-- TOC entry 3201 (class 2606 OID 92664)
-- Name: tags tags_color_key26; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key26 UNIQUE (color);


--
-- TOC entry 3203 (class 2606 OID 92718)
-- Name: tags tags_color_key27; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key27 UNIQUE (color);


--
-- TOC entry 3205 (class 2606 OID 92662)
-- Name: tags tags_color_key28; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key28 UNIQUE (color);


--
-- TOC entry 3207 (class 2606 OID 92720)
-- Name: tags tags_color_key29; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key29 UNIQUE (color);


--
-- TOC entry 3209 (class 2606 OID 92694)
-- Name: tags tags_color_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key3 UNIQUE (color);


--
-- TOC entry 3211 (class 2606 OID 92660)
-- Name: tags tags_color_key30; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key30 UNIQUE (color);


--
-- TOC entry 3213 (class 2606 OID 92722)
-- Name: tags tags_color_key31; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key31 UNIQUE (color);


--
-- TOC entry 3215 (class 2606 OID 92658)
-- Name: tags tags_color_key32; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key32 UNIQUE (color);


--
-- TOC entry 3217 (class 2606 OID 92724)
-- Name: tags tags_color_key33; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key33 UNIQUE (color);


--
-- TOC entry 3219 (class 2606 OID 92656)
-- Name: tags tags_color_key34; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key34 UNIQUE (color);


--
-- TOC entry 3221 (class 2606 OID 92726)
-- Name: tags tags_color_key35; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key35 UNIQUE (color);


--
-- TOC entry 3223 (class 2606 OID 92654)
-- Name: tags tags_color_key36; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key36 UNIQUE (color);


--
-- TOC entry 3225 (class 2606 OID 92728)
-- Name: tags tags_color_key37; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key37 UNIQUE (color);


--
-- TOC entry 3227 (class 2606 OID 92652)
-- Name: tags tags_color_key38; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key38 UNIQUE (color);


--
-- TOC entry 3229 (class 2606 OID 92730)
-- Name: tags tags_color_key39; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key39 UNIQUE (color);


--
-- TOC entry 3231 (class 2606 OID 92686)
-- Name: tags tags_color_key4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key4 UNIQUE (color);


--
-- TOC entry 3233 (class 2606 OID 92650)
-- Name: tags tags_color_key40; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key40 UNIQUE (color);


--
-- TOC entry 3235 (class 2606 OID 92732)
-- Name: tags tags_color_key41; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key41 UNIQUE (color);


--
-- TOC entry 3237 (class 2606 OID 92648)
-- Name: tags tags_color_key42; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key42 UNIQUE (color);


--
-- TOC entry 3239 (class 2606 OID 92734)
-- Name: tags tags_color_key43; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key43 UNIQUE (color);


--
-- TOC entry 3241 (class 2606 OID 92646)
-- Name: tags tags_color_key44; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key44 UNIQUE (color);


--
-- TOC entry 3243 (class 2606 OID 92736)
-- Name: tags tags_color_key45; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key45 UNIQUE (color);


--
-- TOC entry 3245 (class 2606 OID 92644)
-- Name: tags tags_color_key46; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key46 UNIQUE (color);


--
-- TOC entry 3247 (class 2606 OID 92738)
-- Name: tags tags_color_key47; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key47 UNIQUE (color);


--
-- TOC entry 3249 (class 2606 OID 92642)
-- Name: tags tags_color_key48; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key48 UNIQUE (color);


--
-- TOC entry 3251 (class 2606 OID 92740)
-- Name: tags tags_color_key49; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key49 UNIQUE (color);


--
-- TOC entry 3253 (class 2606 OID 92696)
-- Name: tags tags_color_key5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key5 UNIQUE (color);


--
-- TOC entry 3255 (class 2606 OID 92640)
-- Name: tags tags_color_key50; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key50 UNIQUE (color);


--
-- TOC entry 3257 (class 2606 OID 92742)
-- Name: tags tags_color_key51; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key51 UNIQUE (color);


--
-- TOC entry 3259 (class 2606 OID 92638)
-- Name: tags tags_color_key52; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key52 UNIQUE (color);


--
-- TOC entry 3261 (class 2606 OID 92744)
-- Name: tags tags_color_key53; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key53 UNIQUE (color);


--
-- TOC entry 3263 (class 2606 OID 92636)
-- Name: tags tags_color_key54; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key54 UNIQUE (color);


--
-- TOC entry 3265 (class 2606 OID 92746)
-- Name: tags tags_color_key55; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key55 UNIQUE (color);


--
-- TOC entry 3267 (class 2606 OID 92634)
-- Name: tags tags_color_key56; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key56 UNIQUE (color);


--
-- TOC entry 3269 (class 2606 OID 92748)
-- Name: tags tags_color_key57; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key57 UNIQUE (color);


--
-- TOC entry 3271 (class 2606 OID 92632)
-- Name: tags tags_color_key58; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key58 UNIQUE (color);


--
-- TOC entry 3273 (class 2606 OID 92750)
-- Name: tags tags_color_key59; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key59 UNIQUE (color);


--
-- TOC entry 3275 (class 2606 OID 92684)
-- Name: tags tags_color_key6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key6 UNIQUE (color);


--
-- TOC entry 3277 (class 2606 OID 92630)
-- Name: tags tags_color_key60; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key60 UNIQUE (color);


--
-- TOC entry 3279 (class 2606 OID 92752)
-- Name: tags tags_color_key61; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key61 UNIQUE (color);


--
-- TOC entry 3281 (class 2606 OID 92628)
-- Name: tags tags_color_key62; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key62 UNIQUE (color);


--
-- TOC entry 3283 (class 2606 OID 92754)
-- Name: tags tags_color_key63; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key63 UNIQUE (color);


--
-- TOC entry 3285 (class 2606 OID 92626)
-- Name: tags tags_color_key64; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key64 UNIQUE (color);


--
-- TOC entry 3287 (class 2606 OID 92756)
-- Name: tags tags_color_key65; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key65 UNIQUE (color);


--
-- TOC entry 3289 (class 2606 OID 92624)
-- Name: tags tags_color_key66; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key66 UNIQUE (color);


--
-- TOC entry 3291 (class 2606 OID 92760)
-- Name: tags tags_color_key67; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key67 UNIQUE (color);


--
-- TOC entry 3293 (class 2606 OID 92766)
-- Name: tags tags_color_key68; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key68 UNIQUE (color);


--
-- TOC entry 3295 (class 2606 OID 92762)
-- Name: tags tags_color_key69; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key69 UNIQUE (color);


--
-- TOC entry 3297 (class 2606 OID 92698)
-- Name: tags tags_color_key7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key7 UNIQUE (color);


--
-- TOC entry 3299 (class 2606 OID 92764)
-- Name: tags tags_color_key70; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key70 UNIQUE (color);


--
-- TOC entry 3301 (class 2606 OID 92758)
-- Name: tags tags_color_key71; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key71 UNIQUE (color);


--
-- TOC entry 3303 (class 2606 OID 92622)
-- Name: tags tags_color_key72; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key72 UNIQUE (color);


--
-- TOC entry 3305 (class 2606 OID 92768)
-- Name: tags tags_color_key73; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key73 UNIQUE (color);


--
-- TOC entry 3307 (class 2606 OID 92620)
-- Name: tags tags_color_key74; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key74 UNIQUE (color);


--
-- TOC entry 3309 (class 2606 OID 92770)
-- Name: tags tags_color_key75; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key75 UNIQUE (color);


--
-- TOC entry 3311 (class 2606 OID 92618)
-- Name: tags tags_color_key76; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key76 UNIQUE (color);


--
-- TOC entry 3313 (class 2606 OID 92772)
-- Name: tags tags_color_key77; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key77 UNIQUE (color);


--
-- TOC entry 3315 (class 2606 OID 92616)
-- Name: tags tags_color_key78; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key78 UNIQUE (color);


--
-- TOC entry 3317 (class 2606 OID 92774)
-- Name: tags tags_color_key79; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key79 UNIQUE (color);


--
-- TOC entry 3319 (class 2606 OID 92682)
-- Name: tags tags_color_key8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key8 UNIQUE (color);


--
-- TOC entry 3321 (class 2606 OID 92614)
-- Name: tags tags_color_key80; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key80 UNIQUE (color);


--
-- TOC entry 3323 (class 2606 OID 92776)
-- Name: tags tags_color_key81; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key81 UNIQUE (color);


--
-- TOC entry 3325 (class 2606 OID 92612)
-- Name: tags tags_color_key82; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key82 UNIQUE (color);


--
-- TOC entry 3327 (class 2606 OID 92778)
-- Name: tags tags_color_key83; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key83 UNIQUE (color);


--
-- TOC entry 3329 (class 2606 OID 92610)
-- Name: tags tags_color_key84; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key84 UNIQUE (color);


--
-- TOC entry 3331 (class 2606 OID 92780)
-- Name: tags tags_color_key85; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key85 UNIQUE (color);


--
-- TOC entry 3333 (class 2606 OID 92608)
-- Name: tags tags_color_key86; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key86 UNIQUE (color);


--
-- TOC entry 3335 (class 2606 OID 92782)
-- Name: tags tags_color_key87; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key87 UNIQUE (color);


--
-- TOC entry 3337 (class 2606 OID 92606)
-- Name: tags tags_color_key88; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key88 UNIQUE (color);


--
-- TOC entry 3339 (class 2606 OID 92784)
-- Name: tags tags_color_key89; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key89 UNIQUE (color);


--
-- TOC entry 3341 (class 2606 OID 92700)
-- Name: tags tags_color_key9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key9 UNIQUE (color);


--
-- TOC entry 3343 (class 2606 OID 92604)
-- Name: tags tags_color_key90; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key90 UNIQUE (color);


--
-- TOC entry 3345 (class 2606 OID 92786)
-- Name: tags tags_color_key91; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key91 UNIQUE (color);


--
-- TOC entry 3347 (class 2606 OID 92602)
-- Name: tags tags_color_key92; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key92 UNIQUE (color);


--
-- TOC entry 3349 (class 2606 OID 92788)
-- Name: tags tags_color_key93; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key93 UNIQUE (color);


--
-- TOC entry 3351 (class 2606 OID 92600)
-- Name: tags tags_color_key94; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key94 UNIQUE (color);


--
-- TOC entry 3353 (class 2606 OID 92790)
-- Name: tags tags_color_key95; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key95 UNIQUE (color);


--
-- TOC entry 3355 (class 2606 OID 92598)
-- Name: tags tags_color_key96; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key96 UNIQUE (color);


--
-- TOC entry 3357 (class 2606 OID 92792)
-- Name: tags tags_color_key97; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key97 UNIQUE (color);


--
-- TOC entry 3359 (class 2606 OID 92596)
-- Name: tags tags_color_key98; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key98 UNIQUE (color);


--
-- TOC entry 3361 (class 2606 OID 92794)
-- Name: tags tags_color_key99; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_color_key99 UNIQUE (color);


--
-- TOC entry 3363 (class 2606 OID 17172)
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- TOC entry 3365 (class 2606 OID 92440)
-- Name: tags tags_tag_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key UNIQUE (tag);


--
-- TOC entry 3367 (class 2606 OID 92442)
-- Name: tags tags_tag_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key1 UNIQUE (tag);


--
-- TOC entry 3369 (class 2606 OID 92430)
-- Name: tags tags_tag_key10; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key10 UNIQUE (tag);


--
-- TOC entry 3371 (class 2606 OID 92340)
-- Name: tags tags_tag_key100; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key100 UNIQUE (tag);


--
-- TOC entry 3373 (class 2606 OID 92542)
-- Name: tags tags_tag_key101; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key101 UNIQUE (tag);


--
-- TOC entry 3375 (class 2606 OID 92338)
-- Name: tags tags_tag_key102; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key102 UNIQUE (tag);


--
-- TOC entry 3377 (class 2606 OID 92544)
-- Name: tags tags_tag_key103; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key103 UNIQUE (tag);


--
-- TOC entry 3379 (class 2606 OID 92336)
-- Name: tags tags_tag_key104; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key104 UNIQUE (tag);


--
-- TOC entry 3381 (class 2606 OID 92546)
-- Name: tags tags_tag_key105; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key105 UNIQUE (tag);


--
-- TOC entry 3383 (class 2606 OID 92334)
-- Name: tags tags_tag_key106; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key106 UNIQUE (tag);


--
-- TOC entry 3385 (class 2606 OID 92548)
-- Name: tags tags_tag_key107; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key107 UNIQUE (tag);


--
-- TOC entry 3387 (class 2606 OID 92332)
-- Name: tags tags_tag_key108; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key108 UNIQUE (tag);


--
-- TOC entry 3389 (class 2606 OID 92550)
-- Name: tags tags_tag_key109; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key109 UNIQUE (tag);


--
-- TOC entry 3391 (class 2606 OID 92452)
-- Name: tags tags_tag_key11; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key11 UNIQUE (tag);


--
-- TOC entry 3393 (class 2606 OID 92330)
-- Name: tags tags_tag_key110; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key110 UNIQUE (tag);


--
-- TOC entry 3395 (class 2606 OID 92552)
-- Name: tags tags_tag_key111; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key111 UNIQUE (tag);


--
-- TOC entry 3397 (class 2606 OID 92328)
-- Name: tags tags_tag_key112; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key112 UNIQUE (tag);


--
-- TOC entry 3399 (class 2606 OID 92554)
-- Name: tags tags_tag_key113; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key113 UNIQUE (tag);


--
-- TOC entry 3401 (class 2606 OID 92326)
-- Name: tags tags_tag_key114; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key114 UNIQUE (tag);


--
-- TOC entry 3403 (class 2606 OID 92556)
-- Name: tags tags_tag_key115; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key115 UNIQUE (tag);


--
-- TOC entry 3405 (class 2606 OID 92324)
-- Name: tags tags_tag_key116; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key116 UNIQUE (tag);


--
-- TOC entry 3407 (class 2606 OID 92558)
-- Name: tags tags_tag_key117; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key117 UNIQUE (tag);


--
-- TOC entry 3409 (class 2606 OID 92322)
-- Name: tags tags_tag_key118; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key118 UNIQUE (tag);


--
-- TOC entry 3411 (class 2606 OID 92560)
-- Name: tags tags_tag_key119; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key119 UNIQUE (tag);


--
-- TOC entry 3413 (class 2606 OID 92428)
-- Name: tags tags_tag_key12; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key12 UNIQUE (tag);


--
-- TOC entry 3415 (class 2606 OID 92320)
-- Name: tags tags_tag_key120; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key120 UNIQUE (tag);


--
-- TOC entry 3417 (class 2606 OID 92562)
-- Name: tags tags_tag_key121; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key121 UNIQUE (tag);


--
-- TOC entry 3419 (class 2606 OID 92318)
-- Name: tags tags_tag_key122; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key122 UNIQUE (tag);


--
-- TOC entry 3421 (class 2606 OID 92564)
-- Name: tags tags_tag_key123; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key123 UNIQUE (tag);


--
-- TOC entry 3423 (class 2606 OID 92316)
-- Name: tags tags_tag_key124; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key124 UNIQUE (tag);


--
-- TOC entry 3425 (class 2606 OID 92566)
-- Name: tags tags_tag_key125; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key125 UNIQUE (tag);


--
-- TOC entry 3427 (class 2606 OID 92314)
-- Name: tags tags_tag_key126; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key126 UNIQUE (tag);


--
-- TOC entry 3429 (class 2606 OID 92454)
-- Name: tags tags_tag_key13; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key13 UNIQUE (tag);


--
-- TOC entry 3431 (class 2606 OID 92426)
-- Name: tags tags_tag_key14; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key14 UNIQUE (tag);


--
-- TOC entry 3433 (class 2606 OID 92456)
-- Name: tags tags_tag_key15; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key15 UNIQUE (tag);


--
-- TOC entry 3435 (class 2606 OID 92424)
-- Name: tags tags_tag_key16; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key16 UNIQUE (tag);


--
-- TOC entry 3437 (class 2606 OID 92458)
-- Name: tags tags_tag_key17; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key17 UNIQUE (tag);


--
-- TOC entry 3439 (class 2606 OID 92422)
-- Name: tags tags_tag_key18; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key18 UNIQUE (tag);


--
-- TOC entry 3441 (class 2606 OID 92460)
-- Name: tags tags_tag_key19; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key19 UNIQUE (tag);


--
-- TOC entry 3443 (class 2606 OID 92438)
-- Name: tags tags_tag_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key2 UNIQUE (tag);


--
-- TOC entry 3445 (class 2606 OID 92420)
-- Name: tags tags_tag_key20; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key20 UNIQUE (tag);


--
-- TOC entry 3447 (class 2606 OID 92462)
-- Name: tags tags_tag_key21; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key21 UNIQUE (tag);


--
-- TOC entry 3449 (class 2606 OID 92418)
-- Name: tags tags_tag_key22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key22 UNIQUE (tag);


--
-- TOC entry 3451 (class 2606 OID 92464)
-- Name: tags tags_tag_key23; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key23 UNIQUE (tag);


--
-- TOC entry 3453 (class 2606 OID 92416)
-- Name: tags tags_tag_key24; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key24 UNIQUE (tag);


--
-- TOC entry 3455 (class 2606 OID 92466)
-- Name: tags tags_tag_key25; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key25 UNIQUE (tag);


--
-- TOC entry 3457 (class 2606 OID 92414)
-- Name: tags tags_tag_key26; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key26 UNIQUE (tag);


--
-- TOC entry 3459 (class 2606 OID 92468)
-- Name: tags tags_tag_key27; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key27 UNIQUE (tag);


--
-- TOC entry 3461 (class 2606 OID 92412)
-- Name: tags tags_tag_key28; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key28 UNIQUE (tag);


--
-- TOC entry 3463 (class 2606 OID 92470)
-- Name: tags tags_tag_key29; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key29 UNIQUE (tag);


--
-- TOC entry 3465 (class 2606 OID 92444)
-- Name: tags tags_tag_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key3 UNIQUE (tag);


--
-- TOC entry 3467 (class 2606 OID 92410)
-- Name: tags tags_tag_key30; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key30 UNIQUE (tag);


--
-- TOC entry 3469 (class 2606 OID 92472)
-- Name: tags tags_tag_key31; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key31 UNIQUE (tag);


--
-- TOC entry 3471 (class 2606 OID 92408)
-- Name: tags tags_tag_key32; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key32 UNIQUE (tag);


--
-- TOC entry 3473 (class 2606 OID 92474)
-- Name: tags tags_tag_key33; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key33 UNIQUE (tag);


--
-- TOC entry 3475 (class 2606 OID 92406)
-- Name: tags tags_tag_key34; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key34 UNIQUE (tag);


--
-- TOC entry 3477 (class 2606 OID 92476)
-- Name: tags tags_tag_key35; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key35 UNIQUE (tag);


--
-- TOC entry 3479 (class 2606 OID 92404)
-- Name: tags tags_tag_key36; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key36 UNIQUE (tag);


--
-- TOC entry 3481 (class 2606 OID 92478)
-- Name: tags tags_tag_key37; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key37 UNIQUE (tag);


--
-- TOC entry 3483 (class 2606 OID 92402)
-- Name: tags tags_tag_key38; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key38 UNIQUE (tag);


--
-- TOC entry 3485 (class 2606 OID 92480)
-- Name: tags tags_tag_key39; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key39 UNIQUE (tag);


--
-- TOC entry 3487 (class 2606 OID 92436)
-- Name: tags tags_tag_key4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key4 UNIQUE (tag);


--
-- TOC entry 3489 (class 2606 OID 92400)
-- Name: tags tags_tag_key40; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key40 UNIQUE (tag);


--
-- TOC entry 3491 (class 2606 OID 92482)
-- Name: tags tags_tag_key41; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key41 UNIQUE (tag);


--
-- TOC entry 3493 (class 2606 OID 92398)
-- Name: tags tags_tag_key42; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key42 UNIQUE (tag);


--
-- TOC entry 3495 (class 2606 OID 92484)
-- Name: tags tags_tag_key43; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key43 UNIQUE (tag);


--
-- TOC entry 3497 (class 2606 OID 92396)
-- Name: tags tags_tag_key44; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key44 UNIQUE (tag);


--
-- TOC entry 3499 (class 2606 OID 92486)
-- Name: tags tags_tag_key45; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key45 UNIQUE (tag);


--
-- TOC entry 3501 (class 2606 OID 92394)
-- Name: tags tags_tag_key46; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key46 UNIQUE (tag);


--
-- TOC entry 3503 (class 2606 OID 92488)
-- Name: tags tags_tag_key47; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key47 UNIQUE (tag);


--
-- TOC entry 3505 (class 2606 OID 92392)
-- Name: tags tags_tag_key48; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key48 UNIQUE (tag);


--
-- TOC entry 3507 (class 2606 OID 92490)
-- Name: tags tags_tag_key49; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key49 UNIQUE (tag);


--
-- TOC entry 3509 (class 2606 OID 92446)
-- Name: tags tags_tag_key5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key5 UNIQUE (tag);


--
-- TOC entry 3511 (class 2606 OID 92390)
-- Name: tags tags_tag_key50; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key50 UNIQUE (tag);


--
-- TOC entry 3513 (class 2606 OID 92492)
-- Name: tags tags_tag_key51; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key51 UNIQUE (tag);


--
-- TOC entry 3515 (class 2606 OID 92388)
-- Name: tags tags_tag_key52; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key52 UNIQUE (tag);


--
-- TOC entry 3517 (class 2606 OID 92494)
-- Name: tags tags_tag_key53; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key53 UNIQUE (tag);


--
-- TOC entry 3519 (class 2606 OID 92386)
-- Name: tags tags_tag_key54; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key54 UNIQUE (tag);


--
-- TOC entry 3521 (class 2606 OID 92496)
-- Name: tags tags_tag_key55; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key55 UNIQUE (tag);


--
-- TOC entry 3523 (class 2606 OID 92384)
-- Name: tags tags_tag_key56; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key56 UNIQUE (tag);


--
-- TOC entry 3525 (class 2606 OID 92498)
-- Name: tags tags_tag_key57; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key57 UNIQUE (tag);


--
-- TOC entry 3527 (class 2606 OID 92382)
-- Name: tags tags_tag_key58; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key58 UNIQUE (tag);


--
-- TOC entry 3529 (class 2606 OID 92500)
-- Name: tags tags_tag_key59; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key59 UNIQUE (tag);


--
-- TOC entry 3531 (class 2606 OID 92434)
-- Name: tags tags_tag_key6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key6 UNIQUE (tag);


--
-- TOC entry 3533 (class 2606 OID 92380)
-- Name: tags tags_tag_key60; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key60 UNIQUE (tag);


--
-- TOC entry 3535 (class 2606 OID 92502)
-- Name: tags tags_tag_key61; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key61 UNIQUE (tag);


--
-- TOC entry 3537 (class 2606 OID 92378)
-- Name: tags tags_tag_key62; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key62 UNIQUE (tag);


--
-- TOC entry 3539 (class 2606 OID 92504)
-- Name: tags tags_tag_key63; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key63 UNIQUE (tag);


--
-- TOC entry 3541 (class 2606 OID 92376)
-- Name: tags tags_tag_key64; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key64 UNIQUE (tag);


--
-- TOC entry 3543 (class 2606 OID 92506)
-- Name: tags tags_tag_key65; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key65 UNIQUE (tag);


--
-- TOC entry 3545 (class 2606 OID 92374)
-- Name: tags tags_tag_key66; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key66 UNIQUE (tag);


--
-- TOC entry 3547 (class 2606 OID 92508)
-- Name: tags tags_tag_key67; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key67 UNIQUE (tag);


--
-- TOC entry 3549 (class 2606 OID 92372)
-- Name: tags tags_tag_key68; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key68 UNIQUE (tag);


--
-- TOC entry 3551 (class 2606 OID 92510)
-- Name: tags tags_tag_key69; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key69 UNIQUE (tag);


--
-- TOC entry 3553 (class 2606 OID 92448)
-- Name: tags tags_tag_key7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key7 UNIQUE (tag);


--
-- TOC entry 3555 (class 2606 OID 92370)
-- Name: tags tags_tag_key70; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key70 UNIQUE (tag);


--
-- TOC entry 3557 (class 2606 OID 92512)
-- Name: tags tags_tag_key71; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key71 UNIQUE (tag);


--
-- TOC entry 3559 (class 2606 OID 92368)
-- Name: tags tags_tag_key72; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key72 UNIQUE (tag);


--
-- TOC entry 3561 (class 2606 OID 92514)
-- Name: tags tags_tag_key73; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key73 UNIQUE (tag);


--
-- TOC entry 3563 (class 2606 OID 92366)
-- Name: tags tags_tag_key74; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key74 UNIQUE (tag);


--
-- TOC entry 3565 (class 2606 OID 92516)
-- Name: tags tags_tag_key75; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key75 UNIQUE (tag);


--
-- TOC entry 3567 (class 2606 OID 92364)
-- Name: tags tags_tag_key76; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key76 UNIQUE (tag);


--
-- TOC entry 3569 (class 2606 OID 92518)
-- Name: tags tags_tag_key77; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key77 UNIQUE (tag);


--
-- TOC entry 3571 (class 2606 OID 92362)
-- Name: tags tags_tag_key78; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key78 UNIQUE (tag);


--
-- TOC entry 3573 (class 2606 OID 92520)
-- Name: tags tags_tag_key79; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key79 UNIQUE (tag);


--
-- TOC entry 3575 (class 2606 OID 92432)
-- Name: tags tags_tag_key8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key8 UNIQUE (tag);


--
-- TOC entry 3577 (class 2606 OID 92360)
-- Name: tags tags_tag_key80; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key80 UNIQUE (tag);


--
-- TOC entry 3579 (class 2606 OID 92522)
-- Name: tags tags_tag_key81; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key81 UNIQUE (tag);


--
-- TOC entry 3581 (class 2606 OID 92358)
-- Name: tags tags_tag_key82; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key82 UNIQUE (tag);


--
-- TOC entry 3583 (class 2606 OID 92524)
-- Name: tags tags_tag_key83; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key83 UNIQUE (tag);


--
-- TOC entry 3585 (class 2606 OID 92356)
-- Name: tags tags_tag_key84; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key84 UNIQUE (tag);


--
-- TOC entry 3587 (class 2606 OID 92526)
-- Name: tags tags_tag_key85; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key85 UNIQUE (tag);


--
-- TOC entry 3589 (class 2606 OID 92354)
-- Name: tags tags_tag_key86; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key86 UNIQUE (tag);


--
-- TOC entry 3591 (class 2606 OID 92528)
-- Name: tags tags_tag_key87; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key87 UNIQUE (tag);


--
-- TOC entry 3593 (class 2606 OID 92352)
-- Name: tags tags_tag_key88; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key88 UNIQUE (tag);


--
-- TOC entry 3595 (class 2606 OID 92530)
-- Name: tags tags_tag_key89; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key89 UNIQUE (tag);


--
-- TOC entry 3597 (class 2606 OID 92450)
-- Name: tags tags_tag_key9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key9 UNIQUE (tag);


--
-- TOC entry 3599 (class 2606 OID 92350)
-- Name: tags tags_tag_key90; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key90 UNIQUE (tag);


--
-- TOC entry 3601 (class 2606 OID 92532)
-- Name: tags tags_tag_key91; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key91 UNIQUE (tag);


--
-- TOC entry 3603 (class 2606 OID 92348)
-- Name: tags tags_tag_key92; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key92 UNIQUE (tag);


--
-- TOC entry 3605 (class 2606 OID 92534)
-- Name: tags tags_tag_key93; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key93 UNIQUE (tag);


--
-- TOC entry 3607 (class 2606 OID 92346)
-- Name: tags tags_tag_key94; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key94 UNIQUE (tag);


--
-- TOC entry 3609 (class 2606 OID 92536)
-- Name: tags tags_tag_key95; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key95 UNIQUE (tag);


--
-- TOC entry 3611 (class 2606 OID 92344)
-- Name: tags tags_tag_key96; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key96 UNIQUE (tag);


--
-- TOC entry 3613 (class 2606 OID 92538)
-- Name: tags tags_tag_key97; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key97 UNIQUE (tag);


--
-- TOC entry 3615 (class 2606 OID 92342)
-- Name: tags tags_tag_key98; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key98 UNIQUE (tag);


--
-- TOC entry 3617 (class 2606 OID 92540)
-- Name: tags tags_tag_key99; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_tag_key99 UNIQUE (tag);


--
-- TOC entry 3641 (class 2606 OID 17927)
-- Name: timetables timetables_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timetables
    ADD CONSTRAINT timetables_pkey PRIMARY KEY (id);


--
-- TOC entry 3654 (class 2606 OID 95231)
-- Name: auditoria auditoria_building_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auditoria
    ADD CONSTRAINT auditoria_building_fkey FOREIGN KEY (building) REFERENCES public.buildings(id);


--
-- TOC entry 3670 (class 2606 OID 92022)
-- Name: dep_specilaties dep_specilaties_dep_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dep_specilaties
    ADD CONSTRAINT dep_specilaties_dep_fkey FOREIGN KEY (dep) REFERENCES public.departments(id);


--
-- TOC entry 3669 (class 2606 OID 92027)
-- Name: dep_specilaties dep_specilaties_spec_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dep_specilaties
    ADD CONSTRAINT dep_specilaties_spec_fkey FOREIGN KEY (spec) REFERENCES public.specialties(id);


--
-- TOC entry 3668 (class 2606 OID 92012)
-- Name: dep_stuffs dep_stuffs_dep_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dep_stuffs
    ADD CONSTRAINT dep_stuffs_dep_fkey FOREIGN KEY (dep) REFERENCES public.departments(id);


--
-- TOC entry 3667 (class 2606 OID 92017)
-- Name: dep_stuffs dep_stuffs_employee_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dep_stuffs
    ADD CONSTRAINT dep_stuffs_employee_fkey FOREIGN KEY (employee) REFERENCES public.stuff(id);


--
-- TOC entry 3655 (class 2606 OID 92834)
-- Name: departments departments_adress_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_adress_fkey FOREIGN KEY (adress) REFERENCES public.auditoria(id);


--
-- TOC entry 3658 (class 2606 OID 92819)
-- Name: departments departments_headOfDep_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT "departments_headOfDep_fkey" FOREIGN KEY ("headOfDep") REFERENCES public.stuff(id);


--
-- TOC entry 3657 (class 2606 OID 92824)
-- Name: departments departments_headOfUMR_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT "departments_headOfUMR_fkey" FOREIGN KEY ("headOfUMR") REFERENCES public.stuff(id);


--
-- TOC entry 3656 (class 2606 OID 92829)
-- Name: departments departments_headOfUVR_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT "departments_headOfUVR_fkey" FOREIGN KEY ("headOfUVR") REFERENCES public.stuff(id);


--
-- TOC entry 3664 (class 2606 OID 91992)
-- Name: events_tags events_tags_event_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events_tags
    ADD CONSTRAINT events_tags_event_fkey FOREIGN KEY (event) REFERENCES public.events(id);


--
-- TOC entry 3663 (class 2606 OID 91997)
-- Name: events_tags events_tags_tag_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events_tags
    ADD CONSTRAINT events_tags_tag_fkey FOREIGN KEY (tag) REFERENCES public.tags(id);


--
-- TOC entry 3662 (class 2606 OID 91957)
-- Name: groups groups_department_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_department_fkey FOREIGN KEY (department) REFERENCES public.departments(id);


--
-- TOC entry 3661 (class 2606 OID 91962)
-- Name: groups groups_specialty_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_specialty_fkey FOREIGN KEY (specialty) REFERENCES public.specialties(id);


--
-- TOC entry 3678 (class 2606 OID 95603)
-- Name: new_departments new_departments_id_head_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_departments
    ADD CONSTRAINT new_departments_id_head_fkey FOREIGN KEY (id_head) REFERENCES public.new_teacher(id) ON DELETE SET NULL;


--
-- TOC entry 3680 (class 2606 OID 95624)
-- Name: new_direction_of_training new_direction_of_training_id_department_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_direction_of_training
    ADD CONSTRAINT new_direction_of_training_id_department_fkey FOREIGN KEY (id_department) REFERENCES public.new_departments(id) ON DELETE SET NULL;


--
-- TOC entry 3681 (class 2606 OID 95619)
-- Name: new_direction_of_training new_direction_of_training_id_head_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_direction_of_training
    ADD CONSTRAINT new_direction_of_training_id_head_fkey FOREIGN KEY (id_head) REFERENCES public.new_teacher(id) ON DELETE SET NULL;


--
-- TOC entry 3682 (class 2606 OID 95637)
-- Name: new_professions new_professions_id_direction_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_professions
    ADD CONSTRAINT new_professions_id_direction_fkey FOREIGN KEY (id_direction) REFERENCES public.new_direction_of_training(id) ON DELETE SET NULL;


--
-- TOC entry 3683 (class 2606 OID 95658)
-- Name: new_subjects new_subjects_id_direction_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_subjects
    ADD CONSTRAINT new_subjects_id_direction_fkey FOREIGN KEY (id_direction) REFERENCES public.new_direction_of_training(id) ON DELETE SET NULL;


--
-- TOC entry 3679 (class 2606 OID 95598)
-- Name: new_teacher new_teacher_id_department_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.new_teacher
    ADD CONSTRAINT new_teacher_id_department_fkey FOREIGN KEY (id_department) REFERENCES public.new_departments(id) ON DELETE SET NULL;


--
-- TOC entry 3666 (class 2606 OID 92002)
-- Name: news_tags news_tags_news_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_tags
    ADD CONSTRAINT news_tags_news_fkey FOREIGN KEY (news) REFERENCES public.news(id);


--
-- TOC entry 3665 (class 2606 OID 92007)
-- Name: news_tags news_tags_tag_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_tags
    ADD CONSTRAINT news_tags_tag_fkey FOREIGN KEY (tag) REFERENCES public.tags(id);


--
-- TOC entry 3659 (class 2606 OID 92844)
-- Name: scienceLabs scienceLabs_adress_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."scienceLabs"
    ADD CONSTRAINT "scienceLabs_adress_fkey" FOREIGN KEY (adress) REFERENCES public.buildings(id);


--
-- TOC entry 3660 (class 2606 OID 92839)
-- Name: scienceLabs scienceLabs_head_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."scienceLabs"
    ADD CONSTRAINT "scienceLabs_head_fkey" FOREIGN KEY (head) REFERENCES public.stuff(id);


--
-- TOC entry 3671 (class 2606 OID 92037)
-- Name: spec_courses spec_courses_course_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spec_courses
    ADD CONSTRAINT spec_courses_course_fkey FOREIGN KEY (course) REFERENCES public.courses(id);


--
-- TOC entry 3672 (class 2606 OID 92032)
-- Name: spec_courses spec_courses_spec_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spec_courses
    ADD CONSTRAINT spec_courses_spec_fkey FOREIGN KEY (spec) REFERENCES public.specialties(id);


--
-- TOC entry 3673 (class 2606 OID 91987)
-- Name: timetables timetables_auditorium_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timetables
    ADD CONSTRAINT timetables_auditorium_fkey FOREIGN KEY (auditorium) REFERENCES public.auditoria(id);


--
-- TOC entry 3677 (class 2606 OID 91967)
-- Name: timetables timetables_class_number_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timetables
    ADD CONSTRAINT timetables_class_number_fkey FOREIGN KEY (class_number) REFERENCES public.class_names(id);


--
-- TOC entry 3675 (class 2606 OID 91977)
-- Name: timetables timetables_course_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timetables
    ADD CONSTRAINT timetables_course_fkey FOREIGN KEY (course) REFERENCES public.courses(id);


--
-- TOC entry 3676 (class 2606 OID 91972)
-- Name: timetables timetables_group_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timetables
    ADD CONSTRAINT timetables_group_fkey FOREIGN KEY ("group") REFERENCES public.groups(id);


--
-- TOC entry 3674 (class 2606 OID 91982)
-- Name: timetables timetables_lecturer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timetables
    ADD CONSTRAINT timetables_lecturer_fkey FOREIGN KEY (lecturer) REFERENCES public.stuff(id);


-- Completed on 2023-08-30 15:49:38

--
-- PostgreSQL database dump complete
--

