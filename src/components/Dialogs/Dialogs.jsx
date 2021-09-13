import React from "react";
import DialogItems from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const dialogsElements = props.dialogs.map((dialog) => (
    <DialogItems name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
