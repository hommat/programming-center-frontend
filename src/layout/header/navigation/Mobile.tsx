import React, { useState } from "react";

import { links } from "./Navigation";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";

import MenuIcon from "@material-ui/icons/Menu";

import MobileLink from "../link/Mobile";

const MobileNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <nav>
      <IconButton onClick={openDrawer} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        <Box component={List} onClick={closeDrawer} width={250}>
          {Object.keys(links).map(key => (
            <MobileLink to={key} text={links[key]} key={key} />
          ))}
        </Box>
      </SwipeableDrawer>
    </nav>
  );
};

export default MobileNavigation;
