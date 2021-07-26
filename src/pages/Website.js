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

function Website() {
  return (
    <div>
      <ButtonAppBarCopy />
      <div className="calc-main">
        <div className="calc-left">
          <div className="calc-secondary-text">Detalles del Proyecto</div>
          <div className="calc-title">Sitio Web Personal</div>
          <div className="calc-ter-text">
            Este sitio web fue creado para alojar todos mis trabajos en un solo
            lugar, a la vez obteniendo un fácil y dinámico acceso a ellos.
          </div>
          <div className="button-container">
            <a
              rel="noopener noreferrer"
              href="https://github.com/tomasdim/Portfolio/tree/master"
              target="_blank"
              className="work-button"
            >
              Ver Código
            </a>
            <a
              rel="noopener noreferrer"
              href="https://tomasdim.github.io/Portfolio"
              target="_blank"
              className="talk-button"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
        <div className="calc-right">
          <img
            src={signature}
            alt="signature name"
            className="calc-image"
          ></img>
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
            En este sitio web encontrarás mis últimos proyectos, información
            sobre <br></br> mi perfil profesional y las formas para contactarme.
            <br></br>
            <br></br>
            Tecnologías utilizadas:
            <div className="tec-grid-container container-five">
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
            </div>
          </div>
          <div className="works-secondary-text">Mis trabajos</div>
          <div className="works-main-text">Proyectos Recientes</div>
        </div>
        {/* Inicio */}
        <div className="alt-images-container">
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
              <img alt="Gym Logo" className="alt-works-image" src={gym}></img>
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

export default Website;
