// Init
import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/Icons/HeaderLogo.svg";

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
                <Link to="/" className="sindoor_ankerMeu sindoorActive" >
                  About
                </Link>
                <Link to="/" className="sindoor_ankerMeu">
                  Features
                </Link>
                <Link to="/" className="sindoor_ankerMeu">
                  Contact us
                </Link>
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
