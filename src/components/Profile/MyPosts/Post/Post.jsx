import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.item}>
      <img
        src="https://image.flaticon.com/icons/png/512/147/147144.png"
        alt="avatar"
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
