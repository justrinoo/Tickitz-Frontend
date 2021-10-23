import React, { Component } from "react";

export class NumberSeats extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md"></div>
          {this.props.leftNumSeats.map((numLeft, idx) => (
            <div className="text-center col-md" key={idx}>
              {numLeft}
            </div>
          ))}

          <div className="text-center col-md"></div>
          {this.props.rightNumSeats.map((numRight, idx) => (
            <div className="text-center col-md" key={idx}>
              {numRight}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default NumberSeats;
