import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogItems = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItems;
