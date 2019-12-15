import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";

export class Counter extends Component {
  render() {
    const converted = this.props.leads.filter(val => val.converted);
    const cLength = converted.length;
    const lLength = this.props.leads.length;
    const successPercent = (a = cLength, b = lLength) => {
      let c = a / b;
      let d = c * 100;
      return d.toString() + "%";
    };
    const dangerPercent = (a = cLength, b = lLength) => {
      let c = a / b;
      let d = c * 100;
      d = 100 - d;
      return d.toString() + "%";
    };
    const p = successPercent();
    const d = dangerPercent();

    return (
      <div>
        <div className="container-fluid rounded mt-3  d-flex justify-content-center">
          <div
            className="progress"
            style={{
              height: "4vh",
              backgroundColor: "transparent"
            }}
          >
            <div
              class="progress-bar bg-success "
              role="progressbar"
              style={{
                width: p
              }}
            >
              <h1 className="m-5 ">{cLength}</h1>
            </div>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{
                width: d
              }}
            >
              <h1 className="m-5">{lLength - cLength}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);
