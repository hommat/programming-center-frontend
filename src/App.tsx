import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./layout/header/Header";
import Grid from "./layout/grid/Grid";

import youtube from "./pages/youtube";
import github from "./pages/github";
import reddit from "./pages/reddit";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Grid>
        <Switch>
          <Route exact path="/youtube" component={youtube} />
          <Route exact path="/github" component={github} />
          <Route exact path="/reddit" component={reddit} />
          <Route path="/" component={github} />
        </Switch>
      </Grid>
    </BrowserRouter>
  );
};

export default App;
