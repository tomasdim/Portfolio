import React from "react";
import "../styles/Fun.css";
import iconwd from "../img/icon-wd.png";
import iconlc from "../img/icon-lc.png";
import iconcf from "../img/icon-cf.png";
import iconye from "../img/icon-ye.png";

function Fun() {
  return (
    <div>
      <div className="Fun-main">
        <div className="Fun-container">
          <div className="Fun-wrapper">
            <div className="Fun-facts-wrapper">
              <img
                className="Fun-image"
                src={iconwd}
                alt="window icon"
                width="65px"
              ></img>
              <div>
                <h1 className="Fun-number">
                  5+<br></br>
                </h1>
                <p className="paragraph-white">Proyectos Hechos</p>
              </div>
            </div>
            <div className="Fun-facts-wrapper">
              <img
                className="Fun-image"
                src={iconlc}
                alt="code icon"
                width="65px"
              ></img>
              <div>
                <h1 className="Fun-number">
                  ∞<br></br>
                </h1>
                <p className="paragraph-white">Líneas de Código</p>
              </div>
            </div>
            <div className="Fun-facts-wrapper">
              <img
                className="Fun-image"
                src={iconcf}
                alt="cup of coffee icon"
                width="65px"
              ></img>
              <div>
                <h1 className="Fun-number">
                  2000<br></br>
                </h1>
                <p className="paragraph-white">Tazas de café</p>
              </div>
            </div>
            <div className="Fun-facts-wrapper">
              <img
                className="Fun-image"
                src={iconye}
                alt="certifications icon"
                width="65px"
              ></img>
              <div>
                <h1 className="Fun-number">
                  2<br></br>
                </h1>
                <p className="paragraph-white">Certificaciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fun;
