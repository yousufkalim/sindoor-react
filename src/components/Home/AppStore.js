import React from "react";
import "../../css/Home/AppStore.css";
import Apple from "../../assets/Icons/Apple.svg";
import Google from "../../assets/Icons/Google.svg";

const AppStore = () => {
  return (
    <>
      <div className="AppStore_mainDiv" id="about">
        <div className="AppStore_center_div">
          <div className="AppStore_content">
            <p className="AppStore_p">
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry
            </p>
            <div className="downloads_app_div">
              <img src={Apple} alt="" className="AppStore_btn" />
              <img src={Google} alt="" className="Google_btn" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
