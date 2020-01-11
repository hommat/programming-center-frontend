import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }
}));

const LayoutGrid: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs="auto" sm={1} />
      <Grid item xs={12} sm={10}>
        {children}
      </Grid>
      <Grid item xs="auto" sm={1} />
    </Grid>
  );
};

export default LayoutGrid;
