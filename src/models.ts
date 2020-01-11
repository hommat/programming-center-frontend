export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type Video = {
  id: string;
  title: string;
  publishedAt: string;
  channelTitle: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
};
