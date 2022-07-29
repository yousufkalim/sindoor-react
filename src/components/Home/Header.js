// Init
import React from "react";
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
                <a className="sindoor_ankerMeu sindoorActive" href="#about">
                À propos de

                </a>
                <a className="sindoor_ankerMeu" href="#Features">
                Fonctionnalités
                </a>
                <a className="sindoor_ankerMeu" href="#getForm">
                Contactez-nous
                </a>
              </li>
            </ul>
          </div>
          {/* colm second Div */}
          {/* colm third Div */}
          <div className="sindoor_downloadApp_div">
            <a href="https://play.google.com/store/apps/details?id=com.sindoor_rn" target="_blank"><button className="downloadApp_btn">Télécharger l'application</button></a>
          </div>
          {/* colm third Div */}
        </div>
      </div>
    </>
  );
}
