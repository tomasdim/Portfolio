import React from "react";
import "../styles/Works.css";
import arrowBottom from "../img/arrow-bottom.png";
import gym from "../img/mockup-gym.png";
import web from "../img/mockup-web.png";
import rick from "../img/mockup-rick.png";
import weather from "../img/mockup-weather.png";
import movies from "../img/mockup-movies.png";
import chat from "../img/mockup-chat.png";
import tetris from "../img/mockup-tetris.png";
import { WorkTemplate } from "./WorkTemplate";

function Works() {
  return (
    <div id="Works">
      <div className="arrow-container">
        <img src={arrowBottom} alt="arrow-bottom" width="58px"></img>
      </div>
      <WorkTemplate
        img={chat}
        title={"Chat App"}
        description={
          "Unete y empieza una conversación con la gente que se encuentre en esa misma sala, comparte tu ubicación con los demás usuarios!"
        }
        demolink="https://tomasdim-chat-app.herokuapp.com/"
        githublink={"https://github.com/tomasdim/chat-app"}
        tags={["JavaScript", "Node.JS"]}
      />
      <WorkTemplate
        img={tetris}
        title={"Tetris Game"}
        description={
          "Juega al clásico Tetris, despeja la mayor cantidad de lineas posibles para sumar puntos."
        }
        demolink="https://tomasdim.github.io/tetris-app/"
        githublink={"https://github.com/tomasdim/tetris-app/tree/master"}
        tags={["JavaScript", "React"]}
      />
      <WorkTemplate
        img={weather}
        title={"Weather Finder"}
        description={
          "Busca el clima actual por localización o coordenadas. Ve la temperatura y condición climatica en tiempo real."
        }
        demolink="https://tomasdim.github.io/weather-finder/"
        githublink={"https://github.com/tomasdim/weather-finder/tree/master"}
        tags={["JavaScript", "React", "API"]}
      />
      <WorkTemplate
        img={movies}
        title={"Movie Center"}
        description={
          "Ve los últimos estrenos, busca películas por su nombre  y ve las puntuaciones que han recibido por la critica."
        }
        demolink="https://tomasdim.github.io/movie-center/"
        githublink={"https://github.com/tomasdim/movie-center/tree/master"}
        tags={["JavaScript", "React", "API"]}
      />
      <WorkTemplate
        img={web}
        title={"Sitio Web Personal"}
        description={
          "En este sitio web encontrarás mis últimos proyectos, información sobre mi perfil profesional y las formas para contactarme."
        }
        demolink="https://tomasdim.github.io/Portfolio/"
        githublink={"https://github.com/tomasdim/Portfolio"}
        tags={["JavaScript", "React", "Material-UI"]}
      />
      <WorkTemplate
        img={rick}
        title={"Selector Rick & Morty"}
        description={
          "Explora, selecciona y guarda tus personajes favoritos de Rick & Morty."
        }
        demolink="https://tomasdim.github.io/rick-morty/"
        githublink={"https://github.com/tomasdim/rick-morty/tree/master"}
        tags={["JavaScript", "React", "Redux", "API"]}
      />
      <WorkTemplate
        img={gym}
        title={"Gym Maniac"}
        description={
          "Sitio Web para gimnasio en el cual podrás ver fotos, anotar tu rutina de ejercicios y formas de llegar al mismo."
        }
        demolink="https://tomasdim.github.io/Gym/"
        githublink={"https://github.com/tomasdim/Gym/tree/master"}
        tags={["JavaScript", "React", "Redux"]}
      />
    </div>
  );
}

export default Works;
