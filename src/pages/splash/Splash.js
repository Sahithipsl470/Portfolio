import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
// import animation from "../../assets/images/opening.gif"; // Uncomment if you plan to use the GIF

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: "#a5d9ef" }}>
        <div className="loader-container">
          <div className="loading">
            <svg className="orange">
              <g fill="none">
                <rect x="3" y="3" width="50" height="50" />
              </g>
            </svg>
            <svg className="grey">
              <g fill="none">
                <rect x="5" y="5" width="44" height="44" stroke="#ccc" strokeWidth="2" />
              </g>
            </svg>
          </div>
          <div className="loading-text">
            <h1>
              <span className="letter">W</span>
              <span className="letter">e</span>
              <span className="letter">l</span>
              <span className="letter">c</span>
              <span className="letter">o</span>
              <span className="letter">m</span>
              <span className="letter">e</span>
              <span className="letter"></span> {/* Space after "Welcome" */}
              <span className="letter">t</span>
              <span className="letter">o</span>
              <span className="letter"></span> {/* Space after "to" */}
              <span className="letter">M</span>
              <span className="letter">y</span>
              <span className="letter"></span> {/* Space after "My" */}
              <span className="letter">P</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">t</span>
              <span className="letter">f</span>
              <span className="letter">o</span>
              <span className="letter">l</span>
              <span className="letter">i</span>
              <span className="letter">o</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500); // Redirect after 5.5 seconds
  }

  componentWillUnmount() {
    clearTimeout(this.id); // Clear the timeout when the component unmounts
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
