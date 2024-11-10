import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import animation from "../../assets/images/opening.gif";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: "#a5d9ef" }}>
        <img
          id="logo"
          src={animation} // Replace with the path to your GIF
          alt="Loading animation"
          style={{ width: "100%", height: "auto" }} // You can adjust the size as needed
        />
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
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
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
