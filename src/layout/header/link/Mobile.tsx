import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

type Props = {
  to: string;
  text: string;
};

const MobileLink: React.FC<Props> = ({ to, text, children }) => {
  return (
    <ListItem button component={Link} to={to}>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MobileLink;
