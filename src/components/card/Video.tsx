import React from "react";
import moment from "moment";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core";

type Props = {
  title: string;
  image: string;
  publishedAt: string;
  author: string;
  href: string;
};

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none"
  },
  image: {
    width: "100%",
    height: "auto"
  }
}));

const VideoCard: React.FC<Props> = ({
  image,
  title,
  author,
  publishedAt,
  href
}) => {
  const classes = useStyles();

  return (
    <a href={href} className={classes.link}>
      <Box component={Card} height="100%" boxShadow={4}>
        <Box
          component={CardActionArea}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <CardHeader title={author} />
          <img src={image} alt={title} className={classes.image} />
          <CardContent>
            <Typography variant="body2">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {moment(publishedAt).fromNow()}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </a>
  );
};

export default VideoCard;
