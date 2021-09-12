import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItems = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItems name="Dimych" id="1" />
        <DialogItems name="Andrey" id="2" />
        <DialogItems name="Sveta" id="3" />
        <DialogItems name="Sasha" id="4" />
        <DialogItems name="Victor" id="5" />
        <DialogItems name="Valera" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How does the training go?" />
        <Message message="What's news?" />
      </div>
    </div>
  );
};

export default Dialogs;
