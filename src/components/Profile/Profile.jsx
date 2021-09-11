import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="pic"
        />
      </div>
      <div>
        {/* <img
  src="https://image.flaticon.com/icons/png/512/147/147144.png"
  alt="avatar"
/> */}
        avatar + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
