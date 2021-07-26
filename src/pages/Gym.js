import "../styles/Gym.css";
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
import reduxLogo from "../img/redux.png";
import materialLogo from "../img/material-ui.png";

function Gym() {
  return (
    <div>
      <ButtonAppBarCopy />
      <div className="calc-main">
        <div className="calc-left">
          <div className="calc-secondary-text">Detalles del Proyecto</div>
          <div className="calc-title">Gym Maniac</div>
          <div className="calc-ter-text">
            Un gimnasio ficticio en el cual podrás ver sus instalaciones, anotar
            ejercicios y leer sobre él.
          </div>
          <div className="button-container">
            <a
              rel="noopener noreferrer"
              href="https://github.com/tomasdim/Gym/tree/master"
              target="_blank"
              className="work-button"
            >
              Ver Código
            </a>
            <a
              rel="noopener noreferrer"
              href="https://tomasdim.github.io/Gym/"
              target="_blank"
              className="talk-button"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
        <div className="calc-right">
          <img src={gym} alt="Gym Logo" className="calc-image"></img>
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
            Sitio Web para gimnasio en el cual podrás ver fotos, anotar tu
            rutina de ejercicios y formas de llegar al mismo.
            <br></br>
            <br></br>
            Tecnologías utilizadas:
            <div className="tec-grid-container container-six">
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
              <div className="tec-grid-icons">
                <img alt="Redux Logo" className="tec-img" src={reduxLogo}></img>
                <h1 className="tec-text">Redux</h1>
              </div>
              <div className="tec-grid-icons">
                <img
                  alt="Mateiral UI Logo"
                  className="tec-img"
                  src={materialLogo}
                ></img>
                <h1 className="tec-text">Material UI</h1>
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
              <img
                className="alt-works-image"
                src={rick}
                alt="Rick & Morty"
              ></img>
              <div className="alt-works-overlay">
                <div className="alt-image-title">Rick & Morty</div>
                <div className="alt-image-description"></div>
              </div>
            </Link>
          </div>
          {/* Final */}
          {/* Inicio */}
          <div className="alt-works-section">
            <Link to="./Calculator">
              <img
                className="alt-works-image"
                src={calculator}
                alt="tomas3"
              ></img>
              <div className="alt-works-overlay">
                <div className="alt-image-title">Calculadora</div>
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

export default Gym;
