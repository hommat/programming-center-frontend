import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./layout/header/Header";
import Grid from "./layout/grid/Grid";

import home from "./pages/home";
import youtube from "./pages/youtube";
import github from "./pages/github";
import reddit from "./pages/reddit";
import not_found from "./pages/not-found";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Grid>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/youtube" component={youtube} />
          <Route exact path="/github" component={github} />
          <Route exact path="/reddit" component={reddit} />
          <Route path="/" component={not_found} />
        </Switch>
      </Grid>
    </BrowserRouter>
  );
};

export default App;
