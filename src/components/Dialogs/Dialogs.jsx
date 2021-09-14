import React from "react";
import DialogItems from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItems avatar={dialog.avatar} name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <textarea ref={newMessageElement} />
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
