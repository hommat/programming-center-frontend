import React from "react";

import { makeStyles } from "@material-ui/core";

type Props = {
  className?: string;
  alt?: string;
  src?: string;
};

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "auto"
  }
}));

const ResponsiveImage: React.FC<Props> = ({
  className = "",
  alt = "",
  src = ""
}) => {
  const classes = useStyles();

  return <img className={`${classes.root} ${className}`} alt={alt} src={src} />;
};

export default ResponsiveImage;
