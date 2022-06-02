// Init
import React from "react";
import "../css/Home/Header.css";
import HeaderLogo from "../assets/Icons/HeaderLogo.svg";

// Component
export default function Header() {
  return (
    <>
      <div className="sindoor_header">
        <div className="sindoor_second_div">
          {/* colm first Div */}
          <div className="sindoor_Logo_div">
            <img src={HeaderLogo} alt="" className="sindoor_Logo" />
          </div>
          {/* colm first Div */}
          {/* colm second Div */}
          <div className="sindoor_header_menu">
            <ul className="sindoor_ul">
              <li className="sindoor_li">
                <a className="sindoor_ankerMeu sindoorActive" href="">
                  About
                </a>
                <a className="sindoor_ankerMeu" href="">
                  Features
                </a>
                <a className="sindoor_ankerMeu" href="">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          {/* colm second Div */}
          {/* colm third Div */}
          <div className="sindoor_downloadApp_div">
            <button className="downloadApp_btn">Download App</button>
          </div>
          {/* colm third Div */}
        </div>
      </div>
    </>
  );
}
