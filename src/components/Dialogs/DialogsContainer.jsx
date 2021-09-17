import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messagesPage;

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <Dialogs
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}
            messagesPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
