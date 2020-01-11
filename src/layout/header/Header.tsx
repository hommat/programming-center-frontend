import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

import Navigation from "./navigation/Navigation";

const Header = () => {
  return (
    <Box component={AppBar}>
      <Box component={Toolbar} p={0} display="flex">
        <Navigation />
      </Box>
    </Box>
  );
};

export default Header;
