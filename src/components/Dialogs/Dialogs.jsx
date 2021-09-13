import React from "react";
import DialogItems from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // const dialogs = [
  //   { id: 1, name: "Dimych" },
  //   { id: 2, name: "Andrey" },
  //   { id: 3, name: "Sveta" },
  //   { id: 4, name: "Sasha" },
  //   { id: 5, name: "Victor" },
  //   { id: 6, name: "Valera" },
  // ];
  
  // const messages = [
  //   { id: 1, message: "Hi" },
  //   { id: 2, message: "How does the training go?" },
  //   { id: 3, message: "What's news?" },
  // ];

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
