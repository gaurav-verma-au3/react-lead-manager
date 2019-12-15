import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";
import Button from "../components/Button";
import Counter from "../components/Counter";
import List from "../components/List";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid bg-dark text-white px-3 py-4">
          <h1>Leads Manager</h1>
        </div>
        <Counter />
        <List />
        <Button />
      </Provider>
    );
  }
}
