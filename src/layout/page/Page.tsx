import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircualProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

type Props = {
  title: string;
  loading?: boolean;
};

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(3)
  }
}));

const Page: React.FC<Props> = ({ title, loading = false, children }) => {
  const classes = useStyles();

  return (
    <Box component="main" textAlign="center">
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      {loading && <Box component={CircualProgress} />}
      {children}
    </Box>
  );
};

export default Page;
