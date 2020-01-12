import React from "react";

import { useFetchOnMount } from "../hooks";
import { Repo } from "../models";

import Grid from "@material-ui/core/Grid";

import Page from "../layout/page/Page";
import RepoCard from "../components/card/Repo";

const GithubPage = () => {
  const [repos, loading] = useFetchOnMount<Repo>("/api/github");

  return (
    <Page title="My repos" loading={loading}>
      <Grid container spacing={4}>
        {repos.map(({ id, ...rest }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <RepoCard {...rest} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default GithubPage;
