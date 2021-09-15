import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";
import DialogItems from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElements = props.messagesPage.dialogs.map((dialog) => (
    <DialogItems avatar={dialog.avatar} name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.messagesPage.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    if (newMessageElement.current.value.trim())
      props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.messagesPage.newMessageText}
        />
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
