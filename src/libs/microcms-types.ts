import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

/* --- Main Service --- */
export type News = {
  title: string;
  body: string;
} & MicroCMSListContent;

export type Blog = {
  slug: string;
  team: Team;
  title: string;
  eyecatch: MicroCMSImage;
  tags: Tag[];
  body: string;
} & MicroCMSListContent;

export type Tag = {
  slug: string;
  name: string;
};

export type Team = {
  name: string;
  description: string;
  date: ("月曜日" | "火曜日" | "水曜日" | "木曜日" | "金曜日")[];
} & MicroCMSListContent;

/* --- Sub Service --- */
export type Magazine = {
  title: string;
  publishDate: string;
  cover: MicroCMSImage;
  url: string;
} & MicroCMSListContent;

export type About = {
  body: string;
} & MicroCMSListContent;
