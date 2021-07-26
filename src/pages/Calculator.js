import "../styles/Calculator.css";
import signature from "../img/signature.jpg";
import rick from "../img/rick.jpg";
import calculator from "../img/calculator.jpg";
import gym from "../img/gym.png";
import arrowBottom from "../img/arrow-bottom.png";
import Fun from "../components/Fun";
import Inquiry from "../components/Inquiry";
import { Link } from "react-router-dom";
import ButtonAppBarCopy from "../components/AppBarCopy";
import htmlLogo from "../img/html.png";
import cssLogo from "../img/css.png";
import reactLogo from "../img/react.svg";
import javascriptLogo from "../img/javascript.png";

function Calculator() {
  return (
    <div>
      <ButtonAppBarCopy />
      <div className="calc-main">
        <div className="calc-left">
          <div className="calc-secondary-text">Detalles del Proyecto</div>
          <div className="calc-title">Calculadora</div>
          <div className="calc-ter-text">
            Calculadora para resolver y efectuar cálculos aritméticos.
          </div>
          <div className="button-container">
            <a
              rel="noopener noreferrer"
              href="https://github.com/tomasdim/Calculator/tree/master"
              target="_blank"
              className="work-button"
            >
              Ver Código
            </a>
            <a
              rel="noopener noreferrer"
              href="https://tomasdim.github.io/Calculator/"
              target="_blank"
              className="talk-button"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
        <div className="calc-right">
          <img alt="calculator" className="calc-image" src={calculator}></img>
        </div>
      </div>
      <div className="calc-arrow-container">
        <img src={arrowBottom} alt="arrow-bottom" width="58px"></img>
      </div>
      <div className="calc-description-container">
        <div className="calc-description-text">
          <div className="calc-description-primary">
            Descripción del Proyecto
          </div>
          <div className="calc-description-secondary">
            Proyecto que simula la calculadora perteneciente a dispositivos iOS
            con total funcionalidad.<br></br>
            <br></br>
            Tecnologías utilizadas:
            <div className="tec-grid-container container-four">
              <div className="tec-grid-icons">
                <img alt="HTML Logo" className="tec-img" src={htmlLogo}></img>
                <h1 className="tec-text">HTML</h1>
              </div>
              <div className="tec-grid-icons">
                <img alt="CSS Logo" className="tec-img" src={cssLogo}></img>
                <h1 className="tec-text">CSS</h1>
              </div>
              <div className="tec-grid-icons">
                <img
                  alt="Javascript Logo"
                  className="tec-img"
                  src={javascriptLogo}
                ></img>
                <h1 className="tec-text">JavaScript</h1>
              </div>
              <div className="tec-grid-icons">
                <img alt="React Logo" className="tec-img" src={reactLogo}></img>
                <h1 className="tec-text">React</h1>
              </div>
            </div>
          </div>
          <div className="works-secondary-text">Mis trabajos</div>
          <div className="works-main-text">Proyectos Recientes</div>
        </div>
        {/* Inicio */}
        <div className="alt-images-container">
          <div className="alt-works-section">
            <Link to="./Website">
              <img
                className="alt-works-image"
                src={signature}
                alt="signature name"
              ></img>
              <div className="alt-works-overlay">
                <div className="alt-image-title">Sitio Web Personal</div>
                <div className="alt-image-description"></div>
              </div>
            </Link>
          </div>
          {/* Final */}
          {/* Inicio */}
          <div className="alt-works-section">
            <Link to="./Rick">
              <img className="alt-works-image" src={rick} alt="rick"></img>
              <div className="alt-works-overlay">
                <div className="alt-image-title">Rick & Morty</div>
                <div className="alt-image-description"></div>
              </div>
            </Link>
          </div>
          {/* Final */}
          {/* Inicio */}
          <div className="alt-works-section">
            <Link to="./Gym">
              <img className="alt-works-image" src={gym} alt="tomas3"></img>
              <div className="alt-works-overlay">
                <div className="alt-image-title">Gym Maniac</div>
                <div className="alt-image-description"></div>
              </div>
            </Link>
          </div>
          {/* Final */}
        </div>
        <div className="all-works-container">
          <a href="./#Works" className="all-works-button">
            Ver Todos
          </a>
        </div>
      </div>
      <Fun />
      <Inquiry />
    </div>
  );
}

export default Calculator;
