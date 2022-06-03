import React from "react";
import "../../css/Home/HomeSection.css";
import MobileImage from "../../assets/Image/MobileImage.svg";
import Apple from "../../assets/Icons/Apple.svg";
import Google from "../../assets/Icons/Google.svg";

const HomeSection = () => {
  return (
    <>
      <div className="homeSection">
        <div className="homeSection_center_div">
          <div className="homeSection_colmn1">
            <div className="homeSection_content_div">
              <h2 className="manage_Title">
                Manage Event and <br /> Ceremony Easy
              </h2>
              <p className="manage_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <div className="downloads_app_div">
                <img src={Apple} alt="" className="AppStore_btn" />
                <img src={Google} alt="" className="Google_btn" />
              </div>
            </div>
          </div>
          <div className="homeSection_colmn1">
            <div className="MobileImage_div">
              <img src={MobileImage} alt="" className="mobile_IMG" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
