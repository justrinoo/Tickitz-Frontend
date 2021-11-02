import React, { Component } from "react";
import axios from "../../utils/axios";
import { connect } from "react-redux";
import { GetUser } from "../../store/actions/user";
export class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: localStorage.getItem("user_id"),
      form_profile: {
        firstName: props.user.users.firstName,
        lastName: props.user.users.lastName,
        email: props.user.users.email,
        phoneNumber: props.user.users.phoneNumber
      },
      isError: false,
      message: ""
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

  handleUpdateProfile = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phoneNumber } = this.state.form_profile;
    const setDataProfile = { firstName, lastName, email, phoneNumber };
    if (firstName === "" || lastName === "" || email === "" || phoneNumber == "") {
      this.setState({
        isError: true,
        message: "Silahkan lengkapi form update profile!"
      });
    } else {
      axios
        .patch("user/update-profile", setDataProfile)
        .then(() => {
          this.props.GetUser();
          this.setState({
            form_profile: {
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: ""
            },
            isError: false
          });
        }) // getUser()
        .catch((error) => {
          this.setState({
            isError: true,
            message: error.response.data.message
          });
        });
    }
  };
  render() {
    // const user = this.state.form_profile;
    const user = this.state.form_profile;
    // console.log(data);
    return (
      <>
        <form onSubmit={this.handleUpdateProfile}>
          <h6 className="profile__column-title d-block d-md-none">Account Settings</h6>
          <div className="profile__column-settings-detail-information">
            <div className="d-flex justify-content-between">
              <p>Details Information</p>
              {this.state.isError && <p className="fw-bold text-danger">{this.state.message}</p>}
            </div>
            <hr style={{ border: "1px solid #DEDEDE", opacity: "0.1" }} />
            <div className="row">
              <div className="col-md-6 profile__column-settings-spacing">
                <label style={{ display: "block" }}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="profile__column-settings-input_form"
                  onChange={this.handleInputProfile}
                  value={user.firstName}
                  placeholder="Write your new first name..."
                />
              </div>
              <div className="col-md-6 profile__column-settings-spacing">
                <label style={{ display: "block" }}>Last Name</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  onChange={this.handleInputProfile}
                  value={user.lastName}
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
                  value={user.email}
                  placeholder="Write your new email..."
                  name="email"
                />
              </div>
              <div className="col-md-6 profile__column-settings-spacing">
                <label style={{ display: "block" }}>Phone Number</label>
                <input
                  type="text"
                  className="profile__column-settings-input_form"
                  placeholder="Write your new phone number..."
                  onChange={this.handleInputProfile}
                  value={user.phoneNumber}
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

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  GetUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
