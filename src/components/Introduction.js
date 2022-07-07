import React from 'react';
import '../css/Privacy.css';
import PrivacyOption from './PrivacyOption';

const Introduction = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro-centerDiv">
          {/* -------------------------------- heading1 -------------------------------- */}
          {/* <div className="introHeading">
            <h2 className="introH2">Introduction</h2>
            <p className="introP">
              The personal information that you are asked to provide, and the reasons why you are
              asked to provide it, will be made clear to you at the point we ask you to provide your
              personal information.
            </p>
            <p className="introP">
              If you contact us directly, we may receive additional information about you such as
              your name, email address, phone number, the contents of the message and/or attachments
              you may send us, and any other information you may choose to provide.
            </p>
            <p className="introP">
              When you register for an Account, we may ask for your contact information, including
              items such as name, company name, address, email address, and telephone number.
            </p>
          </div> */}
          {/* -------------------------------- heading2 -------------------------------- */}
          <ol>
            <div className="introHeadingH3">
              We use the information we collect in various ways, including to:
            </div>
          </ol>
          <PrivacyOption num="1" text="Presentation of the website" />
          <PrivacyOption num="2" text="Description of the services provided" />
          <PrivacyOption num="3" text="Intellectual property and counterfeits" />
        </div>
      </div>
    </>
  );
};

export default Introduction;
