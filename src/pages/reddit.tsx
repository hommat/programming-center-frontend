import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

import { RedditPost } from "../models";

import CircualProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import InfiniteScroll from "react-infinite-scroll-component";

import Page from "../layout/page/Page";
import SelectableChipList from "../components/chip/SelectableList";
import RedditPostsList from "../components/list/RedditPosts";

const postsPerPage: number = 20;
const subReddits: string[] = ["reactjs", "frontend", "webdev"];

const RedditPage = () => {
  const mounted = useRef<boolean>(true);
  const lastPostName = useRef<string | undefined>(undefined);
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [sub, setSub] = useState<string>("reactjs");

  const getPosts = useCallback(async () => {
    let endPoint = `/api/reddit?sub=${sub}&limit=${postsPerPage}`;
    if (lastPostName.current) endPoint += `&after=${lastPostName.current}`;

    try {
      const res = await axios.get<RedditPost[]>(endPoint);
      if (mounted.current) setPosts(prevPosts => [...prevPosts, ...res.data]);
      lastPostName.current = res.data[res.data.length - 1].name;
    } catch (err) {
      console.log(err);
    }
  }, [sub, mounted, lastPostName]);

  useEffect((): VoidFunction => () => (mounted.current = false), []);

  useEffect(() => {
    lastPostName.current = undefined;
    setPosts([]);
    getPosts();
  }, [sub, getPosts]);

  return (
    <Page title={`r/${sub}`}>
      <Box mb={4}>
        <SelectableChipList
          options={subReddits}
          selected={sub}
          onSelect={selected => setSub(selected)}
        />
      </Box>

      <InfiniteScroll
        dataLength={posts.length}
        next={getPosts}
        hasMore={true}
        style={{ overflow: "hidden" }}
        loader={<Box component={CircualProgress} />}
      >
        <RedditPostsList posts={posts} />
      </InfiniteScroll>
    </Page>
  );
};

export default RedditPage;
