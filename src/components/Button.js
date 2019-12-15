import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";

export class Button extends Component {
  componentDidMount() {
    console.log(this.props.leads);
  }

  fetchLead = () => {
    this.props.dispatch({
      type: "FETCH_LEAD"
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-sm btn-primary px-5 py-3 "
          onClick={this.fetchLead}
        >
          Get New Lead
        </button>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Button);
