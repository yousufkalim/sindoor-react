import React from 'react';
import '../css/Privacy.css';
import AboutLogo from '../assets/Icons/AboutLogo.svg';

const Privacy = () => {
  return (
    <>
      <div className="about_main">
        <div className="about_second">
          <div className="about_heading">
            <div className="about_h1_div">
              <img src={AboutLogo} alt="" className="about_img_logo" />
              <h1 className="about_title">Privacy Policy</h1>
            </div>
            <h3>Definitions</h3>
            <p className="about_P">
              At sindoor, accessible from sindoor.com, one of our main priorities is the privacy of
              our visitors. This Privacy Policy document contains types of information that is
              collected and recorded by sindoor and how we use it.
            </p>
            <p className="about_P">
              If you have additional questions or require more information about our Privacy Policy,
              do not hesitate to contact us.
            </p>
            <p className="about_P">
              This Privacy Policy applies only to our online activities and is valid for visitors to
              our website with regards to the information that they shared and/or collect in
              sindoor. This policy is not applicable to any information collected offline or via
              channels other than this website. Our Privacy Policy was created with the help of the
              TermsFeed Privacy Policy .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
