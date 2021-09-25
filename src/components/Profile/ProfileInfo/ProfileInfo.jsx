import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="pic"
        />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.small} alt="profilePhoto" />
        <span>{props.profile.lookingForAJobDescription}</span>
        <div>avatar + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
