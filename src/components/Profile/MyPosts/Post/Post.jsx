import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://image.flaticon.com/icons/png/512/147/147144.png"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
