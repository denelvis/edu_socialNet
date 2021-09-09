import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="appWrapper">
      <header className="header">
        <img
          src="https://toppng.com/uploads/preview/free-logo-design-11551057495oqoep79juj.png"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <br />
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="pic"
        />
      </div>
      <div className="content">
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
        <div>
          My posts
          <div>
            New posts
          </div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
