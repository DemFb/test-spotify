--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: playlist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.playlist (
    playlist_id integer NOT NULL,
    playlist_name character varying(50),
    playlist_description character varying(255),
    playlist_owner character varying(50),
    playlist_image bytea
);


ALTER TABLE public.playlist OWNER TO postgres;

--
-- Name: playlist_playlist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.playlist_playlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.playlist_playlist_id_seq OWNER TO postgres;

--
-- Name: playlist_playlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.playlist_playlist_id_seq OWNED BY public.playlist.playlist_id;


--
-- Name: playlist playlist_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.playlist ALTER COLUMN playlist_id SET DEFAULT nextval('public.playlist_playlist_id_seq'::regclass);


--
-- Data for Name: playlist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.playlist (playlist_id, playlist_name, playlist_description, playlist_owner, playlist_image) FROM stdin;
10	Playlist	Here is my playlist song for the technical test	fabala	\N
12	Playlistnumber 4	Here is my playlist song	fabala DEMBELE	\N
14	New song	song for my playlist	Fabala	\\x3a636c69656e747075626c696373706f742e6a7067
15	New song	song for my playlist	Fabala	\\x3a636c69656e7473706f742e6a7067
\.


--
-- Name: playlist_playlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.playlist_playlist_id_seq', 15, true);


--
-- Name: playlist playlist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.playlist
    ADD CONSTRAINT playlist_pkey PRIMARY KEY (playlist_id);


--
-- PostgreSQL database dump complete
--

