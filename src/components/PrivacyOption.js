import React, { useState } from 'react';

const PrivacyOption = (props) => {
  const [showIcons, setShowIcons] = useState(true);
  return (
    <>
      <div className="introHeading2">
        <div className="introQuandDiv">
          <h3 className="introHeadingH4">
            <span className="intro_num">{props.num}</span>
            {props.text} :
          </h3>
          {showIcons ? (
            <h1
              className="introShowIcon"
              onClick={() => {
                setShowIcons(!showIcons);
              }}
            >
              ▼
            </h1>
          ) : (
            <h1
              className="introShowIcon"
              onClick={() => {
                setShowIcons(!showIcons);
              }}
            >
              ▲
            </h1>
          )}
        </div>
        <ul className={showIcons ? 'quandUl' : 'quandUlActive'}>
          <li className="introLi">• Provide, operate, and maintain our website</li>
          <li className="introLi">• Improve, personalize, and expand our website</li>
          <li className="introLi">• Understand and analyze how you use our website</li>
          <li className="introLi">• Develop new products, services, features, and functionality</li>
          <li className="introLi">
            • Communicate with you, either directly or through one of our partners,
          </li>
          <li className="introLi">• including for customer service, </li>
          <li className="introLi">
            • to provide you with updates and other information relating to the website,
          </li>
          <li className="introLi">• and for marketing and promotional purposes</li>
          <li className="introLi">• Send you emails</li>
          <li className="introLi">• Find and prevent fraud</li>
        </ul>
      </div>
    </>
  );
};

export default PrivacyOption;
