import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";

export class List extends Component {
  handleChange = e => {
    this.props.dispatch({
      type: "TURN_CONVERTED",
      payload: e.target.value
    });
  };

  applyFilter = e => {
    this.props.dispatch({
      type: e.target.value
    });
  };

  generate = (data, filter) => {
    let newData;
    if (filter === "all") {
      newData = data;
    }

    if (filter === "male") {
      newData = data.filter(val => val.lead.results[0].gender === filter);
    }
    if (filter === "female") {
      newData = data.filter(val => val.lead.results[0].gender === filter);
    }

    if (filter === "converted") {
      newData = data.filter(val => val.converted === true);
    }

    return newData.map(val => {
      return (
        <li
          key={val.lead.info.seed}
          className={
            "list-group-item text-center align-items-center d-flex " +
            (val.converted
              ? "list-group-item-success"
              : "list-group-item-primary")
          }
        >
          <div className="container-fluid">
            <div className="row align-items-center d-flex">
              <div className="col-md-1 ">
                <img
                  src={val.lead.results[0].picture.medium}
                  alt="avatar"
                  className="rounded-circle"
                />
              </div>
              <div className="col-md-3 ">
                {val.lead.results[0].name.title +
                  " " +
                  val.lead.results[0].name.first +
                  " " +
                  val.lead.results[0].name.last}
              </div>

              <div className="col-md-1 ">{val.lead.results[0].gender}</div>
              <div className="col-md-3 ">{val.lead.results[0].email}</div>
              <div className="col-md-3">{val.lead.results[0].phone}</div>
              <div className="col-md-1  ">
                <input
                  value={val.lead.info.seed}
                  type="checkbox"
                  checked={val.converted}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="d-flex  justify-content-end">
          <select
            class="custom-select ml-2 custom-select-sm w-25"
            onChange={this.applyFilter}
          >
            <option className="font-weight-bold" selected value="ALL">
              Filter
            </option>
            <option value="ALL">All</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="CONVERTED">Converted</option>
          </select>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item text-center text-dark center py-4 align-items-center d-flex list-group-item-primary">
            <div className="container-fluid">
              <div className="row align-items-center d-flex">
                <div className="col-md-1 ">
                  <h6>Avatar</h6>
                </div>
                <div className="col-md-3 ">
                  <h6>Name</h6>
                </div>

                <div className="col-md-1 ">
                  <h6>Gender</h6>
                </div>
                <div className="col-md-3 ">
                  <h6>Email</h6>
                </div>
                <div className="col-md-3">
                  <h6>Phone</h6>
                </div>
                <div className="col-md-1 ">
                  <h6>Converted</h6>
                </div>
              </div>
            </div>
          </li>
          {this.generate(this.props.leads, this.props.filter)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(List);
