import React from "react";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import DialogItems from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItems
      avatar={dialog.avatar}
      name={dialog.name}
      id={dialog.id}
      key={dialog.id}
    />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let AddNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <AddMessageReduxForm onSubmit={AddNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageText"
          placeholder="Enter message"
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
