import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      messagesPage={state}
    />
  );
};

export default DialogsContainer;
