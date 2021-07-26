import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Inquiry.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { makeStyles } from "@material-ui/core/styles";
import iconem from "../img/icon-em.png";
import iconsn from "../img/icon-sn.png";

const useStyles = makeStyles((theme) => ({
  mediaIcon: {
    color: "black",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      color: "#01b7ff",
    },
  },
}));

const Result = () => {
  return (
    <div className="mail-alert">
      <div className="mail-text">Mensaje enviado</div>
    </div>
  );
};

function Inquiry(props) {
  const classes = useStyles();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a4vf2hp",
        "template_33xbneu",
        e.target,
        "user_Pb3zvVi2nbgpY0ApA1yU4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div id="Inquiry">
      <div className="Inquiry-container">
        <div className="Inquiry-container-left">
          <h1 className="Inquiry-secondary-text">Consulta de Trabajo</h1>
          <h1 className="Inquiry-primary-text">
            Trabajemos juntos!<br></br> Haré lo mejor!
          </h1>
          <div className="Inquiry-mail-container">
            <div className="Inquiry-inner-circle">
              <img src={iconem} alt="icon-em" width="30px"></img>
            </div>
            <div className="Inquiry-mail">tomasdim1996@gmail.com</div>
          </div>

          <div className="Inquiry-net-container">
            <div className="Inquiry-inner-circle">
              <img src={iconsn} alt="icon-sn" width="30px"></img>
            </div>
            <div className="Inquiry-socia-icon-container">
              <GitHubIcon
                style={{ fontSize: 35 }}
                className={classes.mediaIcon}
                onClick={() => {
                  window.open("https://github.com/tomasdim", "_blank");
                }}
              />
            </div>
            <div className="Inquiry-socia-icon-container">
              <LinkedInIcon
                style={{ fontSize: 35 }}
                className={classes.mediaIcon}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/tomasdim/",
                    "_blank"
                  );
                }}
              />
            </div>
            <div className="Inquiry-socia-icon-container">
              <AssignmentIndIcon
                style={{ fontSize: 35 }}
                className={classes.mediaIcon}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1HFqITBMQOOfHAWlNML5VWGVFM7C-C755/view?usp=sharing",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="Inquiry-container-right">
          <div className="Inquiry-label">
            <div className="Inquiry-secondary-text">Contáctame</div>
            <form className="contact-form" onSubmit={sendEmail}>
              <input
                className="Inquiry-input"
                type="text"
                name="from_name"
                placeholder="Tu nombre"
              ></input>
              <input
                className="Inquiry-input"
                type="text"
                name="subject"
                placeholder="Asunto"
              ></input>
              <input
                className="Inquiry-input"
                type="text"
                name="reply_to"
                placeholder="Tu email"
              ></input>
              <textarea
                placeholder="Escribe tu mensaje"
                className="Inquiry-textarea"
                name="message"
              />
              {result ? <Result /> : null}
              <div className="Inquiry-button-container">
                <button type="submit" value="Send" className="Inquiry-button">
                  Contactar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
