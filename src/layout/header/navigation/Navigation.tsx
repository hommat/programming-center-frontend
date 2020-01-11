import React from "react";

import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

import DesktopNavigation from "./Desktop";
import MobileNavigation from "./Mobile";

export const links: { [route: string]: string } = {
  "/": "Home",
  "/youtube": "Youtube"
};

const Navigation = () => {
  return (
    <Box margin="auto">
      <Hidden xsDown>
        <DesktopNavigation />
      </Hidden>
      <Hidden smUp>
        <MobileNavigation />
      </Hidden>
    </Box>
  );
};

export default Navigation;
