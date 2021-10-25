import React, { Component } from "react";

export class UserInformation extends Component {
  render() {
    const user = this.props.data;
    return (
      <>
        <form>
          <div className="profile__column-settings-detail-information">
            <p>Details Information</p>
            <hr style={{ border: "1px solid #DEDEDE", opacity: "0.1" }} />
            <div className="row">
              <div className="col-md-6">
                <label style={{ display: "block" }}>First Name</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  value={user.firstName}
                />
              </div>
              <div className="col-md-6">
                <label style={{ display: "block" }}>Last Name</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  value={user.lastName}
                />
              </div>
              <div className="col-md-6">
                <label style={{ display: "block" }}>E-mail</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  value={user.email}
                />
              </div>
              <div className="col-md-6">
                <label style={{ display: "block" }}>Phone Number</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  value={user.phoneNumber}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="profile__column-settings-button-update-account">
            Update changes
          </button>
        </form>
      </>
    );
  }
}

export default UserInformation;
