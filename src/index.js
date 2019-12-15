import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import "./index.css";
class Home extends Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
