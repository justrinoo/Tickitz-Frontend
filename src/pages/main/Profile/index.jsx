import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./index.css";
import ProfileInformation from "../../../components/ProfileInfo";
import UserInformation from "../../../components/UserInformation";
import UserPrivacy from "../../../components/UserPrivacy";
import axios from "../../../utils/axios";
import OrderHistory from "../../../components/OrderHistory/order";
import { connect } from "react-redux";
import { GetUser } from "../../../store-livecode/actions/user";
export class Profile extends Component {
  constructor() {
    super();
    this.state = {
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
    this.props
      .GetUser()
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response));
    // axios
    //   .get("user")
    //   .then((response) => {
    //     this.setState({
    //       users: response.data.data[0]
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       isError: true,
    //       message: error.response.data.message
    //     });
    //   });
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
            <ProfileInformation />
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
                  <UserInformation />
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

const mapDispatchToProps = {
  GetUser
};

export default connect(null, mapDispatchToProps)(Profile);
