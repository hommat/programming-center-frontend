import React from "react";

import { RedditPost } from "../../models";

import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core";

type Props = {
  posts: RedditPost[];
};

const isThumbnailImage = (thumbnail?: string) => {
  return thumbnail && thumbnail !== "self" && thumbnail !== "default";
};

const useStyles = makeStyles(theme => ({
  image: {
    borderSize: 1,
    borderStyle: "solid",
    borderColor: theme.palette.primary.dark,
    borderRadius: 8,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
}));

const RedditPosts: React.FC<Props> = ({ posts }) => {
  const classes = useStyles();
  if (posts.length === 0) return null;
  return (
    <Box component={Paper} mb={4}>
      <List>
        {posts.map(
          ({ name, title, score, thumbnail, author, url, redditurl }) => (
            <ListItem button component="a" href={redditurl} key={name}>
              <Box display="flex" width="100%">
                <Box display="flex" flexGrow={1}>
                  <ListItemIcon>
                    <PostScore score={score} />
                  </ListItemIcon>
                  <ListItemText primary={title} secondary={author} />
                </Box>
                {isThumbnailImage(thumbnail) && (
                  <Hidden smDown>
                    <Box
                      ml={2}
                      minWidth={140}
                      minHeight={90}
                      maxWidth={140}
                      maxHeight={90}
                      className={classes.image}
                      style={{ backgroundImage: `url(${thumbnail})` }}
                    />
                  </Hidden>
                )}
              </Box>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};

const PostScore: React.FC<{ score: number }> = ({ score }) => <>{score}</>;

export default RedditPosts;
