import React, { Component } from "react";

export class UserPrivacy extends Component {
  render() {
    return (
      <>
        <form>
          <div className="profile__column-settings-detail-information">
            <p>Account and Privacy</p>
            <hr style={{ border: "1px solid #DEDEDE", opacity: "0.1" }} />
            <div className="row">
              <div className="col-md-6">
                <label style={{ display: "block" }}>New Password</label>
                <input
                  type="password"
                  className="profile__column-settings-input_form"
                  placeholder="Write your password..."
                />
              </div>
              <div className="col-md-6">
                <label style={{ display: "block" }}>Confirm Password</label>
                <input
                  type="password"
                  className="profile__column-settings-input_form"
                  placeholder="Confirm your password..."
                />
              </div>
            </div>
          </div>
          <button className="profile__column-settings-button-update-account">Update changes</button>
        </form>
      </>
    );
  }
}

export default UserPrivacy;
