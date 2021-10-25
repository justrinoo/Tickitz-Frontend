import React, { Component } from "react";
import { Link } from "react-router-dom";

export class TicketResult extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col text-center" style={{ marginTop: "250px" }}>
              <h2>Thankyou For Order!</h2>
              <Link to="profile">Check Profile!</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TicketResult;
