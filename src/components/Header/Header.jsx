import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://toppng.com/uploads/preview/free-logo-design-11551057495oqoep79juj.png"
        alt="logo"
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
