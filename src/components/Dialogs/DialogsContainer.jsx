import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: (text) =>
      dispatch(updateNewMessageTextActionCreator(text)),
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
