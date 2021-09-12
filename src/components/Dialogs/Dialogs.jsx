import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

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

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  const dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ];
  
  const messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How does the training go?" },
    { id: 3, message: "What's news?" },
  ];

  const dialogsElements = dialogs.map((dialog) => (
    <DialogItems name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
