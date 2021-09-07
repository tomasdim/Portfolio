import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import PublicIcon from "@material-ui/icons/Public";

export class WorkTemplate extends React.Component {
  render() {
    return (
      <div className="works-section-container">
        <div className="works-container">
          <div className="works-image">
            <img
              alt="project in computer"
              src={this.props.img}
              className="mockup-image"
            ></img>
          </div>
          <div className="works-details-container">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <div className="tags-container">
              {this.props.tags.map((tag) => (
                <button className="work-tag">{tag}</button>
              ))}
            </div>
            <div className="icons-container">
              <div>
                <PublicIcon
                  style={{
                    transition: "color 0.5s",
                    fontSize: "40px",
                    display: "flex",
                  }}
                  className="work-icon"
                  onClick={() => {
                    window.open(`${this.props.demolink}`, "_blank");
                  }}
                />
              </div>
              <div>
                <GitHubIcon
                  style={{
                    transition: "color 0.5s",
                    fontSize: "34px",
                    paddingLeft: "10px",
                    paddingTop: "3px",
                    display: "flex",
                  }}
                  className="work-icon"
                  onClick={() => {
                    window.open(`${this.props.githublink}`, "_blank");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
