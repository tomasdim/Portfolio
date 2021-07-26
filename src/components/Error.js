import React from "react";
import "../styles/NotFound.css";

function Error() {
  return (
    <div className="error-container">
      <div className="error-main-text">Página no encontrada</div>
      <div className="error-secondary-text">
        La página que estas buscando no existe o ha sido eliminada
      </div>

      <a href="/Portfolio" className="all-works-button">
        Volver a Home
      </a>
    </div>
  );
}

export default Error;
