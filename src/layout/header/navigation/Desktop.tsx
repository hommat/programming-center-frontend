import React from "react";

import { links } from "./Navigation";

import DesktopLink from "../link/Desktop";

const DesktopNavigation = () => {
  return (
    <nav>
      {Object.keys(links).map(key => (
        <DesktopLink to={key} key={key}>
          {links[key]}
        </DesktopLink>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
