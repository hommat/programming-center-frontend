import React from "react";

import { useFetchOnMount } from "../hooks";
import { Video } from "../models";

import Grid from "@material-ui/core/Grid";

import VideoCard from "../components/card/Video";
import Page from "../layout/page/Page";

const YoutubePage = () => {
  const [videos, loading] = useFetchOnMount<Video>(
    "/api/youtube?videoCount=50"
  );

  return (
    <Page title="Latest videos" loading={loading}>
      <Grid container spacing={5}>
        {videos.map(({ title, thumbnails, id, publishedAt, channelTitle }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <VideoCard
              title={title}
              image={thumbnails.high.url}
              href={`https://www.youtube.com/watch?v=${id}`}
              author={channelTitle}
              publishedAt={publishedAt}
            />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default YoutubePage;
