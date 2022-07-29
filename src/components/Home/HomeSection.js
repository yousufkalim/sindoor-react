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
              Gérez vos événements<br/>par Sindoor
              </h2>
              <p className="manage_p">
              Depuis les Champs Elysées de Paris, basée sur la plus belle avenue du monde, Sindoor vous offre les plus belles facilités dans votre mariage et vos événements en tout genre, sur son application mobile gratuite. 
              </p>
              <div className="downloads_app_div">
                <img src={Apple} alt="" className="AppStore_btn" />
                <a href="https://play.google.com/store/apps/details?id=com.sindoor_rn" target="_blank"><img src={Google} alt="" className="Google_btn" /></a>
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
