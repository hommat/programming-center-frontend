import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { Video } from "../models";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircualProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import VideoCard from "../components/card/Video";

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(3)
  }
}));

const YoutubePage = () => {
  const classes = useStyles();
  const mounted = useRef<boolean>(true);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): VoidFunction => {
    axios
      .get<{ videos: Video[] }>("/api/youtube?videoCount=24")
      .then(res => {
        if (mounted.current) {
          setVideos(res.data.videos);
          setLoading(false);
        }
      })
      .catch(err => console.error(err));

    return () => (mounted.current = false);
  }, []);

  return (
    <Box component="main" textAlign="center">
      <Typography variant="h3" className={classes.title}>
        Latest videos
      </Typography>
      {loading && <Box component={CircualProgress} />}
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
    </Box>
  );
};

export default YoutubePage;
