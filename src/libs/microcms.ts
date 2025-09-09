import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import type { About, Magazine, Blog, News, Tag, Team } from "./microcms-types";

const mainClient = createClient({
  serviceDomain: import.meta.env.MICROCMS_MAIN_SERVICE,
  apiKey: import.meta.env.MICROCMS_MAIN_APIKEY,
});

const subClient = createClient({
  serviceDomain: import.meta.env.MICROCMS_SUB_SERVICE,
  apiKey: import.meta.env.MICROCMS_SUB_APIKEY,
});

/* --- News --- */
export const getNews = async (queries?: MicroCMSQueries) =>
  await mainClient.getList<News>({ endpoint: "news", queries });

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) =>
  await mainClient.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });

/* --- Blog --- */
export const getBlog = async (queries?: MicroCMSQueries) =>
  await mainClient.getList<Blog>({ endpoint: "blogs", queries });

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) =>
  await mainClient.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

/* --- Tag --- */
export const getTag = async (queries?: MicroCMSQueries) =>
  await mainClient.getList<Tag>({ endpoint: "tags", queries });

export const getTagDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) =>
  await mainClient.getListDetail<Tag>({
    endpoint: "tags",
    contentId,
    queries,
  });

/* --- Team --- */
export const getTeam = async (queries?: MicroCMSQueries) =>
  await mainClient.getList<Team>({ endpoint: "teams", queries });

export const getTeamDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) =>
  await mainClient.getListDetail<Team>({
    endpoint: "teams",
    contentId,
    queries,
  });

/* --- Magazine --- */
export const getMagazine = async (queries?: MicroCMSQueries) =>
  await subClient.getList<Magazine>({ endpoint: "magazines", queries });

export const getMagazineDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) =>
  await subClient.getListDetail<Magazine>({
    endpoint: "magazines",
    contentId,
    queries,
  });

/* --- About --- */
export const getAbout = async (queries?: MicroCMSQueries) =>
  await subClient.get<About>({ endpoint: "about", queries });
