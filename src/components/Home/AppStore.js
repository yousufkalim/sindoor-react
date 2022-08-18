import React from 'react';
import '../../css/Home/AppStore.css';
import Apple from '../../assets/Icons/Apple.svg';
import Google from '../../assets/Icons/Google.svg';

const AppStore = () => {
  return (
    <>
      <div className="AppStore_mainDiv" id="about">
        <div className="AppStore_center_div">
          <div className="AppStore_content">
            <p className="AppStore_p">Téléchargez gratuitement Sindoor dès maintenant !</p>
            <div className="downloads_app_div">
              <a href="https://apps.apple.com/app/sindoor/id1624458201" target="_blank">
                <img src={Apple} alt="" className="AppStore_btn" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.sindoor_rn"
                target="_blank"
              >
                <img src={Google} alt="" className="Google_btn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
