import React, { Component } from "react";

class JoinTickitz extends Component {
  render() {
    return (
      <>
        <div className="join__tickitz text-center">
          <span className="join__tickitz--title">Be the vanguard of the</span>
          <h1 className="join__tickitz--subtitle">Moviegoers</h1>

          <div className="d-block d-md-flex justify-content-center align-items-center mt-5">
            <input type="text" className="join__tickitz--input" placeholder="Type your email" />
            <button className="join__tickitz--button">Join Now</button>
          </div>

          <p className="mt-5 text-muted">
            By joining you as a Tickitz member, <br />
            we will always send you the latest updates via email .{" "}
          </p>
        </div>
      </>
    );
  }
}

export default JoinTickitz;
