import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={`${classes.dialog} ${classes.active}`}>Dimych</div>
        <div className={classes.dialog}>Andrey</div>
        <div className={classes.dialog}>Sveta</div>
        <div className={classes.dialog}>Sasha</div>
        <div className={classes.dialog}>Victor</div>
        <div className={classes.dialog}>Valera</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hello</div>
        <div className={classes.message}>How does the training go?</div>
        <div className={classes.message}>What's news?</div>
      </div>
    </div>
  );
};

export default Dialogs;
