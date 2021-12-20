import React, { Component } from "react";
import "./App.css";
import photo from "./photoAlg.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "BACCAR Amir",
      profession: "Etudiant",
      bio: "Futur ingénieur",
      imgSrc: <img src={photo} alt="" style={{ width: 250, height: 250 }} />,
      shows: false,
      count: 0,
    };
  }
  handleShow = () => {
    this.setState({ shows: !this.state.shows });
  };
  componentDidMount() {
    return setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Profile:</h1>
        </div>
        <div className="Main">
          {this.state.shows ? (
            <div className="Elements">
              <h2>{this.state.fullName}</h2>
              <h3>{this.state.profession}</h3>
              <div> {this.state.imgSrc}</div>
              <p> bio: {this.state.bio}</p>
              <input type="text" value={this.state.count} />
            </div>
          ) : null}{" "}
          <br />
          <button className="button" onClick={this.handleShow}>
            show me
          </button>
        </div>
      </div>
    );
  }
}
