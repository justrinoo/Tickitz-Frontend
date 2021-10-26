import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./index.css";
import ProfileInformation from "../../../components/ProfileInfo";
import UserInformation from "../../../components/UserInformation";
import UserPrivacy from "../../../components/UserPrivacy";
import axios from "../../../utils/axios";
import OrderHistory from "../../../components/OrderHistory/order";
export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      menu: false,
      isError: true,
      isActive: true,
      message: ""
    };
  }
  componentDidMount = () => {
    this.getUserInformation();
  };

  getUserInformation = () => {
    axios
      .get("user")
      .then((response) => {
        this.setState({
          users: response.data.data[0]
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
          message: error.response.data.message
        });
      });
  };
  handleMenuProfile = (e) => {
    if (e.target.textContent === "Account Settings") {
      this.setState({
        menu: false,
        isActive: true
      });
    } else {
      this.setState({
        menu: true,
        isActive: false
      });
    }
  };
  render() {
    const { users } = this.state;

    return (
      <>
        <Navbar />
        <header className="d-flex d-md-none profile__column-navigation-mobile">
          <button
            className={`${
              this.state.isActive
                ? "profile__column-settings-navigation-active-mobile"
                : "profile__column-settings-navigation-not-active-mobile"
            }`}
            onClick={this.handleMenuProfile}
          >
            Account Settings
          </button>
          <button
            className={`${
              !this.state.isActive
                ? "profile__column-settings-navigation-active-mobile"
                : "profile__column-settings-navigation-not-active-mobile"
            }`}
            onClick={this.handleMenuProfile}
          >
            Order History
          </button>
        </header>
        <section className="profile">
          <section className="profile__column">
            <ProfileInformation data={users} />
            <section className="profile__column-settings">
              <div className="profile__column-settings-navigation">
                <button
                  className={`${
                    this.state.isActive
                      ? "profile__column-settings-navigation-active "
                      : "profile__column-settings-navigation-not-active"
                  }`}
                  onClick={this.handleMenuProfile}
                >
                  Account Settings
                </button>
                <button
                  className={`${
                    !this.state.isActive
                      ? "profile__column-settings-navigation-active "
                      : "profile__column-settings-navigation-not-active "
                  }`}
                  onClick={this.handleMenuProfile}
                >
                  Order History
                </button>
              </div>
              {!this.state.menu ? (
                <>
                  <UserInformation data={users} />
                  <UserPrivacy />
                </>
              ) : (
                <>
                  <OrderHistory movieName={this.state.movieName} />
                </>
              )}
            </section>
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Profile;
