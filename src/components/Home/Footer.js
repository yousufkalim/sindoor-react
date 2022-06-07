import React from "react";
import "../../css/Home/Footer.css";
import HeaderLogo from "../../assets/Icons/HeaderLogo.svg";
import Apple from "../../assets/Icons/Apple.svg";
import Google from "../../assets/Icons/Google.svg";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="footer_center_Div">
          {/* content footer Div */}
          <div className="footer_content">
            <img src={HeaderLogo} alt="" className="sindoor_footer_Logo" />
            <p className="footer_p">
              Lorem Ipsum is simply dummy text of <br /> the printing and
              typesetting industry
            </p>
            <div className="downloads_app_div">
              <img src={Apple} alt="" className="footer_AppStore_btn" />
              <img src={Google} alt="" className="footer_Google_btn" />
            </div>
            <div className="downloads_app_div2">
              <span className="terms_p">Terms & Conditions</span>
              <span className="privacy_p">Privacy Policy</span>
            </div>
          </div>
          {/* content footer Div */}
          <div className="foooter_sign_div">
            <span className="footer_year">© 2022 </span>
            <span className="footer_name">Sindoor, </span>
            <span className="footer_develop">Developed by </span>
            <a
              href="https://www.falconconsulting.fr"
              className="footer_company_name"
            >
              Falcon Consulting.{" "}
            </a>
            <span className="footer_company_allRights">
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
