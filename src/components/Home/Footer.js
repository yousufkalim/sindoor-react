import React from 'react';
import '../../css/Home/Footer.css';
import HeaderLogo from '../../assets/Icons/HeaderLogo.svg';
import Apple from '../../assets/Icons/Apple.svg';
import Google from '../../assets/Icons/Google.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="footer_center_Div">
          {/* content footer Div */}
          <div className="footer_content">
            <img src={HeaderLogo} alt="" className="sindoor_footer_Logo" />
            <p className="footer_p">
              Sindoor est disponible aussi bien en français qu’en anglais et <br /> tend à proposer
              plusieurs milliers de prestataires.
            </p>
            <div className="downloads_app_div">
              <a href="https://apps.apple.com/app/sindoor/id1624458201" target="_blank">
                <img src={Apple} alt="" className="footer_AppStore_btn" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sindoor_rn"
                target="_blank"
              >
                <img src={Google} alt="" className="footer_Google_btn" />
              </a>
            </div>
            <div className="downloads_app_div2">
              <Link to="/privacy" className="privacy_p">
                Politique de Confidentialité
              </Link>
              <Link to="/termsconditions" className="terms_p">
                Termes et Conditions
              </Link>
            </div>
          </div>
          {/* content footer Div */}
          <div className="foooter_sign_div">
            <span className="footer_year">© 2022 </span>
            <span className="footer_name">Sindoor, </span>
            <span className="footer_develop">Développé par </span>
            <a href="https://www.falconconsulting.fr" className="footer_company_name">
              Falcon Consulting.{' '}
            </a>
            <span className="footer_company_allRights">Tous les droits sont réservés.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
