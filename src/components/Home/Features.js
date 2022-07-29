import React from "react";
import "../../css/Home/Features.css";
import Invitation from "../../assets/Icons/Invitation.svg";
import Events from "../../assets/Icons/Events.svg";
import Bell from "../../assets/Icons/Bell.svg";

const Features = () => {
  return (
    <>
      <div className="Features_main_div" id="Features">
        <div className="Features_center_div">
          {/* Features_heading */}
          <div className="Features_heading">
            <h2 className="Features_title">Fonctionnalités</h2>
            <p className="Features_p">
            Quelles que soient votre type d’événement et vos envies, Sindoor facilite la recherche de prestataires talentueux et l’organisation de vos événements.
           </p>
          </div>
          {/* Features_heading */}
          {/* Features_colmn */}
          <div className="Features_3colmn_div">
            <div className="Features_colmn">
              <img src={Invitation} alt="" className="Features_clnder" />
              <h3 className="Features_tile_h3">Invitez n'importe qui à votre événement</h3>
              <p className="Features_colmn_p">
                Invitez vos amis et invités à l'événement via vos applications de médias sociaux
               </p>
            </div>
            <div className="Features_colmn">
              <img src={Events} alt="" className="Features_clnder" />
              <h3 className="Features_tile_h3">Gérez les événements si facilement</h3>
              <p className="Features_colmn_p">
              Vous recherchez des prestataires pour votre mariage, anniversaire ou événement professionnel ? Fini le stress du mariage et de vos événements !
               </p>
            </div>
            <div className="Features_colmn">
              <img src={Bell} alt="" className="Features_clnder" />
              <h3 className="Features_tile_h3">Ne manquez pas les notifications</h3>
              <p className="Features_colmn_p">
              Avec nos notifications push activées, vous ne manquerez plus jamais vos événements importants.
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
