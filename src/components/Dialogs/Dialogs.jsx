import React from "react";
import DialogItems from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItems avatar={dialog.avatar} name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    if (newMessageElement.current.value.trim()) props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
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
          placeholder="Enter message"
        />
        <div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
