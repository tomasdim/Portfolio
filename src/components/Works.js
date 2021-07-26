import React from "react";
import "../styles/Works.css";
import arrowBottom from "../img/arrow-bottom.png";
import signature from "../img/signature.jpg";
import rick from "../img/rick.jpg";
import calculator from "../img/calculator.jpg";
import gym from "../img/gym.png";
import { Link } from "react-router-dom";

function Works() {
  return (
    <div>
      <div className="arrow-container">
        <img src={arrowBottom} alt="arrow-bottom" width="58px"></img>
      </div>
      <div className="works-container">
        <div id="Works" className="works-secondary-text">
          Mis Proyectos
        </div>
        <div className="works-main-text">Trabajos Recientes!!!!</div>
        <div className="images-container">
          {/* Inicio  */}
          <div className="works-section">
            <Link to="./Website">
              <img
                className="works-image"
                src={signature}
                alt="signature name"
              ></img>

              <div className="works-overlay">
                <div className="image-title-alt">Sitio Web Personal</div>
                <div className="image-description"></div>
              </div>
            </Link>
          </div>
          {/* Inicio */}
          <div className="works-section">
            <Link to="./Rick">
              <img className="works-image" src={rick} alt="rick"></img>
              <div className="works-overlay">
                <div className="image-title">Rick & Morty</div>
                <div className="image-description"></div>
              </div>
            </Link>
          </div>
          {/* Final */}
        </div>
        <div className="images-container">
          {/* Inicio */}
          <div className="works-section">
            <Link to="./Gym">
              <img className="works-image" src={gym} alt="gym"></img>
              <div className="works-overlay">
                <div className="image-title">Gym Maniac</div>
                <div className="image-description"></div>
              </div>
            </Link>
          </div>
          {/* Final */}
          <div className="works-section">
            <Link to="./Calculator">
              <img
                className="works-image"
                src={calculator}
                alt="calculator"
              ></img>
              <div className="works-overlay">
                <div className="image-title">Calculadora</div>
                <div className="image-description"></div>
              </div>
            </Link>
          </div>
          {/* Final */}
        </div>
      </div>
    </div>
  );
}

export default Works;
