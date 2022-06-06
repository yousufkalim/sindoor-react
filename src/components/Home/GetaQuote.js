import React from "react";
import "../../css/Home/GetaQuote.css";
import GmailGIF from "../../assets/Image/GmailGIF.gif";
import Ellipse1 from "../../assets/Image/Ellipse1.svg";
import Ellipse2 from "../../assets/Image/Ellipse2.svg";
import GetForm from "./getForm";

const GetaQuote = () => {
  return (
    <>
      <div className="GetaQuote_main_div">
        <img src={Ellipse1} alt="" className="Ellipse1" />
        <div className="GetaQuote_center_Div">
          <div className="GetaQuote_colmn">
            <div className="GetaQuote_content">
              <h3 className="GetaQuote_title">Get a Quote</h3>
              <p className="GetaQuote_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
            <div className="GetaQuote_GIF_div">
              <img src={GmailGIF} alt="" className="GetaQuote_img" />
            </div>
          </div>
          <div className="GetaQuote_colmn">
            <GetForm />
          </div>
        </div>
        <img src={Ellipse2} alt="" className="Ellipse2" />
      </div>
    </>
  );
};

export default GetaQuote;
