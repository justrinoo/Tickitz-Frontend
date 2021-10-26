import React, { Component } from "react";

export class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form_profile: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      }
    };
  }

  handleInputProfile = (e) => {
    this.setState({
      form_profile: {
        ...this.state.form_profile,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <>
        <form>
          <h6 className="profile__column-title d-block d-md-none">Account Settings</h6>
          <div className="profile__column-settings-detail-information">
            <p>Details Information</p>
            <hr style={{ border: "1px solid #DEDEDE", opacity: "0.1" }} />
            <div className="row">
              <div className="col-md-6 profile__column-settings-spacing">
                <label style={{ display: "block" }}>First Name</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  onChange={this.handleInputProfile}
                  placeholder="Write your new first name..."
                  name="firstName"
                />
              </div>
              <div className="col-md-6 profile__column-settings-spacing">
                <label style={{ display: "block" }}>Last Name</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  onChange={this.handleInputProfile}
                  placeholder="Write your new last name..."
                  name="lastName"
                />
              </div>
              <div className="col-md-6 profile__column-settings-spacing">
                <label style={{ display: "block" }}>E-mail</label>
                <input
                  type="email"
                  className="profile__column-settings-input_form"
                  onChange={this.handleInputProfile}
                  placeholder="Write your new email..."
                  name="email"
                />
              </div>
              <div className="col-md-6 profile__column-settings-spacing">
                <label style={{ display: "block" }}>Phone Number</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  onChange={this.handleInputProfile}
                  placeholder="Write your new phone number..."
                  name="phoneNumber"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="profile__column-settings-button-update-account-details">
            Update changes
          </button>
        </form>
      </>
    );
  }
}

export default UserInformation;
