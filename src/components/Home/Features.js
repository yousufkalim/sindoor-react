import React from "react";
import "../../css/Home/Features.css";
import Calendar from "../../assets/Icons/Calendar.svg";
import Events from "../../assets/Icons/Events.svg";
import Bell from "../../assets/Icons/Bell.svg";

const Features = () => {
  return (
    <>
      <div className="Features_main_div" id="Features">
        <div className="Features_center_div">
          {/* Features_heading */}
          <div className="Features_heading">
            <h2 className="Features_title">Features</h2>
            <p className="Features_p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </div>
          {/* Features_heading */}
          {/* Features_colmn */}
          <div className="Features_3colmn_div">
            <div className="Features_colmn">
              <img src={Calendar} alt="" className="Features_clnder" />
              <h3 className="Features_tile_h3">Set a better Events date</h3>
              <p className="Features_colmn_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Features_colmn">
              <img src={Events} alt="" className="Features_clnder" />
              <h3 className="Features_tile_h3">Manage the events so easily</h3>
              <p className="Features_colmn_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Features_colmn">
              <img src={Bell} alt="" className="Features_clnder" />
              <h3 className="Features_tile_h3">Wouldn’t miss notifications</h3>
              <p className="Features_colmn_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          {/* Features_colmn */}
        </div>
      </div>
    </>
  );
};

export default Features;
