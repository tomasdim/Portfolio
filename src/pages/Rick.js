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
import apiLogo from "../img/api.png";

function Rick() {
  return (
    <div>
      <ButtonAppBarCopy />
      <div className="calc-main">
        <div className="calc-left">
          <div className="calc-secondary-text">Detalles del Proyecto</div>
          <div className="calc-title">Rick & Morty</div>
          <div className="calc-ter-text">
            Explora, selecciona y guarda tus personajes favoritos de Rick &
            Morty.
          </div>
          <div className="button-container">
            <a
              rel="noopener noreferrer"
              href="https://github.com/tomasdim/rick-morty/tree/master"
              target="_blank"
              className="work-button"
            >
              Ver Código
            </a>
            <a
              rel="noopener noreferrer"
              href="https://tomasdim.github.io/rick-morty/"
              target="_blank"
              className="talk-button"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
        <div className="calc-right">
          <img alt="Rick and Morty" src={rick} className="calc-image"></img>
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
            Selector de personajes de Rick & Morty, selecciona con un corazón
            los personajes que deseas guardar y con pulgar abajo los que no sean
            tus favoritos. Cientos de personajes para explorar y descubrir.
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
                <img alt="API Logo" className="tec-img" src={apiLogo}></img>
                <h1 className="tec-text">API</h1>
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
            <Link to="./Gym">
              <img className="alt-works-image" src={gym} alt="gym"></img>
              <div className="alt-works-overlay">
                <div className="alt-image-title">Gym Maniac</div>
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
                alt="Calculator"
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

export default Rick;
