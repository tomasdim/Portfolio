import "../styles/Presentation.css";
import manPicture from "../img/man.jpeg";
import iconweb from "../img/icon-web.png";
import icongd from "../img/icon-gd.png";
import iconem from "../img/icon-em.png";
import iconwd from "../img/icon-wd.png";

function Presentation() {
  return (
    <div>
      <div className="Go-To-Home" id="Home"></div>
      <div className="Main-presentation-container">
        <div className="presentation-container-left">
          <p>Hola!</p>
          <h1 className="main-text">Soy Tomás Di Maria, Desarrollador Web.</h1>
          <h2 className="secondary-text">
            Desarrollador autodidacta apasionado por la tecnología, aprendiendo
            y mejorando constantemente.
          </h2>
          <div className="button-container">
            <a href="#Works" className="work-button">
              Ve mis Proyectos
            </a>
            <a href="#Inquiry" className="talk-button">
              Hablemos!
            </a>
          </div>
        </div>
        <div id="Home" className="presentation-container-right">
          <div className="profile-photo">
            <img
              alt="silhouette of a man looking to the side"
              src={manPicture}
              className="man-image"
            ></img>
            <div className="skill-tag tag1">
              <div className="inner-circle">
                <img src={iconweb} alt="icon-web" width="30px"></img>
              </div>
              Desarrollo Web
            </div>
            <div className="skill-tag tag2">
              <div className="inner-circle">
                <img alt="graphic design tools" src={icongd} width="30px"></img>
              </div>
              Diseño Gráfico
            </div>
            <div className="skill-tag tag3">
              <div className="inner-circle">
                <img src={iconem} alt="icon-em" width="30px"></img>
              </div>
              tomasdim1996@gmail.com
            </div>
            <div className="skill-tag tag4">
              <div className="inner-circle">
                <img src={iconwd} alt="icon-wd" width="30px"></img>
              </div>
              Diseño Web
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
