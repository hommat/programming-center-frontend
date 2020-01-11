import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Link to="/">home</Link>
      <Link to="/youtube">youtube</Link>
    </div>
  );
};

export default Header;
